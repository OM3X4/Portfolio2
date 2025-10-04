export function parseDate(input: string): Date {
	// input format: dd-mm-yyyy
	const [day, month, year] = input.split("-").map(Number);
	// Months are 0-indexed in JS Date (0 = Jan, 11 = Dec)
	return new Date(year, month - 1, day);
}