let balance = 0;

const balanceEl = document.getElementById("balance");
const amountEl = document.getElementById("amount");
const messageEl = document.getElementById("message");

function updateBalance() {
    balanceEl.textContent = `₹ ${balance}`;
}

document.getElementById("depositBtn").addEventListener("click", () => {
    const amount = Number(amountEl.value);

    if (amount <= 0 || isNaN(amount)) {
        messageEl.textContent = "Enter a valid deposit amount!";
        messageEl.style.color = "red";
        return;
    }

    balance += amount;
    updateBalance();
    messageEl.textContent = `Deposited ₹${amount}`;
    messageEl.style.color = "green";
    amountEl.value = "";
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    const amount = Number(amountEl.value);

    if (amount <= 0 || isNaN(amount)) {
        messageEl.textContent = "Enter a valid withdrawal amount!";
        messageEl.style.color = "red";
        return;
    }

    if (amount > balance) {
        messageEl.textContent = "Insufficient Balance!";
        messageEl.style.color = "red";
        return;
    }

    balance -= amount;
    updateBalance();
    messageEl.textContent = `Withdrawn ₹${amount}`;
    messageEl.style.color = "green";
    amountEl.value = "";
});

updateBalance();
