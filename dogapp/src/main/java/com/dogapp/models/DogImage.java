package com.dogapp.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table(name = "dog_images")
public class DogImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private String responseCode;
}
