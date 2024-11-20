package com.dogapp.controllers;

import com.dogapp.models.DogImage;
import com.dogapp.repositories.DogImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/search")
public class SearchController {
    @Autowired
    private final DogImageRepository dogImageRepository;

    public SearchController(DogImageRepository dogImageRepository) {
        this.dogImageRepository = dogImageRepository;
    }

    @GetMapping
    public List<DogImage> filterByResponseCode(@RequestParam String code) {
        return dogImageRepository.findByResponseCodeStartingWith(code);
    }
}
