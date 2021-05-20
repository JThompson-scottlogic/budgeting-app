package com.scottlogic.budgeting;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BudgetItem {

    @Id
    private int id;

    private String description;

    private String category;

    private double amount;

    private String month;

    BudgetItem() {}

    BudgetItem(int id, String description, String category, double amount, String month){
      this.id = id;
      this.description = description;
      this.category = category;
      this.amount = amount;
      this.month = month;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }
}
