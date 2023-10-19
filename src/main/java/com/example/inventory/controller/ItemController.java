package com.example.inventory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
// 
import com.example.inventory.service.ItemJpaService;
import com.example.inventory.model.Item;

@RestController
public class ItemController {

    @Autowired
    public ItemJpaService playerService;

    // api 1
    @GetMapping("/items")
    public ArrayList<Item> getItems() {
        return playerService.getAllItems();
    }

    // api 2
    @GetMapping("/items/{itemId}")
    public Item getItemById(@PathVariable("itemId") int itemId) {
        return playerService.getItemById(itemId);
    }

    // api 3
    @PostMapping("/items")
    public Item addItem(@RequestBody Item newIthem) {
        return playerService.addItem(newIthem);
    }

    // api 4
    @PutMapping("/items/{itemId}")
    public Item updateItem(@PathVariable("itemId") int id, @RequestBody Item newIthem) {
        return playerService.updateItem(id, newIthem);
    }

    // api 5
    @DeleteMapping("/items/{itemId}")
    public void deleteItemById(@PathVariable("itemId") int id) {
        playerService.deleteItemById(id);
    }

}