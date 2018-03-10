

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `"Hello ${name}, you're ${katzDeliLine.length} in line."`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving;
    katzDeliLine.slice(1);
    return serving;
  } else
  return "There is nobody waiting to be servbed!";
}

