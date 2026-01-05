# TypeScript Practice

Practice repository for learning TypeScript, OOP concepts, and design patterns.

## Projects

```
├── node_modules/
├── offline_wallet/       # Wallet transfer system
├── parkinglot/          # Parking lot management
└── types/               # Shared type definitions
```

![Project Structure](https://res.cloudinary.com/dmg30zh6b/image/upload/v1767640534/Screenshot_2026-01-06_004227_qglabf.png)

## offline_wallet

Money transfer system with users, wallets, and transactions.

**Concepts:** Classes, Interfaces, Services, Error Handling

[📖 View Documentation](./offline_wallet/README.md)

## parkinglot

Parking lot management system.

[📖 View Documentation](./parkinglot/README.md)

## Setup

```bash
# Install dependencies
npm install

# Run offline_wallet
npm run offline_wallet

# Run parkinglot
npm run parkin_lot
```

## Scripts

```json
{
  "scripts": {
    "parkin_lot": "node parkinglot/parkinglot.js",
    "offline_wallet": "npx tsx offline_wallet/index.ts"
  }
}
```

---

By @sujanthapa01
