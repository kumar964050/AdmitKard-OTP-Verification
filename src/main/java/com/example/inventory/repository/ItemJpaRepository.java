package com.example.inventory.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.inventory.model.Item;

@Repository

public interface ItemJpaRepository extends JpaRepository<Item, Integer> {
    //
}