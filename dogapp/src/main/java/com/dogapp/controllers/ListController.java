package com.dogapp.controllers;

import com.dogapp.models.SavedList;
import com.dogapp.models.User;
import com.dogapp.repositories.SavedListRepository;
import com.dogapp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/lists")
public class ListController {
    @Autowired
    private final SavedListRepository savedListRepository;

    @Autowired
    private final UserRepository userRepository;

    public ListController(SavedListRepository savedListRepository, UserRepository userRepository) {
        this.savedListRepository = savedListRepository;
        this.userRepository = userRepository;
    }

    @PostMapping
    public SavedList saveList(@RequestBody SavedList list) {
        list.setCreationDate(LocalDate.now());
        return savedListRepository.save(list);
    }

    @GetMapping
    public List<SavedList> getLists(@RequestParam Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        return savedListRepository.findByUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteList(@PathVariable Long id) {
        savedListRepository.deleteById(id);
    }
}
