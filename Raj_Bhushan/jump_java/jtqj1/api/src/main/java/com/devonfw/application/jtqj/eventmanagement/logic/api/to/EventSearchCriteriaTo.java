package com.devonfw.application.jtqj.eventmanagement.logic.api.to;

import java.time.Duration;

import com.devonfw.application.jtqj.general.common.api.to.AbstractSearchCriteriaTo;
import com.devonfw.module.basic.common.api.query.StringSearchConfigTo;

/**
 * {@link SearchCriteriaTo} to find instances of {@link com.devonfw.application.jtqj.eventmanagement.common.api.Event}s.
 */
public class EventSearchCriteriaTo extends AbstractSearchCriteriaTo {

  private static final long serialVersionUID = 1L;

  private String eventName;

  private String logo;

  private String description;

  private String currentNumber;

  private Duration attentionTime;

  private Boolean isJoined;

  private Integer customers;

  private StringSearchConfigTo eventNameOption;

  private StringSearchConfigTo logoOption;

  private StringSearchConfigTo descriptionOption;

  private StringSearchConfigTo currentNumberOption;

  /**
   * @return eventNameId
   */
  public String getEventName() {

    return this.eventName;
  }

  /**
   * @param eventName setter for eventName attribute
   */
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  /**
   * @return logoId
   */
  public String getLogo() {

    return this.logo;
  }

  /**
   * @param logo setter for logo attribute
   */
  public void setLogo(String logo) {

    this.logo = logo;
  }

  /**
   * @return descriptionId
   */
  public String getDescription() {

    return this.description;
  }

  /**
   * @param description setter for description attribute
   */
  public void setDescription(String description) {

    this.description = description;
  }

  /**
   * @return currentNumberId
   */
  public String getCurrentNumber() {

    return this.currentNumber;
  }

  /**
   * @param currentNumber setter for currentNumber attribute
   */
  public void setCurrentNumber(String currentNumber) {

    this.currentNumber = currentNumber;
  }

  /**
   * @return isJoinedId
   */
  public Boolean getIsJoined() {

    return this.isJoined;
  }

  /**
   * @param isJoined setter for isJoined attribute
   */
  public void setIsJoined(Boolean isJoined) {

    this.isJoined = isJoined;
  }

  /**
   * @return customersId
   */
  public Integer getCustomers() {

    return this.customers;
  }

  /**
   * @param customers setter for customers attribute
   */
  public void setCustomers(Integer customers) {

    this.customers = customers;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getEventName() eventName}.
   */
  public StringSearchConfigTo getEventNameOption() {

    return this.eventNameOption;
  }

  /**
   * @param eventNameOption new value of {@link #getEventNameOption()}.
   */
  public void setEventNameOption(StringSearchConfigTo eventNameOption) {

    this.eventNameOption = eventNameOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getLogo() logo}.
   */
  public StringSearchConfigTo getLogoOption() {

    return this.logoOption;
  }

  /**
   * @param logoOption new value of {@link #getLogoOption()}.
   */
  public void setLogoOption(StringSearchConfigTo logoOption) {

    this.logoOption = logoOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getDescription() description}.
   */
  public StringSearchConfigTo getDescriptionOption() {

    return this.descriptionOption;
  }

  /**
   * @param descriptionOption new value of {@link #getDescriptionOption()}.
   */
  public void setDescriptionOption(StringSearchConfigTo descriptionOption) {

    this.descriptionOption = descriptionOption;
  }

  /**
   * @return the {@link StringSearchConfigTo} used to search for {@link #getCurrentNumber() currentNumber}.
   */
  public StringSearchConfigTo getCurrentNumberOption() {

    return this.currentNumberOption;
  }

  /**
   * @param currentNumberOption new value of {@link #getCurrentNumberOption()}.
   */
  public void setCurrentNumberOption(StringSearchConfigTo currentNumberOption) {

    this.currentNumberOption = currentNumberOption;
  }

  /**
   * @param attentionTime setter for attentionTime attribute
   */
  public void setAttentionTime(Duration attentionTime) {

    this.attentionTime = attentionTime;
  }

}
