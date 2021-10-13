let li = "";

const cars = [        
    { brand : "BMW",    model : "M2"    },
    { brand : "Volvo",  model : "XC60"  },
    { brand : "Yugo",   model : "Coral" }
];

function loadMyCars(){
    cars.forEach(car => li += `<li>${car.brand} ${car.model}</li>`);
    document.getElementById('carList').innerHTML = li;
}