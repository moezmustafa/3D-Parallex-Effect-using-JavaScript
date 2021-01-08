//mov animation to happen

const card = document.querySelector('.card');

const container = document.querySelector('.container');

//moving animation event


container.addEventListener('mousemove', (e) => {

    console.log(e.pageX);
        let xAxis = window.innerWidth / 2 - e.pageX;
        let yAxis = window.innerHeight / 2 - e.pageY;

        card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    });