package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase;

import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;

/**
 * Interface of UcManageQueueDetail to centralize documentation and signatures of methods.
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

  void leaveQueue(long queueDetailId);

}
