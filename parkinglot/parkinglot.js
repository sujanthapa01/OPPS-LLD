class parkinglot {
  owner_name;
  capacity;
  current_capacity = 0;
  capacity_isfull = false;
  current_parkings = [];

  constructor({ capacity, owner_name }) {
    (this.owner_name = owner_name), (this.capacity = capacity);
  }

  parkCar({ car_brand, car_owner, car_license_no, parking_timing }) {

    // check the paking is full or not
    if (this.current_capacity >= this.capacity) {
      this.capacity_isfull = true;
      console.log("parking is full");
      return;
    }

    let slot = this.current_capacity + 1;

    // car obj for parking 
    const car = {
      slot_no: slot,
      car_license_no: car_license_no,
      car_brand: car_brand,
      car_owner: car_owner,
      parking_timing: parking_timing,
    };

    this.current_parkings.push(car);
    this.current_capacity++;
  }


  // display the parking owner and parking capacity
  display_parking_owner() {
    console.log(
      `parkig_lot_owner: ${this.owner_name}\n parking_lot_capacity ${this.capacity}`
    );
  }

  // show all parked cars
  parked_cars() {
    parked_cars(this.current_parkings);
  }
}

// function to display all parked cars
function parked_cars(current_parkings) {

  // check if parking is empty then return 
  if(current_parkings.length === 0){
    console.log("parking is empty")
    return
  }

  // display all parked cars from array 
  current_parkings.forEach((car) => {
    console.log(
      ` car_brand: ${car.car_brand} | car_licence_no: ${car.car_license_no} | car_parking_time:${car.parking_timing}\n`
    );
  });
}


// parking lot instence
const parking = new parkinglot({
  capacity: 10,
  owner_name: "sujan thapa",
});


// park a car
parking.parkCar({
  car_brand: "bmw m4",
  car_owner: "SujanThapa",
  car_license_no: "HP39G1153",
  parking_timing: "30min",
});

// show all parked cars
parking.parked_cars();

// display about parking lot
parking.display_parking_owner();
