package com.example.api.Services;

import com.example.api.DTO.FoodRequestDTO;
import com.example.api.DTO.FoodResponseDTO;
import com.example.api.Repository.FoodRepository;
import com.example.api.model.Food;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public FoodRequestDTO save(@RequestBody  FoodRequestDTO foodRequestDTO) {
        Food food = new Food(foodRequestDTO);
        foodRepository.save(food);
        return foodRequestDTO;
    }
    public List<FoodResponseDTO> ListAllFoods() {
        return foodRepository.findAll().stream().map(FoodResponseDTO::new).toList();
    }
}
