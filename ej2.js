// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power; 
    }
    
    attack() {
        console.log(`El poder del guerrero es de ${this.power}`);
        return this.power;
    }

    defend(damage) {
        this.life -= damage; // Actualiza la vida restando el daño
        console.log(`La vida restante del guerrero es: ${this.life}`);
        return this.life;
    }
}


// Maya: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

// drinkColaCao: Suma 10 al poder.

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColaCao() {
        this.power += 10;
        console.log(`El poder del Maya después de beber Cola Cao es: ${this.power}`);
        return this.power;
    }
}


// Aztec: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

// drinkNesquik: Suma 10 a la vida.

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik() {
        this.life += 10;
        console.log(`La vida del Azteca después de beber Nesquik es: ${this.life}`);
        return this.life;
    }
}

// Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik

// Maya bebe Cola Caos

// Maya ataca a azteca. Azteca defiende.

// Azteca ataca a maya. Maya defiende.

function batalla() {

    const maya2 = new Maya(160, 40);
    const aztec2 = new Aztec(180, 30);


    console.log("Azteca bebe Nesquik");
    aztec2.drinkNesquik();


    console.log("Maya bebe Cola Cao");
    maya2.drinkColaCao();


    console.log("Maya ataca al Azteca");
    const ataqueMaya = maya2.attack();
    aztec2.defend(ataqueMaya); 


    console.log("Azteca ataca al Maya");
    const ataqueAzteca = aztec2.attack();
    maya2.defend(ataqueAzteca); 
    

    console.log("Estado final:");
    console.log(`Maya - Vida: ${maya2.life}, Poder: ${maya2.power}`);
    console.log(`Azteca - Vida: ${aztec2.life}, Poder: ${aztec2.power}`);
}

// Ejecutar la batalla
batalla();