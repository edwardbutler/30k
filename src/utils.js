function daysOld(birthDateObject) {
  // Get the number of milliseconds that have passed since 1970
  const birthDate = birthDateObject.getTime();
  const now = Date.now();

  // Find how many millisecends old the person is, then convert to days
  const difference = now - birthDate;
  const numberOfMillisecondsInDay = 1000 * 60 * 60 * 24;
  const daysOld = Math.round(difference / numberOfMillisecondsInDay);
  return daysOld;
}

function daysLeft(birthDateObject) {
    const totalDays = 30000;
    return totalDays - daysOld(birthDateObject);
}

function computeLifeFraction(birthDateObject) {
    const totalDays = 30000;
    const decimalToPercentMultiplier = 100;
    return ((daysOld(birthDateObject) / totalDays)) * decimalToPercentMultiplier
}

function dateHasPassed(dateString) {
    const inputtedDate = new Date(dateString);
    const now = new Date();
    return inputtedDate.getTime() < now.getTime();
}

function datePatternMatches(dateString) {
    const validDateString = new RegExp(/^\d{4}-\d{2}-\d{2}$/g);
    return validDateString.test(dateString);
}

function isValidBirthDate(dateString) {
    return datePatternMatches(dateString) && dateHasPassed(dateString);
}

module.exports = {
    computeLifeFraction,
    daysOld,
    daysLeft,
    isValidBirthDate
}