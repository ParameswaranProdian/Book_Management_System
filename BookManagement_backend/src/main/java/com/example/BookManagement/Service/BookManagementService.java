package com.example.BookManagement.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.BookManagement.Model.BookManagement;
import com.example.BookManagement.Repository.BookManagementRepository;

@Service
public class BookManagementService {

    @Autowired
    private BookManagementRepository bookManagementRepository;

    public void addBooks(BookManagement entity) {
       bookManagementRepository.save(entity); 
    }

    public Optional<BookManagement> getById(Long id) {
       return bookManagementRepository.findById(id);
    }

    public List<BookManagement> getAllBooks() {
        return bookManagementRepository.findAll();
       
    }

    public void deleteById(Long id) {
        bookManagementRepository.deleteById(id);
    }

    
    
}
