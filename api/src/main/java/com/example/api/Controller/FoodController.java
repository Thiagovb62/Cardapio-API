package com.example.api.Controller;

import com.example.api.DTO.FoodRequestDTO;
import com.example.api.DTO.FoodResponseDTO;
import com.example.api.Services.FoodService;
import com.example.api.model.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foods")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping(value = "/save" , produces = "application/json")
    public FoodRequestDTO save(@RequestBody FoodRequestDTO food) {
        return foodService.save(food);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/")
    public List<FoodResponseDTO> ListAllFoods() {
        return foodService.ListAllFoods();
    }
}
