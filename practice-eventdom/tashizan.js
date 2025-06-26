let b = document.querySelector('button#calc') 
function add() {
  let x = document.querySelector('input[name="left"]');
    let y = document.querySelector('input[id="right"]');
    x = Number(x.value);
    y = Number(y.value);
    let s = document.querySelector('span#answer');

    s.textContent = x+y;
}
b.addEventListener('click', add); 