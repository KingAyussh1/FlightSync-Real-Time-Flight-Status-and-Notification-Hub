package com.flightstatus.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String email;
    private String sms;
    private boolean appNotification;

    public User() {
    }

    public User(String email, String sms, boolean appNotification) {
        this.email = email;
        this.sms = sms;
        this.appNotification = appNotification;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSms() {
        return sms;
    }

    public void setSms(String sms) {
        this.sms = sms;
    }

    public boolean isAppNotification() {
        return appNotification;
    }

    public void setAppNotification(boolean appNotification) {
        this.appNotification = appNotification;
    }
}

