document.addEventListener('DOMContentLoaded', function() {
    const cryptoMapping = {
        'BTCUSDT': 'Bitcoin (BTC)',
        'ETHUSDT': 'Ethereum (ETH)',
        'BNBUSDT': 'Binance Coin (BNB)',
        'BCCUSDT': 'Bitcoin Cash (BCH)',
        'NEOUSDT': 'NEO',
        'LTCUSDT': 'Litecoin (LTC)',
        'QTUMUSDT': 'Qtum',
        'ADAUSDT': 'Cardano (ADA)',
        'XRPUSDT': 'Ripple (XRP)',
        'EOSUSDT': 'EOS.IO',
        'TUSDUSDT': 'TrueUSD',
        'IOTAUSDT': 'IOTA',
        'XLMUSDT': 'Stellar Lumens (XLM)',
        'ONTUSDT': 'Ontology',
        'TRXUSDT': 'TRON',
        'ETCUSDT': 'Ethereum Classic (ETC)',
        'ICXUSDT': 'ICON',
        'VENUSDT': 'VeChain (VET)',
        'NULSUSDT': 'Nuls',
        'VETUSDT': 'VeChain Thor'
    };

    function populateCryptocurrencies() {
        const select = document.getElementById('cryptocurrencies');
        select.innerHTML = '';
        Object.entries(cryptoMapping).forEach(([symbol, name]) => {
            const option = document.createElement('option');
            option.value = symbol;
            option.textContent = name;
            select.appendChild(option);
        });
    }

    function fetchAndDisplayPrices() {
        const selectedSymbols = Array.from(document.getElementById('cryptocurrencies').selectedOptions).map(option => option.value);

        fetch('/api/prices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ symbols: selectedSymbols })
        })
        .then(response => response.json())
        .then(prices => {
            const tableBody = document.querySelector('#price-table tbody');
            tableBody.innerHTML = '';
            prices.forEach(priceData => {
                tableBody.innerHTML += `
                <tr>
                    <td data-label="Cryptocurrency">${cryptoMapping[priceData.symbol]}</td>
                    <td data-label="Price">${priceData.price}</td>
                    <td data-label="Exchange">Binance</td>
                </tr>
                `;
            });
        })
        .catch(error => console.error('Error fetching prices:', error));
    }

    $(document).ready(function() {
        populateCryptocurrencies();
        $('#cryptocurrencies').select2({
            width: '100%',
            placeholder: "Select cryptocurrencies",
        });
    
        $('#fetch-prices-btn').click(fetchAndDisplayPrices);
        // Set interval to update prices every 30 seconds
        setInterval(fetchAndDisplayPrices, 30000);
    });
});
