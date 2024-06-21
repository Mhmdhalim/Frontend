document.addEventListener("DOMContentLoaded", () => {
    // ADD CLASS TO MAKE BACKGROUND-WHITE 
    let spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.addEventListener('click', () => {
            spans.forEach(s => s.classList.remove('click-color'));

            span.classList.add('click-color');
        })

    });

    // HAVE A COUNT
    let finallycount = 0;
    let submit = document.querySelector('button');
    submit.onclick = () => {
        // Bring rate
        spans.forEach(span => {
        if (span.classList.contains('click-color'))
        {
            finallycount = span.innerText;
        }
        });

        // ADD RATE
        let rate = document.createElement('small');
        rate.textContent = finallycount;

        let P_Rate = document.getElementById('span-rate');

        P_Rate.appendChild(rate);

        // CONDITION

        let first = document.getElementsByClassName('first-front')[0];
        let secound = document.getElementsByClassName('secound-front')[0];

        if (finallycount > 0)
        {
            first.className += ' active';
            secound.className = 'secound-front non-active';
        }
        else
        {
            alert(Error("Invalid, Should you Choose"));
        }
        }
});
