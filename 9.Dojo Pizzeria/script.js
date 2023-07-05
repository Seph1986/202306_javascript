function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {};
    pizza.corteza = tipoCorteza;
    pizza.salsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1)

let pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

let pizza3 = pizzaOven('masa para celiacos',"tradicional","roquefort",['champiñones','pollo']);

let pizza4 = pizzaOven("borde relleno", "tradicional","mozzarella",["peperoni","tomate y albahaca"]);

console.log(pizza2,pizza3,pizza4)