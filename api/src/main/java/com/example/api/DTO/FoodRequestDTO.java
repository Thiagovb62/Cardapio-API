package com.example.api.DTO;

import com.example.api.model.Food;

public record FoodRequestDTO(
    String title,
    String image,
    Integer price) {
}
