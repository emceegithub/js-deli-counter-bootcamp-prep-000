function takeANumber(array, name) {
  array.push(name)
  var position = array.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty."
  } else {
    var message = "The line is currently: "
    for (var i=0;i<array.length;i++) {
      message = message + (parseInt([i]) + 1) + ". " + array[i] + ", "
    }
    return message.substring(0,message.length-2)
  }
}

