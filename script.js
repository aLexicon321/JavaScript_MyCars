const form = document.querySelector('#newCarField');
const input = form.querySelectorAll('input');

function loadMyCars(){
    li = "";
    cars.forEach(car => li += `<li>${car.brand} ${car.model}</li>`);
    document.getElementById('carList').innerHTML = li;
}

function createCar(){
    let brand = input[0].value;
    let model = input[1].value;
    const newCar = { brand, model };

    if(brand !== "" && model !== ""){
        cars.push(newCar);
        clearFieldsAndRefresh();
    }else{
        console.warn("Err: check input", newCar);
        alert("Check input fields...");
    }
}

function clearFieldsAndRefresh(){
    input[0].value = "";
    input[1].value = "";
    loadMyCars();
}