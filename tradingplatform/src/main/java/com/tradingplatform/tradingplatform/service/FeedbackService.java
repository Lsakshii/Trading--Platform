package com.tradingplatform.tradingplatform.service;

import java.util.List;

import com.tradingplatform.tradingplatform.model.Feedback;
import com.tradingplatform.tradingplatform.model.Registration;

public interface FeedbackService {
	Feedback insertrecord(Feedback r);
	List<Feedback> getAll();
	void del(int ri);
	Feedback updaterecord(int i,Feedback r);
}
