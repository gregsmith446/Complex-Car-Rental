var carRental = { //holds all the info
    cars: [
    {
        type: "Economy", 
        price: "$60",
        available: 15
    },
    {
        type: "SUV",
        price: "$100",
        available: 10
    },
    ]
};

//this adds the 2 car types - economy and SUV to the dropdown - *WORKS*
for (var i = 0; i < carRental.cars.length; i++) {    
    var option = document.createElement("OPTION");
    option.text = carRental.cars[i].type;
    document.getElementById("dropdown").appendChild(option);
    option.setAttribute("value", i); //gives the options economy and SUV the value of 0 and 1; value is for us not for the user
    option.setAttribute("id", "car" + i); //gives the economy and SUV options the car0 and car1 IDs
    console.log(option.value);
}

document.getElementById("dropdown").onchange = function(){ //this connects the car price+avail data to the HTML *WORKS*
    var select = document.getElementById("dropdown");
    // console.log(select.value);
    document.getElementById("price").innerHTML = carRental.cars[select.value].price;
    document.getElementById("available").innerHTML = carRental.cars[select.value].available;
    
}

function formValidation(){ //form validation - triggers alert message and prevents form submission until terms and condition boxed is checked *WORKS*
	    if (!document.getElementById("confirmation").checked) {
        alert("You must agree to the terms and conditions");
        event.preventDefault();
	    }
}

function storeRenterData() { // this function serves multiple purposes
    var grabValue = document.getElementById("dropdown").value; //grabs the dropdown value: economy or SUV
    
    if (carRental.cars[grabValue].available == 0) { //if there are no cars, it willtrigger a message to tell the user
        alert("No cars available, choose a different car");
        event.preventDefault();
        return false;
    }
    else { //if there are cars, submitting will subrtract 1 car from the total
        carRental.cars[grabValue].available--;
        document.getElementById("available").innerHTML = "Available" + carRental.cars[grabValue].available;
        var name = [];
        var car = [];
        name.push(document.getElementById("available").value);
        car.push(carRental.cars[grabValue].name);
        alert("Car booked!");
        event.preventDefault();
    }
}    