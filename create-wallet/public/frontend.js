document.getElementById('createWalletBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('/create-wallet', { method: 'POST' });
        const data = await response.json();

        document.getElementById('mnemonic').textContent = `Mnemonic: ${data.mnemonic}`;
        document.getElementById('address').textContent = `Address: ${data.address}`;
    } catch (error) {
        console.error('Error creating wallet:', error);
    }
});