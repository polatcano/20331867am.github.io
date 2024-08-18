// Function to format numbers to two digits
const formatNumber = (number) => {
    return number < 10 ? '0' + number : number;
};

// Function to get current date and time
const updateDateTime = () => {
    const now = new Date();
    const day = formatNumber(now.getDate());
    const month = formatNumber(now.getMonth() + 1); // Months are zero-based
    const year = now.getFullYear();
    const hours = formatNumber(now.getHours());
    const minutes = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());

    const dateTimeString = `Date: ${day}/${month}/${year} | Time: ${hours}:${minutes}:${seconds}`;
    document.getElementById('datetime').textContent = dateTimeString;
};

// Update date and time immediately on page load
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);
