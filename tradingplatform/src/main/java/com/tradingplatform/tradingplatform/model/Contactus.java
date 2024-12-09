package com.tradingplatform.tradingplatform.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Contactus {
private String firstname,lastname;
private String message;
public Contactus() {
	super();
	// TODO Auto-generated constructor stub
}
public Contactus(String firstname, String lastname, String message) {
	super();
	this.firstname = firstname;
	this.lastname = lastname;
	this.message = message;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
@Override
public String toString() {
	return "Contactus [firstname=" + firstname + ", lastname=" + lastname + ", message=" + message + "]";
}

}
