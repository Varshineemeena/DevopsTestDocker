package com.bms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bms.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	@Query("select id from User")
	public List<Long> getIdList();
	@Query("select id from User")
	 public List<Long> fetchUserIds();


}
