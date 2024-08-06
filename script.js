document.getElementById('submit').addEventListener('click', async function () {
  const amount = parseFloat(document.getElementById('amountInput').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const apiKey = 'cur_live_1OYixSgww8SyECiB6lwJbuonVj36FTe1Cle1E11N'; // Replace with your actual API key
  const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${fromCurrency}&symbols=${toCurrency}`;

  try {
    const response = await fetch(url);
      const data = await response.json();
      console.log(data);

    if (data && data.data && data.data[toCurrency]) {
      const rate = data.data[toCurrency].value; 
      const convertedAmount = amount * rate;

      document.getElementById('result').style.display = 'block';
      document.getElementById(
        'fresult'
      ).textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`;
    } else {
      console.error('Failed to fetch exchange rates: Invalid data structure');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
