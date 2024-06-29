document.addEventListener("DOMContentLoaded", () => {
    let sun = document.querySelector('.sun');
    // light theme
    sun.onclick = () => {
        const light_theme = document.querySelectorAll('.theme');
        light_theme.forEach((ele) => {
            ele.classList.toggle('light');
            
        });
        saveData();
    };

    // var allElements = document.querySelectorAll('*');
    //         // Apply a class to each element
    //         allElements.forEach(function(element) {
    //             element.classList.add('highlight');
    //         });

    // list
    let ul = document.querySelector('ul');

    // COUNTER

    // ADD NEW TASK
    let input_btn = document.querySelector('.span_input');
    const input = document.querySelector('.taskes');

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter')
        {
            add_task();   
        }
    });
    input_btn.onclick = () => {
        add_task() 
    }
    function add_task()
    {
        if (input.value === '')
        {
            alert('You must write somthing');
        }
        else
        {
            let new_li = document.createElement('li');
            new_li.classList.add('li');
            new_li.classList.add('theme');

            let new_span = document.createElement('span');
            new_span.classList.add('span_li')
            new_span.classList.add('li')
            new_span.classList.add('theme');

            new_li.appendChild(new_span);
            new_li.innerHTML += input.value;

            ul.appendChild(new_li);
        }
        input.value = "";
        saveData();
    }

    
    // COMPLETED
    ul.addEventListener('click', function (e) {
        if (e.target.tagName == "LI") {
            e.target.classList.toggle('txt_complete');
            saveData();
        }
        else if (e.target.tagName == 'SPAN'){
            e.target.parentElement.classList.toggle('txt_complete'); 
            saveData();
        }
    });
    
    // CLAER TASK
    let clear = document.querySelector('.right');
    clear.addEventListener('click', () => {
        let li = document.querySelectorAll('li');
        let p_ = document.querySelector('p');
        li.forEach((ele) => {
            if (ele.classList.contains('txt_complete')) {
                ele.remove();
            }
        });
        saveData();
    });
    //  COUNTER
    const counter = document.querySelector('.numberoftaskes');
    setInterval(() => {
        let li = document.querySelectorAll('li');
        counter.textContent = li.length;
    }, 100)

    // SAVING DATA

    function saveData() {
        localStorage.setItem("data", ul.innerHTML);
    }

    function show() {
        ul.innerHTML = localStorage.getItem("data");
    }
    show();
});
