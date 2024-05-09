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

import com.bms.entity.Booking;
import com.bms.repository.BookingRepository;


@RestController
@CrossOrigin("localhost:3000/")
public class BookingController {
	
	@Autowired
	BookingRepository repo;
	
	@PostMapping("/CreateBooking")
	public String createBooking(@RequestBody Booking Booking) {
		String msg="";
		try {
			repo.saveAndFlush(Booking);
			msg="Booking Object Saved";
		}catch(Exception e) {	
			msg="Booking Object Not Saved";
		}
		return msg;
	}
	@GetMapping("/GetAllBooking")
	public List<Booking> loadFindAllBooking() {
		return (List<Booking>) repo.findAll();
	}
	@DeleteMapping("/DeleteBooking/{id}")
	public String deleteBooking(@PathVariable("id") Integer id) {
	String msg="";
	try {
		repo.deleteById(id);
		msg="Booking Object Deleted";
	}catch(Exception e) {
		msg="Booking Object Not Deleted";
	}
	return msg;
	}
	@PutMapping("/UpdateBooking")
	public String updateBooking(@RequestBody Booking Booking) {
		String msg="";
        try {
		repo.save(Booking);
	  msg ="Booking Object Updated";
        }catch(Exception e) {
        msg="Booking Object Not Updated";	
        }
		return msg;
	}
 @GetMapping("/GetBooking/{id}")
	public Booking performFind(@PathVariable("id") Integer id) {
		return repo.findById(id).get();
	}
//id populate
//@GetMapping("/GetBookingId")
//	List<Long> fetchBookingIds() {
//		return repo.fetchBookingIds();
//	}
//@GetMapping("/AutoPops")
//	public List<Long> doAutoPop(){
//		return repo.getIdList();
//	}
}


