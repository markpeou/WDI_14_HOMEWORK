
$('.deposit').click(addToSavingsBalance)
$('.withdraw').click(removeFromSavingsBalance)

function addToSavingsBalance() {
  var amount = $('#savingAmount').val()
  var oldBalance = $('#savingsBalance').text()
  var newBalance = Number(amount) + Number(oldBalance)
  displaySavingsBalance(newBalance)
}

function removeFromSavingsBalance() {
  var amount = $('#savingAmount').val()
  var oldBalance = $('#savingsBalance').text()
  var newBalance = Number(oldBalance) - Number (amount)
  displaySavingsBalance(newBalance)
}

function displaySavingsBalance(newBalance) {
    $('#savingsBalance').text(newBalance)
  //   if newBalance <= 0 {
  //   document.querySelector('.savings').backgroundColor=red;
  // }
  }

  // need help here!



$('.checkDeposit').click(addToCheckingBalance)
$('.checkWithdraw').click(removeFromCheckingBalance)


function addToCheckingBalance() {
  var amount = $('#checkingAmount').val()
  var oldBalance = $('#checkingBalance').text()
  var newBalance = Number(amount) + Number(oldBalance)
  displayCheckingBalance(newBalance)
}

function removeFromCheckingBalance() {
  var amount = $('#checkingAmount').val()
  var oldBalance = $('#checkingBalance').text()
  var newBalance = Number(oldBalance) - Number (amount)
  displayCheckingBalance(newBalance)
}

function displayCheckingBalance(newBalance) {
  $('#checkingBalance').text(newBalance)
}
