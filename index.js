
function table(){

    const value = document.getElementById('table-value').value;

    // take range input from the user

    const range = document.getElementById('table-range').value;
//    i = i + 1
for(let i = 1; i <= range; i++) {
        const result = value * i;
        var text = document.createElement('h2') 
        text.innerText = (`${value} * ${i} = ${result}`);
        document.body.appendChild(text)
    }
}