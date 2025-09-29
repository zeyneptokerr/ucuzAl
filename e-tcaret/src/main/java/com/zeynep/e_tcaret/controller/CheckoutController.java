package com.zeynep.e_tcaret.controller;

import com.zeynep.e_tcaret.dto.Purchase;
import com.zeynep.e_tcaret.dto.PurchaseResponse;
import com.zeynep.e_tcaret.service.CheckoutService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("api/checkout")
public class CheckoutController {
    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {
        return checkoutService.placeOrder(purchase);
    }
}
