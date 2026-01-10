import { Bank } from "./model/bank";
import { Customer } from "./model/customer";
import { Restaurant } from "./model/restaurant";
import { TMenu } from "./types/menu.type"

// ================= BANK =================
const bank = new Bank("SBI");

// ================= MENU =================
const menu: TMenu = {
    menu: [
        {
            item_no: 1,
            title: "Paneer Pizza",
            description: "Cheesy paneer pizza",
            price: 200,
            size: [
                { size: "small", priceMutiplier: 0 },
                { size: "mid", priceMutiplier: 50 },
                { size: "large", priceMutiplier: 100 }
            ],
            variant: [
                { title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 },
                { title: "Olives", discription: "Fresh olives", extraPrice: 30 }
            ]
        }
    ]
};

// ================= MANAGER =================
const manager = {
    name: "Rohit",
    experience: 5,
    contact: "9876543210"
};

// ================= RESTAURANT =================
const satyam_restaurant = Restaurant.open({
    restaurant_name: "Satyam",
    owner: "Sujan Thapa",
    restaurant_bio: "Satyam restaurant is in Dharamshala",
    still_serving: true,
    menu,
    manager,
    bank
});

// ================= CUSTOMER =================
const sujan = Customer.set({
    name: "Sujan Thapa",
    age: 20,
    email: "sujanthapa01@gmail.com",
    address: "HP Dharamshala Sidhbari",
    pincode: 176057
});

// ================= SHOW MENU =================
satyam_restaurant.Menu();

// ================= PLACE ORDER =================
sujan.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "small" ,priceMutiplier: 0},
    [{ title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 }]
);

// ================= ORDER HISTORY =================
sujan.showOrderHistory();

// ================= RESTAURANT BANK BALANCE =============
console.log(bank.balance)