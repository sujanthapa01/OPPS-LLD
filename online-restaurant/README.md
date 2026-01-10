# ONLINE RESTAURANT

## Customer Class Documentation

### Overview

The Customer class represents a customer in the system. It implements the ICustomer interface and provides methods to place and cancel orders, view order history, and get customer details.

---

## Class: Customer

### Constructor

```typescript
new Customer(name: string, age: string, address: string, pincode: number)
```

#### Parameters

| Parameter | Type   | Description           |
|-----------|--------|-----------------------|
| name      | string | Customer's full name  |
| age       | string | Customer's age        |
| address   | string | Customer's address    |
| pincode   | number | Customer's area pincode |

#### Example

```typescript
const customer = new Customer("Sujan Thapa", "19", "Himachal Pradesh", 176001);
```

---

## Properties

| Property     | Type      | Description                              |
|--------------|-----------|------------------------------------------|
| order_no     | number    | Current order number (auto-incremented)  |
| orderHistory | TOrder[]  | Array of orders placed by the customer   |
| name         | string    | Customer's name                          |
| age          | string    | Customer's age                           |
| address      | string    | Customer's address                       |
| pincode      | number    | Customer's pincode                       |

---

## Methods

### PlaceOrder(order: TOrder): void

Places a new order and adds it to the customer's order history.

#### Parameters

| Parameter | Type   | Description        |
|-----------|--------|--------------------|
| order     | TOrder | Order to be placed |

#### Example

```typescript
customer.PlaceOrder({
  orderNo: 1,
  items: [...],
  total: 250
});
```

---

### CancelOrder(orderNo: number): void

Cancels an existing order by order number.

#### Parameters

| Parameter | Type   | Description           |
|-----------|--------|-----------------------|
| orderNo   | number | Order number to cancel |

#### Example

```typescript
customer.CancelOrder(1);
```

---

### Aboutts(): string

Returns a formatted string with the customer's details.

#### Returns

`string` — Customer information

#### Example

```typescript
console.log(customer.Aboutts());
// Output: "Customer Sujan Thapa, Age: 19, Address: Himachal Pradesh, Pincode: 176001"
```

---

## Accessing Order History

You can directly access the order history:

```typescript
console.log(customer.orderHistory);
```

---

## Usage Example

```typescript
// Create a new customer
const customer = new Customer("Sujan Thapa", "19", "Himachal Pradesh", 176001);

// Place an order
customer.PlaceOrder({
  orderNo: 1,
  items: [
    { name: "Pizza", price: 150 },
    { name: "Coke", price: 50 }
  ],
  total: 200
});

// View customer details
console.log(customer.Aboutts());

// View order history
console.log(customer.orderHistory);

// Cancel an order
customer.CancelOrder(1);
```

---# ONLINE RESTAURANT

## Customer Class Documentation

### Overview

The Customer class represents a customer in the system. It implements the ICustomer interface and provides methods to place and cancel orders, view order history, and get customer details.

---

## Class: Customer

### Constructor

```typescript
new Customer(name: string, age: string, address: string, pincode: number)
```

#### Parameters

| Parameter | Type   | Description           |
|-----------|--------|-----------------------|
| name      | string | Customer's full name  |
| age       | string | Customer's age        |
| address   | string | Customer's address    |
| pincode   | number | Customer's area pincode |

#### Example

```typescript
const customer = new Customer("Sujan Thapa", "19", "Himachal Pradesh", 176001);
```

---

## Properties

| Property     | Type      | Description                              |
|--------------|-----------|------------------------------------------|
| order_no     | number    | Current order number (auto-incremented)  |
| orderHistory | TOrder[]  | Array of orders placed by the customer   |
| name         | string    | Customer's name                          |
| age          | string    | Customer's age                           |
| address      | string    | Customer's address                       |
| pincode      | number    | Customer's pincode                       |

---

## Methods

### PlaceOrder(order: TOrder): void

Places a new order and adds it to the customer's order history.

#### Parameters

| Parameter | Type   | Description        |
|-----------|--------|--------------------|
| order     | TOrder | Order to be placed |

#### Example

```typescript
customer.PlaceOrder({
  orderNo: 1,
  items: [...],
  total: 250
});
```

---

### CancelOrder(orderNo: number): void

Cancels an existing order by order number.

#### Parameters

| Parameter | Type   | Description           |
|-----------|--------|-----------------------|
| orderNo   | number | Order number to cancel |

#### Example

```typescript
customer.CancelOrder(1);
```

---

### Aboutts(): string

Returns a formatted string with the customer's details.

#### Returns

`string` — Customer information

#### Example

```typescript
console.log(customer.Aboutts());
// Output: "Customer Sujan Thapa, Age: 19, Address: Himachal Pradesh, Pincode: 176001"
```

---

## Accessing Order History

You can directly access the order history:

```typescript
console.log(customer.orderHistory);
```

---

## Usage Example

```typescript
// Create a new customer
const customer = new Customer("Sujan Thapa", "19", "Himachal Pradesh", 176001);

// Place an order
customer.PlaceOrder({
  orderNo: 1,
  items: [
    { name: "Pizza", price: 150 },
    { name: "Coke", price: 50 }
  ],
  total: 200
});

// View customer details
console.log(customer.Aboutts());

// View order history
console.log(customer.orderHistory);

// Cancel an order
customer.CancelOrder(1);
```

---

## Notes

- The `order_no` property is automatically incremented with each new order.
- Order history is maintained as an array and can be accessed directly.
- All methods assume valid input; consider adding validation in production code.
## how to run

```bash
npm run restaurant.ts
```


## Notes

- The `order_no` property is automatically incremented with each new order.
- Order history is maintained as an array and can be accessed directly.
- All methods assume valid input; consider adding validation in production code.