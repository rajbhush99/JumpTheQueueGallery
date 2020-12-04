package com.devonfw.application.jtqj.queuedetailmanagement.common.api;

import java.sql.Timestamp;

import com.devonfw.application.jtqj.general.common.api.ApplicationEntity;

public interface QueueDetail extends ApplicationEntity {

  /**
   * @return queueNumberId
   */
  public String getQueueNumber();

  /**
   * @param queueNumber setter for queueNumber attribute
   */
  public void setQueueNumber(String queueNumber);

  /**
   * @return creationTimeId
   */
  public Timestamp getCreationTime();

  /**
   * @param creationTime setter for creationTime attribute
   */
  public void setCreationTime(Timestamp creationTime);

  /**
   * @return startTimeId
   */
  public Timestamp getStartTime();

  /**
   * @param startTime setter for startTime attribute
   */
  public void setStartTime(Timestamp startTime);

  /**
   * @return endTimeId
   */
  public Timestamp getEndTime();

  /**
   * @param endTime setter for endTime attribute
   */
  public void setEndTime(Timestamp endTime);

  /**
   * getter for visitorId attribute
   *
   * @return visitorId
   */
  public Long getVisitorId();

  /**
   * @param visitor setter for visitor attribute
   */
  public void setVisitorId(Long visitorId);

  /**
   * getter for eventId attribute
   *
   * @return eventId
   */
  public Long getEventId();

  /**
   * @param event setter for event attribute
   */
  public void setEventId(Long eventId);

  /**
   * @param minEstimatedTime setter for minEstimatedTime attribute
   */
  public void setMinEstimatedTime(String minEstimatedTime);

  public String getMinEstimatedTime();

}
