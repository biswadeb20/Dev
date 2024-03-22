package com.nagarro.assignment.calculator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.assignment.calculator.model.CalculatorModel;
import com.nagarro.assignment.calculator.service.CalculatorService;

@RestController
@RequestMapping("/calculator")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @PostMapping("/add")
    public double add(@RequestBody CalculatorModel calculatorModel) {
        return calculatorService.add(calculatorModel.getNum1(), calculatorModel.getNum2());
    }

    @PostMapping("/subtract")
    public double subtract(@RequestBody CalculatorModel calculatorModel) {
        return calculatorService.subtract(calculatorModel.getNum1(), calculatorModel.getNum2());
    }

    @PostMapping("/multiply")
    public double multiply(@RequestBody CalculatorModel calculatorModel) {
        return calculatorService.multiply(calculatorModel.getNum1(), calculatorModel.getNum2());
    }

    @PostMapping("/divide")
    public double divide(@RequestBody CalculatorModel calculatorModel) {
        return calculatorService.divide(calculatorModel.getNum1(), calculatorModel.getNum2());
    }
}
