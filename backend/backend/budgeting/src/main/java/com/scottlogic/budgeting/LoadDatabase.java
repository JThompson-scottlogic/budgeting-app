package com.scottlogic.budgeting;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(BudgetItemRepository repository) {
    return args -> {
      log.info("Preloading " + repository.save(new BudgetItem(
        0, "Description", "category", 50.00, "may"
      )));
      log.info("Preloading " + repository.save(new BudgetItem(
        1, "description2", "category2", -12.67, "may"
      )));
      log.info("Preloading " + repository.save(new BudgetItem(
        2, "description3", "category3", 1834.42, "may"
      )));
      log.info("Preloading " + repository.save(new BudgetItem(
        3, "description4", "category4", -200, "january"
      )));
    };
  }
}
