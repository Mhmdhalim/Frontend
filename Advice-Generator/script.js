document.addEventListener("DOMContentLoaded", () => {
    let id = document.querySelector('.main__p__id');
    let paragraph = document.querySelector('.main__p');
    let btn = document.querySelector('.icon')

    const url = 'https://api.adviceslip.com/advice';

    async function fetchData(url) {
        try {
            // Fetch data from the URL
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const myData = data;

            id.textContent = myData.slip.id;
            paragraph.textContent = `“${myData.slip.advice}”`;
 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    // run once auto
    fetchData(url);

    btn.addEventListener('click', () => {
        fetchData(url);
    })
});
