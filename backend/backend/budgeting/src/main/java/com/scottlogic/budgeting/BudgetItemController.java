package com.scottlogic.budgeting;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping
  public void addBudgetItem(@RequestBody BudgetItem budgetItem) {
    budgetItemService.addNewBudgetItem(budgetItem);
  }

  @DeleteMapping("deleteall")
  public void deleteAllItems() {
    this.budgetItemService.deleteAllItems();
  }
}
