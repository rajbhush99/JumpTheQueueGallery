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

    // long eventId = getQueueDetailRepository().find(queueDetailId).getEventId();
    // this.eventmanagement.decreaseEventCustomer(eventId);
    // LOG.debug("The event with id '{}' has decreased its customers.", eventId);
    //
    // // then we delete the queueDetail
    // getQueueDetailRepository().deleteById(queueDetailId);
    // LOG.debug("The queuedetail with id '{}' has been deleted.", queueDetailId);
  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail) {

    return Objects.requireNonNull(queueDetail, "queueDetail");
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
    long visitorEntityId = queueDetailEntity.getVisitorId();
    System.out.println(eventEntityId);
    System.out.println(visitorEntityId);
    QueueDetailSearchCriteriaTo queueDetailSearchcriteriaTo = new QueueDetailSearchCriteriaTo();
    queueDetailSearchcriteriaTo.setEventId(eventEntityId);
    // queueDetailSearchcriteriaTo.setVisitorId(visitorEntityId);
    Pageable pageable = PageRequest.of(0, 1000);
    queueDetailSearchcriteriaTo.setPageable(pageable);

    List<QueueDetailEto> queueDetailEtosInEvent = getQueuedetailmanagement()
        .findQueueDetailEtos(queueDetailSearchcriteriaTo).getContent();
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
    queueDetailEntity.setStartTime(null);
    queueDetailEntity.setEndTime(null);
    queueDetailEntity.setMinEstimatedTime(getEstimatedTime(eventEntityId, queueDetailEntity.getQueueNumber()));

    // save access code
    QueueDetailEntity queueDetailEntitySaved = getQueueDetailRepository().save(queueDetailEntity);

    LOG.debug("The queuedetail with id '{}' has been saved.", queueDetailEntitySaved.getId());
    /**
     * Using the method getEventmanagement() gives access to the methods that were created earlier in the usecasemanage
     * (inside the event component). This is done so each component takes care of its own modifications.
     */
    getEventmanagement().increaseEventCustomer(queueDetailEntitySaved.getEventId());
    LOG.debug("The event with id '{}' has increased its customers.", queueDetailEntitySaved.getEventId());
    return getBeanMapper().map(queueDetailEntitySaved, QueueDetailEto.class);

  }

  private String getEstimatedTime(long eventId, String queueNo) {

    String currentlyAttended = getEventmanagement().findEvent(eventId).getCurrentNumber();
    // System.out.println(currentlyAttended);
    int currently = Integer.parseInt(currentlyAttended.substring(1));
    int queue = Integer.parseInt(queueNo.substring(1));
    // System.out.println(queue);
    int result = (queue - currently) * 120;
    // System.out.println(result);
    return Integer.toString(result);
  }

  @Override
  public void leaveQueue(long queueDetailId) {

    long eventId = getQueueDetailRepository().find(queueDetailId).getEventId();
    this.eventmanagement.decreaseEventCustomer(eventId);
    this.eventmanagement.increaseCurrentlyAttended(eventId);
    LOG.debug("The event with id '{}' has decreased its customers.", eventId);

    // then we delete the queueDetail
    getQueueDetailRepository().deleteById(queueDetailId);
    LOG.debug("The queuedetail with id '{}' has been deleted.", queueDetailId);
  }

}
