package com.scottlogic.budgeting;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BudgetItemService {

  private final BudgetItemRepository budgetItemRepository;

  public BudgetItemService(BudgetItemRepository budgetItemRepository) {
    this.budgetItemRepository = budgetItemRepository;
  }

  public List<BudgetItem> getAllBudgetItems() {
    return budgetItemRepository.findAll();
  }

  public BudgetItem getBudgetItemWithId(int id) {
    return budgetItemRepository.findById(id).orElseThrow(() -> new BudgetItemNotFoundException(id));
  }
}
