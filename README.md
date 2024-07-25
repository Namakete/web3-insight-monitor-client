# Web3 Insight Monitor Client

A user application that allows tracking transactions occurring in the blockchain.

## Tech Stack

**frontend**:

- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [vite](https://vitejs.dev/guide/) (Bundler)

## Getting Started

1. Install Dependencies `npm install`
2. Environment variables: `touch .env.local`

   ```bash
   VITE_API_TRANSACTIONS_ADDRESS_ALL="http://localhost:<port>/api/v2/transactions/address/all/"
   ```

3. Database Setup: See Database Setup
4. Start Developing: `npm run dev`

## Setup Backend

> Make sure you have [Node.js](https://nodejs.org/en) installed on your machine

1. You must clone the repository to get data from the [API](https://github.com/Namakete/web3-insight-monitor-service)
2. Install Dependencies `npm install`
3. Environment variables: touch `.env.local` to get data from the blockchain

     ```bash
     # https://etherscan.io/
     ETHEREUM_API_KEY=
   
     # You can add another blockchain API...
     ```

 4. Start Developing: `npm run start`
