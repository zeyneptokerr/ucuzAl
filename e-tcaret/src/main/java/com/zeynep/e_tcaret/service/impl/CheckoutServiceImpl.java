package com.zeynep.e_tcaret.service.impl;

import com.zeynep.e_tcaret.dto.Purchase;
import com.zeynep.e_tcaret.dto.PurchaseResponse;
import com.zeynep.e_tcaret.entity.Customer;
import com.zeynep.e_tcaret.entity.Order;
import com.zeynep.e_tcaret.entity.OrderItem;
import com.zeynep.e_tcaret.repository.CustomerRepository;
import com.zeynep.e_tcaret.service.CheckoutService;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {
        Order order = purchase.getOrder();

        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(item -> order.add(item));

        order.setBillingAddress(purchase.getBillingAddress());
        order.setShippingAddress(purchase.getShippingAddress());

        Customer customer = purchase.getCustomer();
        customer.add(order);

        customerRepository.save(customer);

        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        return UUID.randomUUID().toString();
    }
}
