package com.bms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bms.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Query("select id from Booking")
	public List<Long> getIdList();
	@Query("select id from Booking")
	 public List<Long> fetchBookingIds();

}
