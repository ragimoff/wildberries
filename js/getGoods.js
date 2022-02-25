const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('https://wildberries-ca249-default-rtdb.firebaseio.com/db.json')
        .then(res => res.json())
        .then(data => localStorage.setItem('data', JSON.stringify(data)))
    }

    links.forEach(function(link){
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })
}

getGoods();