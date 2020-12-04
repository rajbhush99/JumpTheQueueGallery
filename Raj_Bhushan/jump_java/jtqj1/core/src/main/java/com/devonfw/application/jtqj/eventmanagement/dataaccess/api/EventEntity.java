package com.devonfw.application.jtqj.eventmanagement.dataaccess.api;

import java.time.Duration;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.devonfw.application.jtqj.eventmanagement.common.api.Event;
import com.devonfw.application.jtqj.general.dataaccess.api.ApplicationPersistenceEntity;

/**
 * @author rajbhush
 */
@Entity
@Table(name = "Event")
public class EventEntity extends ApplicationPersistenceEntity implements Event {

  private String eventName;

  private String logo;

  private String description;

  private String currentNumber;

  private Duration attentionTime;

  private int customers;

  private static final long serialVersionUID = 1L;

  /**
   * @return eventName
   */
  @Override
  public String getEventName() {

    return this.eventName;
  }

  /**
   * @param eventName new value of {@link #geteventName}.
   */
  @Override
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  /**
   * @return logo
   */
  @Override
  public String getLogo() {

    return this.logo;
  }

  /**
   * @param logo new value of {@link #getlogo}.
   */
  @Override
  public void setLogo(String logo) {

    this.logo = logo;
  }

  /**
   * @return description
   */
  @Override
  public String getDescription() {

    return this.description;
  }

  /**
   * @param description new value of {@link #getdescription}.
   */
  @Override
  public void setDescription(String description) {

    this.description = description;
  }

  /**
   * @return currentNumber
   */
  @Override
  public String getCurrentNumber() {

    return this.currentNumber;
  }

  /**
   * @param currentNumber new value of {@link #getcurrentNumber}.
   */
  @Override
  public void setCurrentNumber(String currentNumber) {

    this.currentNumber = currentNumber;
  }

  /**
   * @return customers
   */
  @Override
  public int getCustomers() {

    return this.customers;
  }

  /**
   * @param customers new value of {@link #getcustomers}.
   */
  @Override
  public void setCustomers(int customers) {

    this.customers = customers;
  }

  @Override
  public void setAttentionTime(Duration attentionTime) {

    this.attentionTime = attentionTime;

  }

  @Override
  public Duration getAttentionTime() {

    return this.attentionTime;
  }

}
