package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.model.libro;
import java.util.Optional;

public interface libroRepository extends CrudRepository<libro,Long> {
    Optional<libro> findBytitulo(String titulo);
}
