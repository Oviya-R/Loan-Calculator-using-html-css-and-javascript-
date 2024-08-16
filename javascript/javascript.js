function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    const x = Math.pow(1 + interest, years);
    const monthlyPayment = (amount * interest * x) / (x - 1);

    if (!isNaN(monthlyPayment) && (monthlyPayment != Infinity) && (monthlyPayment > 0)) {
        document.getElementById('payment').innerText = `$${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('payment').innerText = `$0.00`;
    }
}
