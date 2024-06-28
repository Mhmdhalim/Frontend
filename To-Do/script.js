document.addEventListener("DOMContentLoaded", () => {
    let sun = document.querySelector('.sun');
    console.log(sun);
    // light theme
    sun.onclick = () => {
        const light_theme = document.querySelectorAll('.theme');
        light_theme.forEach((ele) => {
            ele.classList.toggle('light');
        });
    };

    // button
    let btns = document.querySelectorAll('.span_li');
    let li = Array.from(document.querySelectorAll('.li'));

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('color_complete');
            li[index-1].classList.toggle('txt_complete');
        })
    })
    
    // Make A Task
    let ul = document.querySelector('ul');
    let input_btn = document.querySelector('.span_input');

    input_btn.onclick = () => {
        let input = document.querySelector('.taskes').value;
        console.log(input);
        let new_li = document.createElement('li');
        new_li.classList.add('li');

        let new_span = document.createElement('span');
        new_span.classList.add('span_li')

        new_li.appendChild(new_span);
        new_li.innerHTML += input;


        ul.appendChild(new_li);
    }

    // clear completed
    let clear = document.querySelector('.right');
    console.log(clear)
    clear.addEventListener('click', () => {
        li.forEach((ele) => {
            if (ele.classList.contains('txt_complete')) {
                ele.style.display = 'none';
            }
        });
    });
});
