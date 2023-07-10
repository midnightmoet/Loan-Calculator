function calculateLoan(){
    // console.log("Calculating Loan...");  // for debugging
    const loanAmountValue = document.getElementById("loan-amount").value;
    const interestRateValue = document.getElementById("interest-rate").value;
    const monthsToPayValue = document.getElementById("months-to-pay").value;

    // Calculate the interest
    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

    // Calculate the monthly payment
    monthlyPayment = (loanAmountValue / monthsToPayValue + interest);

    // Display the monthly payment
    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment.toFixed(2)}`

    // console.log(loanAmountValue);  // for debugging
    // console.log(interestRateValue);  // for debugging
    // console.log(monthsToPayValue);  // for debugging
    //console.log(interest);  // for debugging
}

