/*
 *
 * You can use the following import statements
 * 
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * 
 * import java.util.ArrayList;
 * import java.util.List;
 * 
 */

// Write your code here

package com.example.inventory.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import java.util.ArrayList;
import java.util.List;

import com.example.inventory.model.Item;
// 
import com.example.inventory.repository.*;

@Service
public class ItemJpaService implements ItemRepository {
    
    @Autowired
    private ItemJpaRepository itemJpaRepository;

    // api 1 get all
    @Override
    public ArrayList<Item> getAllItems() {
        List<Item> itemsList = itemJpaRepository.findAll();
        ArrayList<Item> Items = new ArrayList<>(itemsList);
        return Items;
    }

    // api 2 get by id
    @Override
    public Item getItemById(int id) {
        try {
            return itemJpaRepository.findById(id).get();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    };

    // api 3 add

    @Override
    public Item addItem(Item newItem) {
        itemJpaRepository.save(newItem);
        return newItem;
    }

    @Override
    public Item updateItem(int id, Item newItem) {
        try {
            Item getItem = itemJpaRepository.findById(id).get();

            if (newItem.getItemName() != null)
                getItem.setItemName(newItem.getItemName());
            if (newItem.getSupplier() != null)
                getItem.setSupplier(newItem.getSupplier());
            if (newItem.getQuantity() != 0)
                getItem.setQuantity(newItem.getQuantity());

            itemJpaRepository.save(getItem);
            return getItem;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // api 5
    @Override
    public void deleteItemById(int id) {
        try {
            Item getItem = itemJpaRepository.findById(id).get();
            itemJpaRepository.deleteById(id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}