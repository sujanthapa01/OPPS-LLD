# TypeScript OPPS + LLD Practice

Practice repository for learning TypeScript, OOP concepts, and design patterns.

## Projects

```
├── node_modules/
├── offline_wallet/       # Wallet transfer system
├── parkinglot/          # Parking lot management
├── online-restaurant/   # Restaurant ordering system
└── types/               # Shared type definitions
```

---

## offline_wallet
Money transfer system with users, wallets, and transactions.

**Concepts:** Classes, Interfaces, Services, Error Handling

[📖 View Documentation](./offline_wallet/README.md)

---

## parkinglot
Parking lot management system.

[📖 View Documentation](./parkinglot/README.md)

---

## online-restaurant
Complete restaurant ordering system with customers, menu management, and banking.

**Concepts:** Static Factory Methods, Type Safety, Business Logic, Transaction Management

**Features:**
- Restaurant management with menu and manager
- Customer order placement with size and variant options
- Bank integration for payment processing
- Order history tracking
- Order cancellation

[📖 View Documentation](./online-restaurant/README.md)

---

## Setup
```bash
# Install dependencies
npm install

# Run offline_wallet
npm run offline_wallet

# Run parkinglot
npm run parkin_lot

# Run online-restaurant
npm run restaurant
```

## Scripts
```json
{
  "scripts": {
    "parkin_lot": "node parkinglot/parkinglot.js",
    "offline_wallet": "npx tsx offline_wallet/index.ts",
    "restaurant": "npx tsx online-restaurant/index.ts"
  }
}
```

---

**By @sujanthapa01**
