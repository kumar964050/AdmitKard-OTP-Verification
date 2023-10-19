package com.example.inventory.repository;

import java.util.ArrayList;
import com.example.inventory.model.Item;

public interface ItemRepository {
    ArrayList<Item> getAllItems();

    Item getItemById(int id);

    Item addItem(Item newItem);

    Item updateItem(int id, Item newItem);

    void deleteItemById(int id);
}