/*
 *
 * You can use the following import statements
 * 
 * import javax.persistence.*;
 * 
 */

// Write your code here

package com.example.inventory.model;

import javax.persistence.*;

@Entity
@Table(name = "inventory")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "itemId")
    private int itemId;

    @Column(name = "itemName")
    private String itemName;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "supplier")
    private String supplier;

    public Item() {
    }

    public Item(int itemId, String itemName, int quantity, String supplier) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.quantity = quantity;
        this.supplier = supplier;
    }

    // id
    public int getItemId() {
        return this.itemId;
    }

    public void setItemId(int id) {
        this.itemId = id;
    }

    // name
    public String getItemName() {
        return this.itemName;
    }

    public void setItemName(String name) {
        this.itemName = name;
    }
    // quantity

    public int getQuantity() {
        return this.quantity;
    }

    public void setQuantity(int num) {
        this.quantity = num;
    }

    //
    public String getSupplier() {
        return this.supplier;
    }

    public void setSupplier(String name) {
        this.supplier = name;
    }

}
