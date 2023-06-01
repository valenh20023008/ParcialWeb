package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.libro;
import com.example.demo.repository.libroRepository;
import java.util.Optional;


@RestController
@RequestMapping("/crud")
public class libroController {

    @Autowired
    libroRepository libroRepository;
    libro libro;

    @GetMapping("/n{titulo}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<libro> findLibroN(@PathVariable String titulo){
        return libroRepository.findBytitulo(titulo);
    }

    @GetMapping("/read")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<libro> libros(){
        return (java.util.List<libro>) libroRepository.findAll();
    }

    @PostMapping("/create")
    @CrossOrigin(origins = "http://localhost:4200")
    public libro create(@RequestBody libro newlibro){
        return libroRepository.save(newlibro);
    }

    @PutMapping("/update")
    @CrossOrigin(origins = "http://localhost:4200")
    public void update(@RequestBody libro libro){
        libroRepository.save(libro);
    }

    @DeleteMapping("/delete/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void delete(@PathVariable Long id){
        libroRepository.deleteById(id);
    }
    
}
