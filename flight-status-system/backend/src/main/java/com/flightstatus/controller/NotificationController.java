package com.flightstatus.controller;

import com.flightstatus.model.User;
import com.flightstatus.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/notifications")
    public String updateNotificationSettings(@RequestBody User user) {
        notificationService.updateNotificationSettings(user);
        return "Notification settings updated successfully!";
    }
}

