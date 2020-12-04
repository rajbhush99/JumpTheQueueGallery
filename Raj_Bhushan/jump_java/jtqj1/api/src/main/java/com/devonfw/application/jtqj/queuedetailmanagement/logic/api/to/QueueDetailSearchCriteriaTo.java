package com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to;

import java.sql.Timestamp;
import java.time.Duration;

import com.devonfw.application.jtqj.general.common.api.to.AbstractSearchCriteriaTo;
import com.devonfw.module.basic.common.api.query.StringSearchConfigTo;

/**
 * {@link SearchCriteriaTo} to find instances of
 * {@link com.devonfw.application.jtqj.queuedetailmanagement.common.api.QueueDetail}s.
 */
public class QueueDetailSearchCriteriaTo extends AbstractSearchCriteriaTo {

  private static final long serialVersionUID = 1L;

  private String queueNumber;

  private Timestamp creationTime;

  private Timestamp startTime;

  private Timestamp endTime;

  private Long visitorId;

  private Long eventId;

  private StringSearchConfigTo queueNumberOption;

  private Duration minEstimatedTime;

  /**
   * @return queueNumberId
   */
  public String getQueueNumber() {

    return this.queueNumber;
  }

  /**
   * @param queueNumber setter for queueNumber attribute
   */
  public void setQueueNumber(String queueNumber) {

    this.queueNumber = queueNumber;
  }

  /**
   * @return creationTimeId
   */
  public Timestamp getCreationTime() {

    return this.creationTime;
  }

  /**
   * @param creationTime setter for creationTime attribute
   */
  public void setCreationTime(Timestamp creationTime) {

    this.creationTime = creationTime;
  }

  /**
   * @return startTimeId
   */
  public Timestamp getStartTime() {

    return this.startTime;
  }

  /**
   * @param startTime setter for startTime attribute
   */
  public void setStartTime(Timestamp startTime) {

    this.startTime = startTime;
  }

  /**
   * @return endTimeId
   */
  public Timestamp getEndTime() {

    return this.endTime;
  }

  /**
   * @param endTime setter for endTime attribute
   */
  public void setEndTime(Timestamp endTime) {

    this.endTime = endTime;
  }

  /**
   * getter for visitorId attribute
   *
   * @return visitorId
   */
  public Long getVisitorId() {

    return this.visitorId;
  }

  /**
   * @param visitor setter for visitor attribute
   */
  public void setVisitorId(Long visitorId) {

    this.visitorId = visitorId;
  }

  /**
   * getter for eventId attribute
   *
   * @return eventId
   */
  public Long getEventId() {

    return this.eventId;
  }

  /**
   * @param event setter for event attribute
   */
  public void setEventId(Long eventId) {

    this.eventId = eventId;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getQueueNumber() queueNumber}.
   */
  public StringSearchConfigTo getQueueNumberOption() {

    return this.queueNumberOption;
  }

  /**
   * @param queueNumberOption new value of {@link #getQueueNumberOption()}.
   */
  public void setQueueNumberOption(StringSearchConfigTo queueNumberOption) {

    this.queueNumberOption = queueNumberOption;
  }

  /**
   * @return minEstimatedTimeId
   */
  public Duration getMinEstimatedTime() {

    return this.minEstimatedTime;
  }

  /**
   * @param minEstimatedTime setter for minEstimatedTime attribute
   */
  public void setMinEstimatedTime(Duration minEstimatedTime) {

    this.minEstimatedTime = minEstimatedTime;
  }

}
