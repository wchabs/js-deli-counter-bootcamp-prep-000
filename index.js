

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var serving;
    serving = katzDeliLine[0];
    katzDeliLine.slice(1);
    return `Currently serving ${serving}`;
  } else
  return "There is nobody waiting to be served!";
}


