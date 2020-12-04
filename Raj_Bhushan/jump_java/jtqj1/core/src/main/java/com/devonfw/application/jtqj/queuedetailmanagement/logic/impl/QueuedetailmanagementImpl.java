package com.devonfw.application.jtqj.queuedetailmanagement.logic.impl;

import javax.inject.Inject;
import javax.inject.Named;

import org.springframework.data.domain.Page;

import com.devonfw.application.jtqj.general.logic.base.AbstractComponentFacade;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.Queuedetailmanagement;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailCto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailEto;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.to.QueueDetailSearchCriteriaTo;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase.UcFindQueueDetail;
import com.devonfw.application.jtqj.queuedetailmanagement.logic.api.usecase.UcManageQueueDetail;

/**
 * Implementation of component interface of queuedetailmanagement
 */
@Named
public class QueuedetailmanagementImpl extends AbstractComponentFacade implements Queuedetailmanagement {

  @Inject
  private UcFindQueueDetail ucFindQueueDetail;

  @Inject
  private UcManageQueueDetail ucManageQueueDetail;

  @Override
  public QueueDetailEto findQueueDetail(long id) {

    return this.ucFindQueueDetail.findQueueDetail(id);
  }

  @Override
  public Page<QueueDetailEto> findQueueDetails(QueueDetailSearchCriteriaTo criteria) {

    return this.ucFindQueueDetail.findQueueDetails(criteria);
  }

  @Override
  public QueueDetailEto saveQueueDetail(QueueDetailEto queuedetail) {

    return this.ucManageQueueDetail.saveQueueDetail(queuedetail);
  }

  @Override
  public QueueDetailCto findQueueDetailCto(long id) {

    return this.ucFindQueueDetail.findQueueDetailCto(id);
  }

  @Override
  public Page<QueueDetailCto> findQueueDetailCtos(QueueDetailSearchCriteriaTo criteria) {

    return this.ucFindQueueDetail.findQueueDetailCtos(criteria);
  }

  @Override
  public Page<QueueDetailEto> findQueueDetailEtos(QueueDetailSearchCriteriaTo criteria) {

    return this.ucFindQueueDetail.findQueueDetailEtos(criteria);
  }

  @Override
  public void deleteQueueDetail(long queueDetailId) {

    this.ucManageQueueDetail.deleteQueueDetail(queueDetailId);

  }

  @Override
  public QueueDetailEto joinQueue(QueueDetailEto queueDetail) {

    return this.ucManageQueueDetail.joinQueue(queueDetail);
  }

  @Override
  public void leaveQueue(long queueDetailId) {

    this.ucManageQueueDetail.leaveQueue(queueDetailId);

  }

}
