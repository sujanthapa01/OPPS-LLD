# ONLINE RESTAURANT SYSTEM

## Complete Documentation

---

## Table of Contents
1. [Bank Class](#bank-class)
2. [Restaurant Class](#restaurant-class)
3. [Customer Class](#customer-class)
4. [Complete Usage Example](#complete-usage-example)

---

## Bank Class

### Overview
The Bank class manages the restaurant's financial transactions.

### Constructor
```typescript
new Bank(bank_name: "SBI" | "PNB" | "HDFC")
```

### Properties
| Property   | Type   | Description                    |
|------------|--------|--------------------------------|
| bank_name  | string | Name of the bank (SBI/PNB/HDFC)|
| balance    | number | Current bank balance           |

### Methods

#### credit(amount: number): void
Adds money to the bank balance.

```typescript
const bank = new Bank("SBI");
bank.credit(500); // Adds ₹500 to balance
console.log(bank.balance); // Output: 500
```

#### debit(amount: number): void
Deducts money from the bank balance.

```typescript
const bank = new Bank("SBI");
bank.credit(1000);
bank.debit(300); // Deducts ₹300
console.log(bank.balance); // Output: 700
```

---

## Restaurant Class

### Overview
The Restaurant class represents a restaurant with menu, manager, and banking operations.

### Static Method: Restaurant.open()
**Use this method to create a new restaurant instance.**

```typescript
static open(params: {
    restaurant_name: string,
    owner: string,
    restaurant_bio: string,
    still_serving: boolean,
    menu: TMenu,
    manager: TManager,
    bank: IBank
}): Restaurant
```

### How to Create a Restaurant

```typescript
// Step 1: Create a bank
const bank = new Bank("SBI");

// Step 2: Define menu
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

// Step 3: Define manager
const manager = {
    name: "Rohit",
    experience: 5,
    contact: "9876543210"
};

// Step 4: Open the restaurant using static method
const satyam_restaurant = Restaurant.open({
    restaurant_name: "Satyam",
    owner: "Sujan Thapa",
    restaurant_bio: "Satyam restaurant is in Dharamshala",
    still_serving: true,
    menu,
    manager,
    bank
});
```

### Methods

#### Menu(): void
Displays the complete menu with items, prices, sizes, and variants.

```typescript
// Display the menu
satyam_restaurant.Menu();

// Output:
// 📋 MENU - Satyam
// 1. Paneer Pizza
//    Description: Cheesy paneer pizza
//    Base Price: ₹200
//    Sizes: small, mid, large
//    Variants: Extra Cheese, Olives
```

#### PlaceOrder(item: TMenuItem, selectedSize: string, variant?: TVariant[]): number
Processes an order and returns the total price. This method is called by the Customer class.

```typescript
const totalPrice = satyam_restaurant.PlaceOrder(
    menu.menu[0],
    "small",
    [{ title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 }]
);
console.log(totalPrice); // Output: 240 (200 + 0 + 40)
```

**What Happens:**
- Validates the menu item exists
- Calculates price based on size multiplier
- Adds variant extra prices
- Credits the amount to the restaurant's bank
- Returns total price

---

## Customer Class

### Overview
The Customer class represents a customer who can place orders, cancel orders, and view order history.

### Static Method: Customer.set()
**Use this method to create a new customer instance.**

```typescript
static set(params: {
    name: string,
    age: number,
    address: string,
    pincode: number,
    email: string
}): Customer
```

### How to Create a Customer

```typescript
// Create a customer using static method
const sujan = Customer.set({
    name: "Sujan Thapa",
    age: 20,
    email: "sujanthapa01@gmail.com",
    address: "HP Dharamshala Sidhbari",
    pincode: 176057
});
```

### Properties
| Property     | Type      | Description                              |
|--------------|-----------|------------------------------------------|
| name         | string    | Customer's name                          |
| age          | number    | Customer's age                           |
| address      | string    | Customer's address                       |
| pincode      | number    | Customer's pincode                       |
| email        | string    | Customer's email                         |
| orderHistory | TOrder[]  | Array of all orders placed               |
| orderCounter | number    | Auto-incremented order number            |

### Methods

#### 1. placeOrder(restaurant: Restaurant, item: TMenuItem, size?: TSize, variants?: TVariant[]): void

Places an order at a specific restaurant.

**How to Use:**

```typescript
// Step 1: Customer places an order
sujan.placeOrder(
    satyam_restaurant,                    // Which restaurant
    menu.menu[0],                         // Which menu item
    { size: "small", priceMutiplier: 0 }, // Size selection
    [{ title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 }] // Variants
);

// Output: ✅ Order placed: Paneer Pizza - ₹240
```

**What Happens:**
- Calls restaurant's `PlaceOrder()` method
- Calculates total price including size and variants
- Creates an order object with order number, time, items
- Adds order to customer's order history
- Money is credited to restaurant's bank account

**Example with different configurations:**

```typescript
// Small pizza with extra cheese
sujan.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "small", priceMutiplier: 0 },
    [{ title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 }]
);

// Large pizza with extra cheese and olives
sujan.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "large", priceMutiplier: 100 },
    [
        { title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 },
        { title: "Olives", discription: "Fresh olives", extraPrice: 30 }
    ]
);

// Mid pizza with no variants
sujan.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "mid", priceMutiplier: 50 },
    []
);
```

#### 2. cancelOrder(orderNo: number): void

Cancels an order by order number.

**How to Use:**

```typescript
// Step 1: Place some orders
sujan.placeOrder(satyam_restaurant, menu.menu[0], { size: "small", priceMutiplier: 0 }, []);
// Order #1 created

sujan.placeOrder(satyam_restaurant, menu.menu[0], { size: "mid", priceMutiplier: 50 }, []);
// Order #2 created

// Step 2: Cancel order #1
sujan.cancelOrder(1);
// Output: ❌ Order 1 cancelled
```

**What Happens:**
- Removes the order from order history
- Order number is permanently removed
- Does not refund money to bank (implement refund logic if needed)

#### 3. showOrderHistory(): void

Displays all orders placed by the customer.

**How to Use:**

```typescript
// View complete order history
sujan.showOrderHistory();

// Output:
// Order No: 1
// Restaurant: Satyam
// Time: 1/10/2026, 3:45:30 PM
// Items:
// - Paneer Pizza (small) ₹240
```

**What Happens:**
- Shows all orders with order number, restaurant name, time, items, and prices
- If no orders exist, displays "No orders found."

#### 4. about(): string

Returns basic customer information.

**How to Use:**

```typescript
const info = sujan.about();
console.log(info);
// Output: Sujan Thapa, Age: 20
```

---

## Complete Usage Example

Here's a full workflow from opening a restaurant to placing orders:

```typescript
import { Bank } from "./model/bank";
import { Customer } from "./model/customer";
import { Restaurant } from "./model/restaurant";
import { TMenu } from "./types/menu.type";

// ================= STEP 1: CREATE BANK =================
const bank = new Bank("SBI");

// ================= STEP 2: CREATE MENU =================
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

// ================= STEP 3: CREATE MANAGER =================
const manager = {
    name: "Rohit",
    experience: 5,
    contact: "9876543210"
};

// ================= STEP 4: OPEN RESTAURANT =================
const satyam_restaurant = Restaurant.open({
    restaurant_name: "Satyam",
    owner: "Sujan Thapa",
    restaurant_bio: "Satyam restaurant is in Dharamshala",
    still_serving: true,
    menu,
    manager,
    bank
});

// ================= STEP 5: CREATE CUSTOMER =================
const sujan = Customer.set({
    name: "Sujan Thapa",
    age: 20,
    email: "sujanthapa01@gmail.com",
    address: "HP Dharamshala Sidhbari",
    pincode: 176057
});

// ================= STEP 6: SHOW MENU =================
satyam_restaurant.Menu();

// ================= STEP 7: PLACE ORDER =================
sujan.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "small", priceMutiplier: 0 },
    [{ title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 }]
);

// ================= STEP 8: VIEW ORDER HISTORY =================
sujan.showOrderHistory();

// ================= STEP 9: CHECK RESTAURANT BALANCE =================
console.log(`Restaurant Balance: ₹${bank.balance}`);
// Output: Restaurant Balance: ₹240
```

---

## Common Scenarios

### Scenario 1: Multiple Orders by One Customer

```typescript
const customer = Customer.set({
    name: "Ravi Kumar",
    age: 25,
    email: "ravi@gmail.com",
    address: "Delhi",
    pincode: 110001
});

// Order 1: Small pizza
customer.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "small", priceMutiplier: 0 },
    []
);

// Order 2: Large pizza with both variants
customer.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "large", priceMutiplier: 100 },
    [
        { title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 },
        { title: "Olives", discription: "Fresh olives", extraPrice: 30 }
    ]
);

// View all orders
customer.showOrderHistory();
```

### Scenario 2: Order and Cancel

```typescript
const customer = Customer.set({
    name: "Priya Sharma",
    age: 28,
    email: "priya@gmail.com",
    address: "Mumbai",
    pincode: 400001
});

// Place order
customer.placeOrder(
    satyam_restaurant,
    menu.menu[0],
    { size: "mid", priceMutiplier: 50 },
    [{ title: "Extra Cheese", discription: "Cheese topping", extraPrice: 40 }]
);

// Changed mind, cancel it
customer.cancelOrder(1);

// Check order history
customer.showOrderHistory(); // Output: No orders found.
```

### Scenario 3: Check Restaurant Revenue

```typescript
// Create bank
const bank = new Bank("HDFC");

// Open restaurant
const restaurant = Restaurant.open({
    restaurant_name: "Pizza Palace",
    owner: "John Doe",
    restaurant_bio: "Best pizzas in town",
    still_serving: true,
    menu,
    manager,
    bank
});

// Multiple customers place orders
const customer1 = Customer.set({ name: "A", age: 25, email: "a@gmail.com", address: "X", pincode: 1 });
const customer2 = Customer.set({ name: "B", age: 30, email: "b@gmail.com", address: "Y", pincode: 2 });

customer1.placeOrder(restaurant, menu.menu[0], { size: "small", priceMutiplier: 0 }, []);
customer2.placeOrder(restaurant, menu.menu[0], { size: "large", priceMutiplier: 100 }, []);

// Check total revenue
console.log(`Total Revenue: ₹${bank.balance}`);
// Output: Total Revenue: ₹500 (200 + 300)
```

---

## Important Notes

1. **Always use static methods:**
   - Use `Restaurant.open()` to create restaurants
   - Use `Customer.set()` to create customers

2. **Order number auto-increment:**
   - Each customer's order counter starts at 1
   - Automatically increments with each new order

3. **Bank balance:**
   - Money is credited to restaurant's bank when order is placed
   - Check balance using `bank.balance`

4. **Price calculation:**
   - Base price + size multiplier + variant extra prices = total

5. **Error handling:**
   - Invalid menu items throw errors
   - Invalid sizes/variants throw errors
   - Insufficient bank balance shows console message
