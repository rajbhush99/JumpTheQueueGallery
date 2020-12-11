package com.devonfw.application.jtqj.eventmanagement.logic.impl;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.devonfw.application.jtqj.SpringBootApp;
import com.devonfw.application.jtqj.eventmanagement.logic.api.Eventmanagement;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventEto;
import com.devonfw.application.jtqj.eventmanagement.logic.api.to.EventSearchCriteriaTo;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author rajbhush
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class EventmanagementTest extends ComponentTest {
  private EventEto eventEto = new EventEto();

  @Inject
  private Eventmanagement eventManagement;

  @Override
  protected void doSetUp() {

    this.eventEto.setEventName("Butter Cup");
    this.eventEto.setLogo(null);
    this.eventEto.setCurrentNumber("Q001");
    this.eventEto.setMinAttentionTime(null);
    this.eventEto.setCustomers(2);
  }

  @Test
  public void saveEventTest() {

    EventEto eventResult = this.eventManagement.saveEvent(this.eventEto);

    assertThat(eventResult.getId()).isNotNull();
    assertThat(eventResult.getEventName()).isEqualTo("Butter Cup");

    this.eventManagement.deleteEvent(eventResult.getId());
  }

  @Test
  public void findEventTest() {

    EventSearchCriteriaTo criteria = new EventSearchCriteriaTo();
    Pageable pageable = PageRequest.of(0, 100);
    criteria.setPageable(pageable);
    Page<EventEto> result = this.eventManagement.findEvents(criteria);
    assertThat(result).isNotNull();
  }

}
