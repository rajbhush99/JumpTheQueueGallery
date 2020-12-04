package com.devonfw.application.jtqj.eventmanagement.logic.api.to;

import java.time.Duration;

import com.devonfw.application.jtqj.eventmanagement.common.api.Event;
import com.devonfw.module.basic.common.api.to.AbstractEto;

/**
 * Entity transport object of Event
 */
public class EventEto extends AbstractEto implements Event {

  private static final long serialVersionUID = 1L;

  private String eventName;

  private String logo;

  private String description;

  private String currentNumber;

  private Duration attentionTime;

  private int customers;

  @Override
  public String getEventName() {

    return this.eventName;
  }

  @Override
  public void setEventName(String eventName) {

    this.eventName = eventName;
  }

  @Override
  public String getLogo() {

    return this.logo;
  }

  @Override
  public void setLogo(String logo) {

    this.logo = logo;
  }

  @Override
  public String getDescription() {

    return this.description;
  }

  @Override
  public void setDescription(String description) {

    this.description = description;
  }

  @Override
  public String getCurrentNumber() {

    return this.currentNumber;
  }

  @Override
  public void setCurrentNumber(String currentNumber) {

    this.currentNumber = currentNumber;
  }

  @Override
  public int getCustomers() {

    return this.customers;
  }

  @Override
  public void setCustomers(int customers) {

    this.customers = customers;
  }

  @Override
  public int hashCode() {

    final int prime = 31;
    int result = super.hashCode();
    result = prime * result + ((this.eventName == null) ? 0 : this.eventName.hashCode());
    result = prime * result + ((this.logo == null) ? 0 : this.logo.hashCode());
    result = prime * result + ((this.description == null) ? 0 : this.description.hashCode());
    result = prime * result + ((this.currentNumber == null) ? 0 : this.currentNumber.hashCode());
    result = prime * result + ((Integer) this.customers).hashCode();
    return result;
  }

  @Override
  public boolean equals(Object obj) {

    if (this == obj) {
      return true;
    }
    if (obj == null) {
      return false;
    }
    // class check will be done by super type EntityTo!
    if (!super.equals(obj)) {
      return false;
    }
    EventEto other = (EventEto) obj;
    if (this.eventName == null) {
      if (other.eventName != null) {
        return false;
      }
    } else if (!this.eventName.equals(other.eventName)) {
      return false;
    }
    if (this.logo == null) {
      if (other.logo != null) {
        return false;
      }
    } else if (!this.logo.equals(other.logo)) {
      return false;
    }
    if (this.description == null) {
      if (other.description != null) {
        return false;
      }
    } else if (!this.description.equals(other.description)) {
      return false;
    }
    if (this.currentNumber == null) {
      if (other.currentNumber != null) {
        return false;
      }
    } else if (!this.currentNumber.equals(other.currentNumber)) {
      return false;
    }
    if (this.attentionTime == null) {
      if (other.attentionTime != null) {
        return false;
      }
    } else if (!this.attentionTime.equals(other.attentionTime)) {
      return false;
    }

    if (this.customers != other.customers) {
      return false;
    }
    return true;
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
