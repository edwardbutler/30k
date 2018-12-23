function daysOld(birthDateObject) {
  // Get the number of milliseconds that have passed since 1970
  const birthDate = birthDateObject.getTime();
  const now = Date.now();

  // Find how many millisecends old the person is, then convert to days
  const difference = now - birthDate;
  const daysOld = Math.round(difference / (1000 * 60 * 60 * 24));
  return daysOld;
}


function computeLifeFraction(birthDateObject) {
    // Compute the life fraction 
    return ((daysOld(birthDateObject) / 30000)) * 100
}

module.exports = {
    computeLifeFraction,
    daysOld
}