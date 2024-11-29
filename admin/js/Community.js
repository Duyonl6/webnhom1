// Handle Violations
function resolveViolation(id) {
    alert(`Violation report with ID ${id} resolved!`);
    // You can send a request to resolve the violation
}

function ignoreViolation(id) {
    alert(`Violation report with ID ${id} ignored.`);
    // You can send a request to ignore the violation
}

// Handle Blocked Keywords
function removeBlockedKeyword(keyword) {
    alert(`${keyword} removed from blocked list!`);
    // You can remove the keyword from your database or list
}

// Handle Ads
function editAd(id) {
    alert(`Edit ad with ID ${id}`);
    // You can redirect to an ad edit form or send a request to edit the ad
}

function deleteAd(id) {
    alert(`Ad with ID ${id} deleted!`);
    // You can send a request to delete the ad
}

// Example stats update (could be dynamic in a real scenario)
document.getElementById('totalUsers').innerText = '1,200';
document.getElementById('totalInteractions').innerText = '5,400';
document.getElementById('growthRate').innerText = '+15%';
document.getElementById('activeAds').innerText = '8';
