**Setup Nibiru CLI**

**1. Install CLI**
   1. curl -s https://get.nibiru.fi/! | bash
   2. Check installation by entering "nibid"  
   
**2. Setup Nibiru Testnet**
   1. RPC_URL="https://rpc.testnet-1.nibiru.fi:443"
   2. nibid config node $RPC_URL
   3. nibid config chain-id nibiru-testnet-1
   4. nibid config broadcast-mode sync
   5. nibid config
   
**3. Create Account**
   1. nibid keys add "name" #To create new wallet
   2. nibid keys show -a "name" #To view public address
   
**4. Fund wallet**
   1. Add previously created account to Leap Wallet using mnemonic or secret key
   2. Visit and connect Leap wallet to https://app.nibiru.fi/faucet to recieve test tokens
   3. nibid query bank balances $(nibid keys show -a "name") #To check balance