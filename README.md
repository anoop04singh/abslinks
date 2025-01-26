# Abstract Link Shortener

A decentralized link shortener deployed on the **Abstract Testnet**, offering decentralized link management. The front-end is built using **Next.js** and **ShadCN components**, ensuring a sleek and modern design. 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Issues](#issues)

## Introduction

This decentralized application (dApp) allows users to create short links mapped to long URLs directly on the blockchain. Each wallet address can maintain **one active short link**. To create a new short link, the existing one must be deleted. Gas fees are required for creation and deletion, while redirection is gas-free and seamless.

## Features

- Decentralized link management.
- Each user can create one active short link at a time.
- Gas-free redirection to the destination page.

## Technology Stack

- **Blockchain**: Abstract Testnet  
- **Smart Contracts**: Solidity  
- **Frontend**: Next.js with ShadCN components  
- **Wallet**: Abstract Global Wallet  

## How It Works

1. **Link Creation**: Users connect their Abstract Global Wallet, input a long URL, and create a short link. This process requires gas fees.
2. **Link Deletion**: To create a new link, the existing one must be deleted, also requiring gas fees.
3. **Link Redirection**: Using a short link is gas-free and directly redirects to the mapped URL.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- Access to the Abstract Testnet.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anoop04singh/abslinks.git
   ```
2. Navigate to the directory:
   ```bash
   cd abslinks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
### or Deployed on Vercel
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://abslinks.vercel.app)

Access the live application here: [abslinks.vercel.app](https://abslinks.vercel.app)

## How to Use

Follow these steps to use the Abstract Link Shortner:

### 1. Connect Your Wallet
- Navigate to the application: [abslinks.vercel.app](https://abslinks.vercel.app).
- Fill in the details of the link you want to create and hit submit.
- If your wallet is not  connected, you will receive a pop up to connect to your **Abstract Global Wallet**.
- Select the desired option like Metamask or E-mail authentication to create the Abstract Global Wallet.
  - The same authentication method will be used to retreive the wallet details anytime and anywhere on Abstract Network while using the Global Wallet.
- Once created you must fund your wallet with some test tokens to create and delete links.
  ### Option 1: Use the Abstract Faucet
  - Steps:
    1. Visit the [Abstract Docs](https://docs.abs.xyz/tooling/faucets).
    2. Follow the instructions.
    3. Claim free test tokens to fund your transactions.

  ### Option 2: Bridge Tokens from Sepolia Testnet
  - Use the [Relay's Abstract Bridge](https://testnets.relay.link/abstract)
  - Steps:
    1. Connect your Sepolia Testnet wallet to the bridge tool.
    2. Enter the amount of tokens you want to bridge.
    3. Provide your Abstract wallet address as the destination.
    4. Confirm the transaction and wait for it to complete.



### 3. Create a Short Link
- Enter the long URL you want to shorten in the provided input field.
- Provide a custom short link name (e.g., "my-link").
- Abstract Global Wallet popup will open to confirm the transaction.
- Once transaction is completed, your short link will be up and running.
  **Note**: Gas fees will be deducted for this transaction.

### 4. Delete an Existing Short Link
- If you already have a short link and wish to create a new one, delete the old link:
  - To delete the link you must visit [**https://abslinks.vercel.app/delete**](https://abslinks.vercel.app/delete)
  - Select the short link you want to delete.
  - Confirm the transaction in your wallet to remove it from the Abstract Network.

### 5. Use a Short Link
- Simply use the short link to navigate directly to the long URL.
- for example you create a short link named test, you just need to go to / share  **abslinks.vercel.app/test** to reach the destination address.
- Redirection is **gas-free** and seamless.

## Issues
- If the entered short url is incorrect or does not point to anything, no error is showed. The timer on the redirection page will not work indicating the entered link does not point to anything.
   
