package com.devonfw.application.jtqj.visitormanagement.logic.impl;

/**
 * @author rajbhush
 *
 */
import javax.inject.Inject;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.devonfw.application.jtqj.SpringBootApp;
import com.devonfw.application.jtqj.visitormanagement.logic.api.Visitormanagement;
import com.devonfw.application.jtqj.visitormanagement.logic.api.to.VisitorEto;
import com.devonfw.application.jtqj.visitormanagement.logic.api.to.VisitorSearchCriteriaTo;
import com.devonfw.module.test.common.base.ComponentTest;

@SpringBootTest(classes = SpringBootApp.class)
public class VisitormanagementTest extends ComponentTest {

  private VisitorEto visitorEto = new VisitorEto();

  @Inject
  private Visitormanagement visitormanagement;

  @Override
  protected void doSetUp() {

    this.visitorEto.setName("Raj");
    this.visitorEto.setUsername("raj@mail.com");
    this.visitorEto.setPhoneNumber("9876543211");
    this.visitorEto.setPassword("raj123");
    this.visitorEto.setUserType(false);
    this.visitorEto.setAcceptedTerms(true);
    this.visitorEto.setAcceptedCommercial(true);
  }

  @Test
  public void saveVisitorTest() {

    VisitorEto visitorEtoResult = this.visitormanagement.saveVisitor(this.visitorEto);

    assertThat(visitorEtoResult.getId()).isNotNull();
    assertThat(visitorEtoResult.getName()).isEqualTo("Raj");

    this.visitormanagement.deleteVisitor(visitorEtoResult.getId());

  }

  @Test
  public void findVisitorsTest() {

    VisitorSearchCriteriaTo criteria = new VisitorSearchCriteriaTo();
    Pageable pageable = PageRequest.of(0, 100);
    criteria.setPageable(pageable);
    Page<VisitorEto> result = this.visitormanagement.findVisitors(criteria);

    assertThat(result).isNotNull();
  }
}