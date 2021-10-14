const form = document.querySelector('#newCarField');
const input = form.querySelectorAll('input');
const 
    field_brand = input[0],
    field_model = input[1],
    field_year = input[2];

let currentId = null;

// CREATE
function createCar(){
    let brand = field_brand.value;
    let model = field_model.value;
    let year = field_year.value;
    const newCar = { brand, model, year };

    if(brand !== "" && model !== ""){
        cars.push(newCar);
        clearFieldsAndRefresh();
    }else{
        console.warn("Err: check input", newCar);
        alert("Check input fields...");
    }
}

// READ
function readCars(){
    let tr = "";

    console.log('ReadCars:', cars);
    cars.forEach((car, index) => 
        tr += 
        `<tr id="carNr${index}">
            <td> ${car.brand} </td>
            <td> ${car.model} </td>
            <td> ${car.year || ""} </td>
            <td>
                <input type="button" value="X" onclick="deleteCar(${index})">
                <input type="button" value="EDIT" onclick="editCar(${index})">
            </td>
        </tr>`
    );
    document.getElementById('carTable').innerHTML = tr;
}

// EDIT
function updateCar(){

    console.log("[UPDATE] ID:",{ id : currentId });
    cars[currentId] = {
        brand : field_brand.value,
        model : field_model.value,
        year : field_year.value
    }
    readCars();
    clearFieldsAndRefresh();

    document.querySelector('#createBtn').hidden = false;
    document.querySelector('#updateBtn').hidden = true;
}

// UPDATE
function editCar(id){

    currentId = id;

    console.log("[EDIT] ID:" + id);
    const car = cars[id];
    field_brand.value = car.brand;
    field_model.value = car.model;
    field_year.value = car.year || "";

    document.querySelector('#createBtn').hidden = true;
    document.querySelector('#updateBtn').hidden = false;
}

// DELETE
function deleteCar(id){
    console.log("[DELETE] ID:", { id, car : cars[id] });
    cars.splice(id,1);
    readCars();
}

function clearFieldsAndRefresh(){
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
    readCars();
}