package com.tradingplatform.tradingplatform.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tradingplatform.tradingplatform.model.Contactus;
@Repository
@Qualifier("contactRepo")
public interface ContactusRepository extends JpaRepository< Contactus, Integer>{

}
