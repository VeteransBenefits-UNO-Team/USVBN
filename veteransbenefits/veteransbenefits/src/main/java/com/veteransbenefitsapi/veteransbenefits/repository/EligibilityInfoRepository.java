package com.veteransbenefitsapi.veteransbenefits.repository;

import com.veteransbenefitsapi.veteransbenefits.model.EligibilityInfo;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public class EligibilityInfoRepository {
    private final Map<Integer, EligibilityInfo> storage = new HashMap<>();

    public EligibilityInfo save(EligibilityInfo info) {
        storage.put(info.getYears(), info);
        return info;
    }

    public Collection<EligibilityInfo> findAll() {
        return storage.values();
    }

    public EligibilityInfo findById(int years) {
        return storage.get(years);
    }

    public EligibilityInfo update(int years, EligibilityInfo info) {
        storage.put(years, info);
        return info;
    }

    public void delete(int years) {
        storage.remove(years);
    }
}
