package com.bms.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bms.entity.User;
import com.bms.repository.UserRepository;


@RestController
@CrossOrigin("localhost:3000/")
public class UserController {
	
	@Autowired
	UserRepository repo;
	
	@PostMapping("/CreateUser")
	public String createUser(@RequestBody User User) {
		String msg="";
		try {
			repo.saveAndFlush(User);
			msg="User Object Saved";
		}catch(Exception e) {	
			msg="User Object Not Saved";
		}
		return msg;
	}
	@GetMapping("/GetAllUser")
	public List<User> loadFindAllUser() {
		return (List<User>) repo.findAll();
	}
	@DeleteMapping("/DeleteUser/{id}")
	public String deleteUser(@PathVariable("id") Integer id) {
	String msg="";
	try {
		repo.deleteById(id);
		msg="User Object Deleted";
	}catch(Exception e) {
		msg="User Object Not Deleted";
	}
	return msg;
	}
	@PutMapping("/UpdateUser")
	public String updateUser(@RequestBody User User) {
		String msg="";
        try {
		repo.save(User);
	  msg ="User Object Updated";
        }catch(Exception e) {
        msg="User Object Not Updated";	
        }
		return msg;
	}
 @GetMapping("/GetUser/{id}")
	public User performFind(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}
//id populate
@GetMapping("/GetUserId")
	List<Long> fetchUserIds() {
		return repo.fetchUserIds();
	}
@GetMapping("/AutoPops")
	public List<Long> doAutoPop(){
		return repo.getIdList();
	}
}

