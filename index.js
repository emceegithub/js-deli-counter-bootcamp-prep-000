function takeANumber(array, name) {
  array.push(name)
  var position = array.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
}