setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let day = date.getDay();
    let year = date.getFullYear();
    let month = date.getMonth();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 
    let ms = date.getMilliseconds();
    time.textContent = hours + ":" + minutes + ":" + seconds
  });
  