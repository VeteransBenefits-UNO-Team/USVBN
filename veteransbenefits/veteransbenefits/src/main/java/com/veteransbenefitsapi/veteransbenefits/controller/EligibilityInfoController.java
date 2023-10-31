package com.veteransbenefitsapi.veteransbenefits.controller;

import com.veteransbenefitsapi.veteransbenefits.model.EligibilityInfo;
import com.veteransbenefitsapi.veteransbenefits.repository.EligibilityInfoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/eligibility")
public class EligibilityInfoController {

    private final EligibilityInfoRepository repository;

    public EligibilityInfoController(EligibilityInfoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public Collection<EligibilityInfo> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{years}")
    public EligibilityInfo getById(@PathVariable int years) {
        return repository.findById(years);
    }

    @PostMapping
    public EligibilityInfo create(@RequestBody EligibilityInfo info) {
        return repository.save(info);
    }

    @PutMapping("/{years}")
    public EligibilityInfo update(@PathVariable int years, @RequestBody EligibilityInfo info) {
        return repository.update(years, info);
    }

    @DeleteMapping("/{years}")
    public void delete(@PathVariable int years) {
        repository.delete(years);
    }
}
