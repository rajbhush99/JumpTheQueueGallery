package com.devonfw.application.jtqj.eventmanagement.logic.impl.usecase;

import java.util.Objects;

import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import com.devonfw.application.jtqj.eventmanagement.dataaccess.api.EventEntity;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.usecase.UcManageEvent;
import com.devonfw.application.jtqj.eventmanagement.logic.base.usecase.AbstractEventUc;

/**
 * Use case implementation for modifying and deleting Events
 */
@Named
@Validated
@Transactional
public class UcManageEventImpl extends AbstractEventUc implements UcManageEvent {

  /**
   * Logger instance.
   */
  private static final Logger LOG = LoggerFactory.getLogger(UcManageEventImpl.class);

  @Override
  public boolean deleteEvent(long eventId) {

    EventEntity event = getEventRepository().find(eventId);
    getEventRepository().delete(event);
    LOG.debug("The event with id '{}' has been deleted.", eventId);
    return true;
  }

  @Override
  public EventEto saveEvent(EventEto event) {

    Objects.requireNonNull(event, "event");

    EventEntity eventEntity = getBeanMapper().map(event, EventEntity.class);

    // initialize, validate eventEntity here if necessary
    EventEntity resultEntity = getEventRepository().save(eventEntity);
    LOG.debug("Event with id '{}' has been created.", resultEntity.getId());
    return getBeanMapper().map(resultEntity, EventEto.class);
  }

  @Override
  public void decreaseEventCustomer(long eventId) {

    EventEntity eventEntity = getEventRepository().find(eventId);

    eventEntity.setCustomers(eventEntity.getCustomers() - 1);
    getEventRepository().save(eventEntity);

  }

  @Override
  public void increaseEventCustomer(long eventId) {

    EventEntity eventEntity = getEventRepository().find(eventId);
    eventEntity.setCustomers(eventEntity.getCustomers() + 1);
    getEventRepository().save(eventEntity);

  }

  @Override
  public void increaseCurrentlyAttended(long eventId) {

    // EventEntity eventEntity = getEventRepository().find(eventId);
    // String current = eventEntity.getCurrentNumber();
    // String current1 = current.substring(1);
    // int no = Integer.parseInt(current1);
    //
    // int newQueueDigit = no + 1;
    // String newQueueCode = "";
    // StringBuilder stringBuilder = new StringBuilder();
    // stringBuilder.append(newQueueDigit);
    // while (stringBuilder.length() < 3) {
    // stringBuilder.insert(0, "0");
    // }
    // stringBuilder.insert(0, "Q");
    // newQueueCode = stringBuilder.toString();
    // eventEntity.setCurrentNumber(newQueueCode);
    // getEventRepository().save(eventEntity);
  }

}
