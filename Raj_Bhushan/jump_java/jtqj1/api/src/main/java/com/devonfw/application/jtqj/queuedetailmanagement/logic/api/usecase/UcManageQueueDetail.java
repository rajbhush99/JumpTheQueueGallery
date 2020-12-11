package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase;

import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;

/**
 * Interface of UcManageQueueDetail to centralize documentation and signatures of methods.
 */
/**
 * @author rajbhush
 *
 */
/**
 * @author rajbhush
 *
 */
public interface UcManageQueueDetail {

  /**
   * Deletes an queueDetail from the database by its ID 'queueDetailId'. Decreases the count of customers of the event
   * assigned to the queueDetail by one.
   *
   * @param queueId Id of the queue to delete
   */
  void deleteQueueDetail(long queueDetailId);

  /**
   * Saves a queueDetail and store it in the database.
   *
   * @param queueDetail the {@link QueueDetailEto} to create.
   * @return the new {@link QueueDetailEto} that has been saved with ID and version.
   */
  QueueDetailEto saveQueueDetail(QueueDetailEto queueDetail);

  /**
   * Saves a queueDetail and store it in the database.
   *
   * @param queueDetail the {@link QueueDetailEto} to create.
   * @return the new {@link QueueDetailEto} that has been saved with ID and version.
   */
  QueueDetailEto joinQueue(QueueDetailEto queueDetail);

  /**
   * LeaveQueue method Deletes an queueDetail from the database by its ID 'queueDetailId'. Decreases the count of
   * customers of the event assigned to the queueDetail by one.
   *
   * @param queueDetailId
   */

  void leaveQueue(long queueDetailId);

  /**
   * @param eventId
   * @return EventDetail of particular EventId
   */
  EventEto getEventDetailById(long eventId);

}
