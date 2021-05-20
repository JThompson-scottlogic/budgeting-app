package com.scottlogic.budgeting;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping()
public class BudgetItemController {

  public BudgetItemService budgetItemService;

  public BudgetItemController (BudgetItemService budgetItemService) {
    this.budgetItemService = budgetItemService;
  }

  @GetMapping("getall")
  public List<BudgetItem> getAllBudgetItems() {
    return budgetItemService.getAllBudgetItems();
  }
}
