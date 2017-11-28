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

var renterData = { //a place for the data to go when submitted
        name:[],
        car:[],
}

//this adds the 2 car types - economy and SUV to the dropdown - *WORKS*
for (var i = 0; i < carRental.cars.length; i++) {    
    var option = document.createElement("OPTION");
    option.text = carRental.cars[i].type;
    document.getElementById("dropdown").appendChild(option);
    option.setAttribute("value", i); //gives the options economy and SUV the value of 0 and 1; value is for us not for the user
    option.setAttribute("id", "car" + i); //gives the economy and SUV options the car0 and car1 IDs
    console.log(option.value);
}

document.getElementById("dropdown").onchange = function(){ //this nameless function is assigned to the onchange event handler 
    var select = document.getElementById("dropdown");
    // console.log(select.value);
    document.getElementById("price").innerHTML = carRental.cars[select.value].price;
    document.getElementById("available").innerHTML = carRental.cars[select.value].available;
    //this connects the car price+avail data to the HTML *WORKS*
}

function formValidation(){ //form validation - prevent form submission until correct.
	       // And Form Validation using an else if statement - Prevents form submission is form is incomplete - triggers an alert message
	       var renterName = document.getElementById("renterName")
	       if(option == "none"){
	           alert("Please choose a car type");
	       }
	       else if(renterName == ""){
	           alert("Please enter your first and last name");
	       } else {
	           document.getElementById('displayInfo').innerHTML = "Your reservation was successful!"
	       }
	       return false;
	   }

// add a section here that will deduct a car from the amount when form is submitted.
// cars.econcount--;
