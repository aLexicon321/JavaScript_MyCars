"use strict";

let currentId = null;
const form = $.querySelector('#carField');
const input = form.querySelectorAll('input');
const _brand = input[0], _model = input[1], _year = input[2];

//  C R U D  -  F U N C T I O N S
// CREATE
function createCar(){
    const newCar = { 
        brand : _brand.value,
        model : _model.value,
        year  : _year.value
    };

    if(newCar.brand !== "" && newCar.model !== "" && newCar.year !== ""){
        cars.push(newCar);
        clearFieldsAndRefresh();
        console.log("[CREATE]", newCar);
    }else{
        console.warn("[CREATE FAILED]: Check input", newCar);
        alert("Missing Data: Check input fields...");
    }
}

// READ
function readCars(){
    let tr = "";
    window.cars ? window.cars.forEach((car, index) => 
        tr += 
        `<tr id="carNr${ index }">
            <td>${ car.brand }</td>
            <td>${ car.model }</td>
            <td>${ car.year }</td>
            <td>
                <input type="button" value="⛔" onclick="deleteCar(${index})">
                <input type="button" value="✎" onclick="editCar(${index})">
            </td>
        </tr>`
    ) : '';
    $.getElementById('carTable').innerHTML = tr;
}

// UPDATE
function updateCar(){
    if(_brand.value !== "" && _model.value !== "" && _year.value !== ""){
        cars[currentId] = {
            brand : _brand.value,
            model : _model.value,
            year  : _year.value
        };
        console.log("[UPDATE]", cars[currentId]);
        
        $.querySelector('#createBtn').hidden = false;
        $.querySelector('#updateBtn').hidden = true;
        clearFieldsAndRefresh();
    }else{
        console.warn("[UPDATE FAILED] : Check input.");
        alert("Update Failed. Check input.");
    }
}

// DELETE
function deleteCar(id){
    const removedCar = cars.splice(id,1);
    clearFieldsAndRefresh();
    console.log("[DELETE]", removedCar[0]);
}

// Edit Mode
function editCar(id){
    currentId = id;
    const car = cars[id];
    if(currentId !== "" && car !== undefined){
        _brand.value = car.brand;
        _model.value = car.model;
        _year.value = car.year;
        
        console.log("[EDIT]", car);
        $.querySelector('.heading').innerHTML = `Edit Car: <u>${car.brand}</u>`;
        $.querySelector('#createBtn').hidden = true;
        $.querySelector('#updateBtn').hidden = false;
    }else{
        alert(`ID: ${ id } doesn't exist...`);
        clearFieldsAndRefresh();
    }
}

// Clear & Reload
function clearFieldsAndRefresh(){
    $.querySelector('.heading').innerText = "Add Car";
    $.querySelector('#createBtn').hidden = false;
    $.querySelector('#updateBtn').hidden = true;
    _brand.value = "";
    _model.value = "";
    _year.value = "";
    currentId = null;
    readCars();
}