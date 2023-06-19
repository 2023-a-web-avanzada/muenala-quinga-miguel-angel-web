// Importar la clase Clase1 desde el archivo clase1.js
import { Auto } from './auto.js';

class Concesionaria {
    metodo2() {
        // Crear una instancia de la clase Clase1
        const Auto1 = new Auto();

        // Llamar al método1 de la instancia de Clase1
        Auto1.mostrarMenu();
    }
}

// Crear una instancia de la clase Clase2
const Concesionaria1 = new Concesionaria();

// Llamar al método2 de la instancia de Clase2
Concesionaria1.metodo2();
