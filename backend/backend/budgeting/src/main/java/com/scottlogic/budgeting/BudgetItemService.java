package com.scottlogic.budgeting;

import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class BudgetItemService {

  private final BudgetItemRepository budgetItemRepository;

  public BudgetItemService(BudgetItemRepository budgetItemRepository) {
    this.budgetItemRepository = budgetItemRepository;
  }

  public List<BudgetItem> getAllBudgetItems() {
    List<BudgetItem> allItems = budgetItemRepository.findAll();
    Collections.reverse(allItems);
    return (allItems);
  }

  public BudgetItem getBudgetItemWithId(int id) {
    return budgetItemRepository.findById(id).orElseThrow(() -> new BudgetItemNotFoundException(id));
  }

  public void addNewBudgetItem(BudgetItem budgetItem) {
    List<BudgetItem> itemList = budgetItemRepository.findAll();
    List<Integer> itemListId = new ArrayList<>();
    int maxId = 0;

    for (BudgetItem item : itemList) {
      itemListId.add(item.getId());
    }

    for (int id : itemListId) {
      if (id > maxId) {
        maxId = id;
      }
    }
    budgetItem.setId(maxId + 1);

    System.out.println(budgetItem);
    budgetItemRepository.save(budgetItem);
  }

  public void deleteItemById(int id) {
    budgetItemRepository.deleteById(id);
  }

  public List<BudgetItem> getItemsByMonth(String month) {
    List<BudgetItem> itemsByMonth = new ArrayList<>();
    List<BudgetItem> allItems = budgetItemRepository.findAll();

    for (BudgetItem item : allItems ) {
      if (item.getMonth().equals(month)) {
        itemsByMonth.add(item);
      }
    }

    return itemsByMonth;
  }

  public List<BudgetItem> getPagedMostRecentTransactions(int pageSize) {
    List<BudgetItem> fullItemList = budgetItemRepository.findAll();
    if (pageSize < fullItemList.size()) {
      return fullItemList.subList(0, pageSize);
    }
    else {
      return fullItemList;
    }
  }

  public void deleteAllItems() {
    budgetItemRepository.deleteAll();
  }
}
