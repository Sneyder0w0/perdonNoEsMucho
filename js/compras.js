// Clases de ropa
class Camisa {
    constructor(talla, color) {
        this.tipo = 'Camisa';
        this.talla = talla;
        this.color = color;
    }

    descripcion() {
        return `Camisa de color ${this.color}, talla ${this.talla}.`;
    }
}

class Pantalon {
    constructor(talla, color) {
        this.tipo = 'Pantalón';
        this.talla = talla;
        this.color = color;
    }

    descripcion() {
        return `Pantalón de color ${this.color}, talla ${this.talla}.`;
    }
}

class Sueter {
    constructor(talla, color) {
        this.tipo = 'Sueter';
        this.talla = talla;
        this.color = color;
    }

    descripcion() {
        return `Sueter de color ${this.color}, talla ${this.talla}.`;
    }
}

// Clase FabricaRopa
class FabricaRopa {
    static crearRopa(tipo, talla, color) {
        switch (tipo.toLowerCase()) {
            case 'camisa':
                return new Camisa(talla, color);
            case 'pantalon':
                return new Pantalon(talla, color);
            case 'sueter':
                return new Sueter(talla, color);
            default:
                throw new Error('Tipo de ropa no disponible');
        }
    }
}

// Función para manejar la interacción con el usuario
function crearRopa() {
    const tipo = document.getElementById('tipo').value;
    const talla = document.getElementById('talla').value;
    const color = document.getElementById('color').value;

    try {
        const prenda = FabricaRopa.crearRopa(tipo, talla, color);
        document.getElementById('resultado').innerText = prenda.descripcion();
    } catch (error) {
        document.getElementById('resultado').innerText = error.message;
    }
}
