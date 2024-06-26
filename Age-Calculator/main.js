document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('img_');

    btn.addEventListener('click', function (event) {
        event.preventDefault();
        
        let day = document.querySelector('.day_').value;
        let month = document.querySelector('.month_').value;
        let year = document.querySelector('.year_').value;

        var now = new Date();

        // Check numbers
        function isNumber(value) {
            return !isNaN(parseFloat(value));
        }

        if (isNumber(day) && isNumber(month) && isNumber(year))
        {
            if (day > 31 || month > 12 || year > now.getFullYear())
            {
                if (day > 31)
                {
                    let err_day = document.querySelector('.error-day');
                    err_day.classList.add('active');

                    err_display = document.getElementById('error-day');
                    err_display.style.display = 'block';

                }
                if (month > 12)
                {
                    let err_month = document.querySelector('.error-month');
                    err_month.classList.add('active');

                    err_display = document.getElementById('error-month');
                    err_display.style.display = 'block';

                }
                if (year > now.getFullYear())
                {
                    let err_year = document.querySelector('.error-year');
                    err_year.classList.add('active');

                    err_display = document.getElementById('error-year');
                    err_display.style.display = 'block';

                }
            }
            else
            {
                let new_year = now.getFullYear() - year;
                let new_month = now.getMonth() - month;
                let new_day = now.getDate() - day;

                if (new_month < 0 || (new_month === 0 && new_day < 0)) {
                    new_year -=1;
                }
                if (new_month < 0 || (new_month === 0 && new_day < 0)) {
                        new_month = (12 + new_month) % 12;
                    }
                // Calculate days
                if (new_day < 0) {
                    var prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                    new_day = prevMonthDays - birth.getDate() + today.getDate();
                }

                let txt_year = document.querySelector('.s_year');
                let txt_month = document.querySelector('.s_month');
                let txt_day = document.querySelector('.s_day');

                console.log(txt_day);
                txt_year.textContent = Math.abs(new_year);
                txt_month.textContent = Math.abs(new_month);
                txt_day.textContent = Math.abs(new_day);
                
            }
        }

    });
    
    
});
