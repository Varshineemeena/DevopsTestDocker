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

import com.bms.entity.Bus;
import com.bms.repository.BusRepository;


@RestController
@CrossOrigin("localhost:3000/")
public class BusController {
	
	@Autowired
	BusRepository repo;
	
	@PostMapping("/CreateBus")
	public String createBus(@RequestBody Bus Bus) {
		String msg="";
		try {
			repo.saveAndFlush(Bus);
			msg="Bus Object Saved";
		}catch(Exception e) {	
			msg="Bus Object Not Saved";
		}
		return msg;
	}
	@GetMapping("/GetAllBus")
	public List<Bus> loadFindAllBus() {
		return (List<Bus>) repo.findAll();
	}
	@DeleteMapping("/DeleteBus/{id}")
	public String deleteBus(@PathVariable("id") Integer id) {
	String msg="";
	try {
		repo.deleteById(id);
		msg="Bus Object Deleted";
	}catch(Exception e) {
		msg="Bus Object Not Deleted";
	}
	return msg;
	}
	@PutMapping("/UpdateBus")
	public String updateBus(@RequestBody Bus Bus) {
		String msg="";
        try {
		repo.save(Bus);
	  msg ="Bus Object Updated";
        }catch(Exception e) {
        msg="Bus Object Not Updated";	
        }
		return msg;
	}
 @GetMapping("/GetBus/{id}")
	public Bus performFind(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}
//id populate
 	@GetMapping("/GetBusId")
	List<Long> fetchBusIds() {
		return repo.fetchBusIds();
	}
@GetMapping("/AutoPop")
	public List<Long> doAutoPop(){
		return repo.getIdList();
	}
}


