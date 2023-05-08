package com.example.api.model;

import com.example.api.DTO.FoodRequestDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Table(name = "foods")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    private String image;

    private Integer price;
    public Food(FoodRequestDTO foodRequestDTO) {
        this.title= foodRequestDTO.title();
        this.image= foodRequestDTO.image();
        this.price= foodRequestDTO.price();
    }
}
