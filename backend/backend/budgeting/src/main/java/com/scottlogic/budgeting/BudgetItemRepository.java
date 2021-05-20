package com.scottlogic.budgeting;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetItemRepository extends JpaRepository<BudgetItem, Integer> {
}
