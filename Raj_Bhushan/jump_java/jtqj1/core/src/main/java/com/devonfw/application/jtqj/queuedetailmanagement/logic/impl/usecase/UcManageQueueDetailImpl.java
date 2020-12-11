package com.devonfw.application.jtqj.queuedetailmanagement.logic.impl.usecase;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Objects;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.queuedetailmanagement.dataaccess.api.QueueDetailEntity;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase.UcManageQueueDetail;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.base.usecase.AbstractQueueDetailUc;

/**
 * Use case implementation for modifying and deleting QueueDetails
 */
@Named
@Validated
@Transactional
public class UcManageQueueDetailImpl extends AbstractQueueDetailUc implements UcManageQueueDetail {

  @Inject
  private Eventmanagement eventmanagement;

  @Inject
  private Queuedetailmanagement queuedetailmanagement;

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcManageQueueDetailImpl.class);

  @Override
  public void deleteQueueDetail(long queueDetailId) {

    QueueDetailEntity queue = getQueueDetailRepository().find(queueDetailId);
    getQueueDetailRepository().delete(queue);
    LOG.debug("The queue with id '{}' has been deleted.", queueDetailId);
  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail) {

    return Objects.requireNonNull(queueDetail, "queueDetail");
  }

  public Eventmanagement getEventmanagement() {

    return this.eventmanagement;
  }

  public Queuedetailmanagement getQueuedetailmanagement() {

    return this.queuedetailmanagement;
  }

  @Override
  public QueueDetailEto joinQueue(QueueDetailEto queueDetail) {

    QueueDetailEntity queueDetailEntity = getBeanMapper().map(queueDetail, QueueDetailEntity.class);

    long eventEntityId = queueDetailEntity.getEventId();

    EventEto event = getEventDetailById(eventEntityId);

    List<QueueDetailEto> queueDetailEtosInEvent = getQueueDetailEtosInEvent(eventEntityId);
    // if there are no ETOs, we set the ticket to the first code
    // else we get the digit of the last ticket in the list and generate a new code for the ticket
    if (queueDetailEtosInEvent.isEmpty()) {
      queueDetailEntity.setQueueNumber("Q001");
    } else {
      QueueDetailEto lastQueueDetail = queueDetailEtosInEvent.get(queueDetailEtosInEvent.size() - 1);
      int lastQueueDigit = Integer.parseInt(lastQueueDetail.getQueueNumber().substring(1));
      queueDetailEntity.setQueueNumber(generateQueueNumber(lastQueueDigit));
    }
    queueDetailEntity.setCreationTime(Timestamp.from(Instant.now()));
    queueDetailEntity.setStartTime(event.getStartDate());
    queueDetailEntity.setEndTime(event.getEndDate());
    queueDetailEntity.setMinEstimatedTime(getQueueEstimatedTime(eventEntityId, queueDetailEntity.getQueueNumber()));

    // save access code
    QueueDetailEntity queueDetailEntitySaved = getQueueDetailRepository().save(queueDetailEntity);

    getEventmanagement().increaseEventCustomer(queueDetailEntitySaved.getEventId());
    LOG.debug("The event with id '{}' has increased its customers.", queueDetailEntitySaved.getEventId());
    return getBeanMapper().map(queueDetailEntitySaved, QueueDetailEto.class);

  }

  /**
   * @param eventEntityId
   * @return
   */
  private List<QueueDetailEto> getQueueDetailEtosInEvent(long eventEntityId) {

    QueueDetailSearchCriteriaTo queueDetailSearchcriteriaTo = new QueueDetailSearchCriteriaTo();
    queueDetailSearchcriteriaTo.setEventId(eventEntityId);
    Pageable pageable = PageRequest.of(0, 1000);
    queueDetailSearchcriteriaTo.setPageable(pageable);
    return getQueuedetailmanagement().findQueueDetailEtos(queueDetailSearchcriteriaTo).getContent();

  }

  /**
   * Generates a new queue code using the queue digit of the last codeaccess created.
   *
   * @param lastQueueDigit the int of the last codeaccess created.
   * @return the String with the new queue code (example: 'Q007').
   */
  public String generateQueueNumber(int lastQueueDigit) {

    int newQueueDigit = lastQueueDigit + 1;
    String newQueueCode = "";
    if (newQueueDigit == 1000) {
      newQueueCode = "Q000";
    } else {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.append(newQueueDigit);
      while (stringBuilder.length() < 3) {
        stringBuilder.insert(0, "0");
      }
      stringBuilder.insert(0, "Q");
      newQueueCode = stringBuilder.toString();
    }
    return newQueueCode;
  }

  /**
   * @param eventId
   * @param queueNo
   * @return Minimum estimated time for that queue number
   */
  public Timestamp getQueueEstimatedTime(long eventId, String queueNo) {

    String currentlyAttended = getEventmanagement().findEvent(eventId).getCurrentNumber();
    int currently = Integer.parseInt(currentlyAttended.substring(1));
    int queue = Integer.parseInt(queueNo.substring(1));
    long currentTime = Timestamp.from(Instant.now()).getTime();
    Timestamp queueTime = new Timestamp(currentTime + (queue - currently) * 120000);
    return queueTime;
  }

  @Override
  public EventEto getEventDetailById(long eventId) {

    return getEventmanagement().findEvent(eventId);
  }

  @Override
  public void leaveQueue(long queueDetailId) {

    long eventId = getQueueDetailRepository().find(queueDetailId).getEventId();
    getEventmanagement().decreaseEventCustomer(eventId);
    LOG.debug("The event with id '{}' has decreased its customers.", eventId);
    getQueueDetailRepository().deleteById(queueDetailId);
    LOG.debug("The queuedetail with id '{}' has been deleted.", queueDetailId);
  }

}
