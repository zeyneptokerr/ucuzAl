package com.zeynep.e_tcaret.repository;


import com.zeynep.e_tcaret.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
