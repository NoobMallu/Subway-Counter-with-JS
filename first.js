//document.getElementById("count-el").innertext = 5

// change the count-el in HTML to change the counting

//camelCase

countEl = document.getElementById("count-el")
console.log(countEl)

count = 0
function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function decrement(){
    count = count - 1
    countEl.innerText = count
    console.log(count)
}