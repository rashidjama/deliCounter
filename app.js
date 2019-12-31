const inputEl = document.querySelector("input");
const paragraphEl = document.querySelector("p");


let katzDeli = [];
function takeANumber(deliLine, customerName) {
  deliLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${deliLine.length} in line.`;
}

inputEl.addEventListener("keypress", function(event) {
  if(event.keyCode === 13) {
   paragraphEl.innerHTML = takeANumber(katzDeli,[inputEl.value]);
   inputEl.value = '';
  }
})


function nowServing(katzDeli) {
  for(let i=0;i<katzDeli.length;i++) {

  }
  if(katzDeli.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli) {
  let line = []
  for (let i = 0; i < katzDeli.length; i++) {
     line.push([i+1] + ". " + katzDeli[i])
  }
  if(katzDeli.length === 0) {
    return 'The line is currently empty.'
  } else {
  return(`The line is currently: ${line.join(", ")}`);
}
}


