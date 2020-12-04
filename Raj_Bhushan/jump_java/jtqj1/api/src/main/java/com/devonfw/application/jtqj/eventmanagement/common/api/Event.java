package com.devonfw.application.jtqj.eventmanagement.common.api;

import java.time.Duration;

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
   * @param attentionTime setter for attentionTime attribute
   */
  public void setAttentionTime(Duration attentionTime);

  public Duration getAttentionTime();

}
