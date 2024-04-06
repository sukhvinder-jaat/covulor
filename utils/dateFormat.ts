// Function to format a single date
function formatDate(dateString: string): string {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1; // Adjust month to 0-indexed

    return `${months[monthIndex]} ${parseInt(day, 10)}`;
}

// Function to format an array of dates
export function formatDates(dates: string[]): string[] {
    return dates.map(formatDate);
}