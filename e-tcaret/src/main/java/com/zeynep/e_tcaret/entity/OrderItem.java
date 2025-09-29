package com.zeynep.e_tcaret.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.zeynep.e_tcaret.entity.Order;


@Entity
@Table(name="order_item")
@Getter
@Setter
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name="unit_price")
    private String unitPrice;

    @Column(name="quantity")
    private String quantity;

    @Column(name="product_id")
    private String productId;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
