package com.dogapp.repositories;

import com.dogapp.models.DogImage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DogImageRepository extends JpaRepository<DogImage, Long> {
    List<DogImage> findByResponseCodeStartingWith(String responseCode);
}
