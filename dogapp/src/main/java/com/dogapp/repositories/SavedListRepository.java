package com.dogapp.repositories;

import com.dogapp.models.SavedList;
import com.dogapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SavedListRepository extends JpaRepository<SavedList, Long> {
    List<SavedList> findByUser(User user);
}
