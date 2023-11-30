package com.veteransbenefitsapi.veteransbenefits.controller;


import com.veteransbenefitsapi.veteransbenefits.model.Form;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/fillForms")
@CrossOrigin(origins = "http://localhost:4200")
public class FormController {

    @PostMapping("/fill")
    public List<Form> FillForms(@RequestBody String data) {
        System.out.println(data);
        return Collections.emptyList();
    }
}
