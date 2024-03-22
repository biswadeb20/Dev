package com.nagarro.assignment.calculator.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.nagarro.assignment.calculator.model.CalculatorModel;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
public class CalculatorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    public void setup() {
    }

    @Test
    public void testAdd() throws Exception {
        CalculatorModel model = new CalculatorModel(5, 3);
        
        mockMvc.perform(MockMvcRequestBuilders.post("/calculator/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(model)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("8.0"));
    }

    @Test
    public void testSubtract() throws Exception {
        CalculatorModel model = new CalculatorModel(5, 3);
        
        mockMvc.perform(MockMvcRequestBuilders.post("/calculator/subtract")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(model)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("2.0"));
    }

    @Test
    public void testMultiply() throws Exception {
        CalculatorModel model = new CalculatorModel(5, 3);
        
        mockMvc.perform(MockMvcRequestBuilders.post("/calculator/multiply")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(model)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("15.0"));
    }

    @Test
    public void testDivide() throws Exception {
        CalculatorModel model = new CalculatorModel(10, 2);
        
        mockMvc.perform(MockMvcRequestBuilders.post("/calculator/divide")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(model)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("5.0"));
    }
}