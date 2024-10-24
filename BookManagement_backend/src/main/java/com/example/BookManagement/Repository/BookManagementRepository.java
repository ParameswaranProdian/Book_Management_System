package com.example.BookManagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.BookManagement.Model.BookManagement;


@Repository

public interface BookManagementRepository extends JpaRepository<BookManagement , Long> {

    

    
}
