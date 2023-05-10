
const jokesButton = document.querySelector("#joke-btn")
const joke = document.querySelector("#joke")

jokesButton.addEventListener('click', (e) => {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        joke.innerHTML = data.value;
        console.log(data.id);
      }
    };
    xhr.send();
    changeRandomColor();
    changeBodyColor();
  });

// this will change the background of the container  
const changeRandomColor = () =>{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    document.querySelector(".container").style.backgroundColor = `#${randomColor}`;
  }
// this will change the background of entire body
  const changeBodyColor = () =>{
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = `#${randomColor}`;
  }
  



  
  






