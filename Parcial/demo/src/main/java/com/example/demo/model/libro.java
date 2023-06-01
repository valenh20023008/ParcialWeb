package com.example.demo.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;


@Entity
@Table(name = "libro_valentina")
//@SequenceGenerator(name="seq1", initialValue=1, allocationSize=10000)
public class libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String titulo;
    private Integer referencia;
    private String autor;
    private Double precio;
    private String ubicacion;
   
   
    public libro() {

    }

    
    public libro(String titulo, Integer referencia, String autor, Double precio, String ubicacion) {
        super();
        this.titulo = titulo;
        this.referencia = referencia;
        this.autor = autor;
        this.precio = precio;
        this.ubicacion = ubicacion;
    }


    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Integer getReferencia() {
        return referencia;
    }

    public void setReferencia(Integer referencia) {
        this.referencia = referencia;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public void setLibro(String titulo, Integer referencia, String autor, Double precio, String ubicacion) {
		this.titulo = titulo;
		this.referencia = referencia;
		this.autor = autor;
		this.precio = precio;
		this.ubicacion = ubicacion;
	}
    
}





