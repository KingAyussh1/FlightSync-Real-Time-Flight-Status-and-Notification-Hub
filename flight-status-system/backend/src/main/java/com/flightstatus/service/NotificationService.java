package com.flightstatus.service;

import com.flightstatus.model.User;
import com.flightstatus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    @Autowired
    private UserRepository userRepository;

    public void updateNotificationSettings(User user) {
        userRepository.save(user);
    }
}

