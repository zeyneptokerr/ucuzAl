package com.zeynep.e_tcaret.service;

import com.zeynep.e_tcaret.dto.Purchase;
import com.zeynep.e_tcaret.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
