function writeCards(names, eventName) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouMessages;
}
function countDown(num) {
  if (num <= 0 || !Number.isInteger(num)) {
    console.log("Please provide a positive integer.");
    return;
  }
while (num >= 0) {
    console.log(num);
    num--;
  }
}
countDown(10)