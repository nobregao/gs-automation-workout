
// Sunday - Saturday : 0 - 6
const isSunday = date => date.getDay() == 0;
const isTuesday = date => date.getDay() == 2;
const isThursday = date => date.getDay() == 4;

const isToday = date => formatDate(date) == formatDate(new Date());

function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function subtractDay(date) {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() - 1);
  return newDate;
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getDaysToSearch(days, signal = "+") {
  return Object.keys(new Array(days).fill(null))
    .map(days => addDays(new Date(), Number(signal == "+" ? days : -days)))
}