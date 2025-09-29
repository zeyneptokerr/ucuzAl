package com.zeynep.e_tcaret.dto;

import com.zeynep.e_tcaret.entity.Address;
import com.zeynep.e_tcaret.entity.Customer;
import com.zeynep.e_tcaret.entity.Order;
import com.zeynep.e_tcaret.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
