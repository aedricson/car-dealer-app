export function getYears(startYear: number = 2014) {
  const years = [];
  const currentYear = new Date().getFullYear();

  for (let i = startYear; i <= currentYear; i++) {
    years.push(i);
  }

  return years.map(year => ({ id: year, name: year.toString()}));
}