package com.dogapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
public class DogappApplication {

	public static void main(String[] args) {
		SpringApplication.run(DogappApplication.class, args);
	}

}
