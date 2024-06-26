document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('img_');

    btn.addEventListener('click', function (event) {
        event.preventDefault();
        
        let day = document.querySelector('.day_').value;
        let month = document.querySelector('.month_').value;
        let year = document.querySelector('.year_').value;

        var now = new Date();

        if (day > 30 || month > 12 || year > now.getFullYear)
        {
            console.log('error')
        }
        else
        {
            console.log(now.getDate)
            const new_day = Math.abs(now.getDate() - day);
            const new_month = Math.abs(now.getMonth() - month);
            const new_year = Math.abs(now.getFullYear() - year);

            console.log(new_year)
            console.log(new_day)
            console.log(new_month)
            
        }
    });
    
    
});
