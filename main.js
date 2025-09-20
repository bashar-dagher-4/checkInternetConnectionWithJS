let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

async function checkConnection() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {cache: "no-store"});
    if (response.ok) {
      online();
    } else {
      offline();
    }
  } catch (e) {
    offline();
  }
}

window.onload = checkConnection;
setInterval(checkConnection , 10000)

window.addEventListener('online' , function(){
    checkConnection();
});
window.addEventListener('offline' , function(){
    offline();
}); 

reload.onclick = function(){
    window.location.reload()
}

function online(){
    title.innerHTML = 'Online Now';
    title.style.color='green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}
function offline(){
    title.innerHTML = 'Offline Now';
     title.style.color='gray';
      ul.classList.remove('hide');
     reload.classList.remove('hide');
}






