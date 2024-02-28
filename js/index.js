const doc = document;
const filmsListWrapper = doc.querySelector('.films-list-wrapper');

const films = [
    { id: 1, img: 'img/img1.jpg', name: '«Одіссея»', country: 'Франція', year: '2016', genre: 'байопік, драма, пригоди', date: '2024-02-28T01:00' },
    { id: 2, img: 'img/img2.jpg', name: '«Форрест Ґамп»', country: 'США', year: '1994', genre: 'комедія, драма', date: '2024-02-29T03:00' },
    { id: 3, img: 'img/img3.jpg', name: '«Крок вперед»', country: 'США', year: '2006', genre: 'драма, кримінал, музичний, романтика', date: '2024-03-03T16:00' },
    { id: 4, img: 'img/img4.jpg', name: '«Кучерявка Сью»', country: 'США', year: '1991', genre: 'драма, комедія, сімейний, романтика', date: '2024-03-03T20:00' },
    { id: 5, img: 'img/img5.jpg', name: '«Вам лист»', country: 'США', year: '1998', genre: 'драма, комедія, романтика', date: '2024-03-07T15:00' },
    { id: 6, img: 'img/img6.jpg', name: '«К-9: Собача робота»', country: 'США', year: '1989', genre: 'екшн, комедія, кримінал', date: '2024-03-07T18:00' },
    { id: 7, img: 'img/img7.jpg', name: '«Янгол помсти»', country: 'США, Франція, Швейцарія', year: '2002', genre: 'екшн, мелодрама, комедія, кримінал, романтика', date: '2024-03-10T19:30' }
];

renderFilmsList(films);

function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('uk-UA', options).format(new Date(dateString));
}

// Рендеринг списку фільмів
function renderFilmsList(arr) {
    arr.forEach(item => {
        const list = `
            <div class="film-block" data-filmid="${item.id}">
                <div class="film-box">
                    <img src="${item.img}" alt="" class="film-poster">
                </div>

                <div class="film-box">
                    <p class="film-title title">${item.name}</p>
                </div>

                <div class="film-box">
                    <p class="film-info country">${item.country}</p>
                </div>

                <div class="film-box">
                    <p class="film-info year">${item.year}</p>
                </div>

                <div class="film-box">
                    <p class="film-info genre">${item.genre}</p>
                </div>

                <div class="film-box date">
                    <p class="film-info">Дата і час кіносеансу:<br><span class="text-normal date">${formatDate(item.date)}</span></p>
                </div>

                <div class="film-box btn-box">
                    <button class="btn-buy btn">Придбати квиток</button>
                    <button class="btn-return btn">Повернути квиток</button>
                </div>
            </div>`;
        
        filmsListWrapper.insertAdjacentHTML('beforeend', list);
    });
}

function buyButtonClick() {
    const filmid = parseInt(this.closest('.film-block').dataset.filmid);
    const film = films.find(film => film.id === filmid);

    if (!film) {
        console.error("Фільм не знайдено!");
        return;
    }

    const now = new Date();
    const filmDate = new Date(film.date);

    if (now.getTime() > filmDate.getTime()) {
        alert("Сеанс розпочався/відбувся. Квиток придбати неможливо");
    } else {
        alert("Ви придбали квиток. Приємного перегляду!");
    }
}

function returnButtonClick() {
    const filmid = parseInt(this.closest('.film-block').dataset.filmid);
    const film = films.find(film => film.id === filmid);

    if (!film) {
        console.error("Фільм не знайдено!");
        return;
    }

    const now = new Date();
    const filmDate = new Date(film.date);
    const timeDifferenceMinutes = (now.getTime() - filmDate.getTime()) / (1000 * 60);

    if (timeDifferenceMinutes < 60) {
        alert("Квиток повернуто");
    } else {
        alert("Строк повернення квитка вийшов");
    }
}

document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', buyButtonClick);
});

document.querySelectorAll('.btn-return').forEach(button => {
    button.addEventListener('click', returnButtonClick);
});












