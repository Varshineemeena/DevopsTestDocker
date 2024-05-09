package com.bms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bms.entity.Bus;

public interface BusRepository extends JpaRepository<Bus, Integer>{
	@Query("select id from Bus")
	public List<Long> getIdList();
	@Query("select id from Bus")
	 public List<Long> fetchBusIds();

}
