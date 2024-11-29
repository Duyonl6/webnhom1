// Fake data for payment management
const paymentData = {
    totalDeposits: 35540,
    totalTransactions: 245,
    lastTransaction: {
        amount: 120,
        date: "2024-11-15"
    },
    transactionHistory: [
        { id: 1, user: "John Doe", amount: 150, method: "Credit Card", date: "2024-11-15", status: "Completed" },
        { id: 2, user: "Jane Smith", amount: 75, method: "PayPal", date: "2024-11-14", status: "Pending" },
        { id: 3, user: "Alice Johnson", amount: 200, method: "Bank Transfer", date: "2024-11-13", status: "Completed" }
    ]
};

// Update overview cards
document.getElementById("total-deposits").innerText = `$${paymentData.totalDeposits.toLocaleString()}`;
document.getElementById("total-transactions").innerText = paymentData.totalTransactions;
document.getElementById("last-transaction").innerText = `$${paymentData.lastTransaction.amount} on ${paymentData.lastTransaction.date}`;

// Render transaction history table
const transactionTableBody = document.getElementById("transactionTableBody");

paymentData.transactionHistory.forEach(transaction => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${transaction.id}</td>
        <td>${transaction.user}</td>
        <td>$${transaction.amount}</td>
        <td>${transaction.method}</td>
        <td>${transaction.date}</td>
        <td><span class="badge bg-${getStatusBadge(transaction.status)}">${transaction.status}</span></td>
    `;
    transactionTableBody.appendChild(row);
});

// Helper function for status badge color
function getStatusBadge(status) {
    switch (status.toLowerCase()) {
        case "completed":
            return "success";
        case "pending":
            return "warning";
        case "failed":
            return "danger";
        default:
            return "secondary";
    }
}
