document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.button_');
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        let input = document.getElementById('input').value;
        let input_ = document.getElementById('input');
        let error_txt = document.querySelector('.error');

        let front_1 = document.querySelector('.front-display');
        let front_2 = document.querySelector('.front-display_');

        let str = /.+@company.com/ig;
        
        let email = input.match(str);
        if ( email !== null)
        {
            input_.classList.remove('active');
            error_txt.style.display = 'none';
            front_1.style.display = 'none';
            front_2.style.display = 'block';

            let E_email = document.querySelector('.E_email');
            E_email.textContent = email;

            // Dismiss button
            const btn_2 = document.querySelector('.button_2');
            btn_2.addEventListener('click', function (event) {
            event.preventDefault();
            
            let front_1 = document.querySelector('.front-display');
            let front_2 = document.querySelector('.front-display_');

            front_1.style.display = 'block';
            front_2.style.display = 'none';
    })

        }
        else
        {
            input_.classList.add('active');
            error_txt.style.display = 'block';

        }

    });
});
