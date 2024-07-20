import express from 'express';
import { newRandomWallet } from "@nibiruchain/nibijs";

const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

app.post('/create-wallet', async (req, res) => {
    try {
        const wallet = await newRandomWallet();
        const [{ address }] = await wallet.getAccounts();
        res.json({ mnemonic: wallet.mnemonic, address });
    } catch (error) {
        console.error('Error creating wallet:', error);
        res.status(500).send('Error creating wallet');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});