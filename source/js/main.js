function createNumbers() {
  var randomNumber;
  var lotteryNumbers = [];
  var i = 1;
  while (i <= 7) {
    randomNumber = (Math.floor(Math.random() * 49) + 1).toString().padStart(2, 0)
    if (lotteryNumbers.indexOf(randomNumber) == -1) {
      lotteryNumbers.push(randomNumber);
      i++;
    }
  }
  showNumbers(lotteryNumbers)
}


function showNumbers(numbers) {
  var numberWrap = document.getElementById("numberWrap")
  var ul = document.createElement("ul")
  numberWrap.classList.remove("none")

  for (var i = 0; i <= numbers.length - 1; i++) {
    var li = document.createElement("li")
    li.append(numbers[i])
    ul.appendChild(li)
    numberWrap.appendChild(ul)
  }
}

function sortNumbers(numbers) {
  var sortedNumbers = numbers.sort()
  console.log(sortedNumbers)
  return sortedNumbers
}