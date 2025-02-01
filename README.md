## Project Title: Carbon Credit System

### Description
A decentralized platform that leverages blockchain technology to manage the issuance, transfer, and tracking of carbon credits. The platform ensures transparency, security, and efficiency in the carbon credit ecosystem, enabling organizations to offset their carbon emissions while promoting environmental sustainability.

### Features
- **Carbon Credit Creation and Management**: Organizations can create carbon credits with unique identifiers, specify the amount of CO2 offset, and issue these credits on the Avalanche blockchain.
- **Secure and Transparent Transactions**: All carbon credit transactions, including transfers and redemptions, are logged immutably on the blockchain, ensuring transparency and traceability.
- **Automated Smart Contract Functionality**: Smart contracts automate the transfer and redemption of carbon credits, minimizing manual intervention and reducing errors.
- **Event Logging**: Event logs track all activities on the platform, including credit issuance, transfer, and redemption, providing real-time updates to stakeholders.
- **Low-Cost, High-Speed Transactions**: The platform leverages Avalanche's speed and low transaction fees to enhance user experience and affordability.

### Tech Stack Used
- **Language**: Solidity, JavaScript
- **Frameworks**: Avalanche, Node.js, Express.js
- **Tools**: Truffle, Hardhat, Ganache, MySQL

### Project Setup Instructions
#### Install Node
##### For Ubuntu/Debian-based Linux:
1. **Update your package list:**
   ```bash
   sudo apt update
   ```
2. **Install Node.js** (using the NodeSource repository to get the latest version):
   - First, install the Node.js repository:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   ```
   - Replace `16.x` with the desired version if you need a different one.
3. **Install Node.js:**
   ```bash
   sudo apt install -y nodejs
   ```
4. **Verify installation:**
   - Check the installed version of Node.js:
   ```bash
   node -v
   ```

#### Install Package Manager
**Note**: Yarn is faster than npm.

##### Install Yarn using `curl` (if no other package manager is installed):
```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```
##### OR install using Yarn:
```bash
yarn install
yarn --version
```
##### OR install via npm:
```bash
npm install --global yarn
```

#### Install & Use Remixd
The `remixd` daemon command is used to enable a local file system to be accessible in the Remix IDE. It allows you to work with your local files directly from the browser-based IDE.

##### Installing Remixd using Yarn:
```bash
yarn global add @remix-project/remixd
```
##### Verify Installation:
```bash
remixd --version
```
##### Start Remixd:
Open the Remix IDE in your browser before running the below command.

Run the following command in your terminal:
```bash
remixd -s /home/eddyweru/GreenXchange/Backend/SmartContracts --remix-ide https://remix.ethereum.org
```
##### After running the command successfully:
1. Go to Remix IDE.
2. Navigate to the File Explorer.
3. Select **Connect to Local File System**.
4. You should see the folder structure and files from your local directory (e.g., `/home/eddyweru/GreenXchange/Backend/SmartContracts`).
5. Any changes made locally will reflect in Remix IDE.

### Setup Instructions
1. **Clone the repository:**
   ```sh
   git clone (https://github.com/Avalanche-Team1-DAO-Kenya/GreenXchange)
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Compile the smart contracts:**
   ```sh
   npx hardhat compile
   ```
4. **Configure the Avalanche network:** 
   - Open the `hardhat.config.js` file and add your Avalanche network details under the networks section.

5. **Deploy to the Avalanche network:**
   ```sh
   npx hardhat run scripts/deploy.js --network avalanche
   ```
6. **Run the backend server:**
   ```sh
   node server.js
   ```
7. **Run the application locally:**
   ```sh
   npm start
   ```

### Team Members
- **Fidel Wakhulunya**
- **Anorld**
- **Edwin Waweru**
- **Esther Oyoo**
- **Yvone Samwel**

### Milestone
#### Tasks:
- **Avalanche Checkpoints**
  - **Using Avalanche for Your Project**: The platform is fully integrated with the Avalanche network to handle blockchain transactions, ensuring security, scalability, and efficiency.
  - **Deploying Smart Contracts on Avalanche**: Smart contracts for carbon credit creation, transfer, and redemption are deployed on Avalanche's C-Chain. These contracts automate the core functionalities of the platform.
  - **Taking Advantage of Avalanche's Speed and Low Costs**: The platform leverages Avalanche's fast transaction processing and low fees to enhance user experience and make carbon credit transactions more affordable.

