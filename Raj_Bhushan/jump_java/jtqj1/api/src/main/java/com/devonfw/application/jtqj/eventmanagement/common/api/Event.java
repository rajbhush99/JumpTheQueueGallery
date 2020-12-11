package com.devonfw.application.jtqj.eventmanagement.common.api;

import java.sql.Timestamp;

import com.devonfw.application.jtqj.general.common.api.ApplicationEntity;

public interface Event extends ApplicationEntity {

  /**
   * @return eventNameId
   */
  public String getEventName();

  /**
   * @param eventName setter for eventName attribute
   */
  public void setEventName(String eventName);

  /**
   * @return logoId
   */
  public String getLogo();

  /**
   * @param logo setter for logo attribute
   */
  public void setLogo(String logo);

  /**
   * @return descriptionId
   */
  public String getDescription();

  /**
   * @param description setter for description attribute
   */
  public void setDescription(String description);

  /**
   * @return currentNumberId
   */
  public String getCurrentNumber();

  /**
   * @param currentNumber setter for currentNumber attribute
   */
  public void setCurrentNumber(String currentNumber);

  /**
   * @return customersId
   */
  public int getCustomers();

  /**
   * @param customers setter for customers attribute
   */
  public void setCustomers(int customers);

  /**
   * @return startDateId
   */
  public Timestamp getStartDate();

  /**
   * @param startDate setter for startDate attribute
   */
  public void setStartDate(Timestamp startDate);

  /**
   * @return endDateId
   */
  public Timestamp getEndDate();

  /**
   * @param endDate setter for endDate attribute
   */
  public void setEndDate(Timestamp endDate);

  /**
   * @return minAttentionTimeId
   */
  public Timestamp getMinAttentionTime();

  /**
   * @param minAttentionTime setter for minAttentionTime attribute
   */
  public void setMinAttentionTime(Timestamp minAttentionTime);

}
