export function convertDateToAriaLabel(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function convertDateToString(date: Date): string {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();

  const paddedMonth = (monthIndex + 1).toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${year}-${paddedMonth}-${paddedDay}`;
}

export function convertStringToDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);

  return new Date(year, month - 1, day);
}

export function formatDateLong(date: Date){
  return date.toLocaleString('en-US', { 
    month: 'long', 
    weekday: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
}