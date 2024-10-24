package com.example.BookManagement.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.BookManagement.Model.BookManagement;
import com.example.BookManagement.Service.BookManagementService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin("*")
@RequestMapping("/apicall")
@RestController
public class BookManagementController {

    @Autowired
    private BookManagementService bookManagementsService;

    @PostMapping("/addBook")
    public void postMethodName(@RequestBody BookManagement entity) {
        
        bookManagementsService.addBooks(entity);
        
    }
    
    @GetMapping("/getById/{id}")
   public Optional<BookManagement>getByid(@PathVariable Long id)  {
    
    return bookManagementsService.getById(id);
    
}

    @GetMapping("/getAll")
    public List<BookManagement>getAll() {
        return bookManagementsService.getAllBooks(); 
  
}
    @DeleteMapping("/deleteBook/{id}")
    public void deleteById(@PathVariable Long id)  {
        bookManagementsService.deleteById(id);

    }

}
