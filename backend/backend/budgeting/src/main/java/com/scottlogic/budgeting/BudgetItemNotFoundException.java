package com.scottlogic.budgeting;

public class BudgetItemNotFoundException extends RuntimeException{
  public BudgetItemNotFoundException (int id) {
    super("Cannot find post with id" + id);
  }
}
