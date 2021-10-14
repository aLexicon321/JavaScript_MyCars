const cars = [        
    { brand : "BMW",    model : "M2"    },
    { brand : "Volvo",  model : "XC60"  },
    { brand : "Yugo",   model : "Coral" }
];
const new_Honda = {
    color: "red", wheels: 4,
    brand: "Honda", model: "Miata",
    engine: { cylinders: 4, size: 2.2 }
};
cars.push(new_Honda);

function loadMyCars(){
    li = "";
    cars.forEach(car => li += `<li>${car.brand} ${car.model}</li>`);
    document.getElementById('carList').innerHTML = li;
}