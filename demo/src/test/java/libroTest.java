
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Iterator;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.demo.repository.libroRepository;
import com.example.demo.model.libro;


@SpringBootTest
public class libroTest {
    @Autowired
	libroRepository libroRepository;
	
	@Test
//	@Transactional
	public void pruebaInsercionlibro() {
		try {
			Iterator<libro> libros = libroRepository.findAll().iterator();
			int cantidad = 0;
			while(libros.hasNext() ) {
				libros.next();
				cantidad ++;
			}

			libro libro = new libro();
			libro.setLibro("After", "123", "Han", 1000.00, "Bogota");
			libroRepository.save( libro );

			libro = new libro();
			libro.setLibro("Hola", "234", "Han", 23.00, "Bogota");
			libroRepository.save( libro );


			libros = libroRepository.findAll().iterator();
			int nuevaCantidad = 0;
			while( libros.hasNext() ) {
				libros.next();
				nuevaCantidad ++;
			}
			assertTrue( cantidad + 2 == nuevaCantidad, "Creados" );
			
		} catch (Exception e) {
			e.printStackTrace();
			assertTrue( false, "Error " );
			
		}
	}

	@Test
	public void pruebaModificarlibro() {
		try {
            libro libro1 = libroRepository.findById((long) 1).get();

            libro1.setLibro("After", "678", "Han", 1000.00, "Bogota");
            libroRepository.save(libro1);

            Iterator<libro> libroes = libroRepository.findAll().iterator();
            int cantidad = 0;
            while (libroes.hasNext()) {
                libroes.next();
                cantidad++;
            }
            assertTrue(cantidad == 3, "modificado");

        } catch (Exception e) {
            e.printStackTrace();
            assertTrue(false, "Error");

        }
    }

	
    


}
