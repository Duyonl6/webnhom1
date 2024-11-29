// Fake support request data
const supportRequests = [
    {
        id: 1,
        user: "John Doe",
        email: "john.doe@example.com",
        subject: "Login Issue",
        status: "Open",
        date: "2024-11-18"
    },
    {
        id: 2,
        user: "Jane Smith",
        email: "jane.smith@example.com",
        subject: "Payment Error",
        status: "Resolved",
        date: "2024-11-16"
    },
    {
        id: 3,
        user: "Alice Johnson",
        email: "alice.johnson@example.com",
        subject: "Account Deactivation",
        status: "In Progress",
        date: "2024-11-17"
    }
];

// Render support requests into the table
const supportTableBody = document.getElementById("supportTableBody");

supportRequests.forEach((request) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${request.id}</td>
        <td>${request.user}</td>
        <td>${request.email}</td>
        <td>${request.subject}</td>
        <td><span class="badge bg-${getStatusClass(request.status)}">${request.status}</span></td>
        <td>${request.date}</td>
        <td>
            <button class="btn btn-sm btn-primary">View</button>
            ${request.status !== "Resolved" ? `<button class="btn btn-sm btn-success">Resolve</button>` : ""}
        </td>
    `;
    supportTableBody.appendChild(row);
});

// Helper function for badge color
function getStatusClass(status) {
    switch (status.toLowerCase()) {
        case "open":
            return "warning";
        case "in-progress":
            return "info";
        case "resolved":
            return "success";
        default:
            return "secondary";
    }
}
