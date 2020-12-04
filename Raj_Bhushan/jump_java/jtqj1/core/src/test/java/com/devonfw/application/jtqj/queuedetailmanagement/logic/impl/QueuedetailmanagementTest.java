package com.devonfw.application.jtqj.queuedetailmanagement.logic.impl;

import java.sql.Timestamp;
import java.time.Instant;

import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.devonfw.application.jtqj.SpringBootApp;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.module.test.common.base.ComponentTest;

/**
 * @author rajbhush
 *
 */
@SpringBootTest(classes = SpringBootApp.class)
public class QueuedetailmanagementTest extends ComponentTest {

  private QueueDetailEto queueDetailEto = new QueueDetailEto();

  @Inject
  private Queuedetailmanagement queuedetailManagement;

  @Override
  protected void doSetUp() {

    this.queueDetailEto.setQueueNumber("Q001");
    this.queueDetailEto.setCreationTime(Timestamp.from(Instant.now()));
    this.queueDetailEto.setStartTime(null);
    this.queueDetailEto.setEndTime(null);
    this.queueDetailEto.setVisitorId(1L);
    this.queueDetailEto.setEventId(22L);
  }

  @Test
  public void joinQueueTest() {

    QueueDetailEto queueResult = this.queuedetailManagement.joinQueue(this.queueDetailEto);
    assertThat(queueResult.getId()).isNotNull();
    assertThat(queueResult.getQueueNumber()).isEqualTo("Q001");
    assertThat(queueResult.getVisitorId()).isEqualTo(1);
    this.queuedetailManagement.leaveQueue(queueResult.getId());
  }

  // @Test
  // public void leaveQueueTest() {
  //
  // QueueDetailEto queueResult = this.queuedetailManagement.joinQueue(this.queueDetailEto);
  // this.queuedetailManagement.leaveQueue(queueResult.getId());
  // assertThat(queueResult.getId()).isNull();
  // }

  @Test
  public void findQueueDetails() {

    QueueDetailSearchCriteriaTo criteria = new QueueDetailSearchCriteriaTo();
    Pageable pageable = PageRequest.of(0, 100);
    criteria.setPageable(pageable);
    Page<QueueDetailEto> result = this.queuedetailManagement.findQueueDetails(criteria);
    assertThat(result).isNotNull();
  }
}
