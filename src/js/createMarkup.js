export function createMarkup(pfotos) {
  return pfotos
    .map(({ webformatURL, tags, views, downloads, comments, likes }) => {
      return `
    <div class="photo-card">
      <img class="photo-card__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b class="info-item__title">Likes</b>
          <span class="info-item__valeu">${likes}</span>
        </p>
        <p class="info-item">
          <b class="info-item__title">Views</b>
          <span class="info-item__valeu">${views}</span>
        </p>
        <p class="info-item">
          <b class="info-item__title">Comments</b>
          <span class="info-item__valeu">${comments}</span>
        </p>
        <p class="info-item">
          <b class="info-item__title">Downloads</b>
          <span class="info-item__valeu">${downloads}</span>
        </p>
      </div>
    </div>`;
    })
    .join('');
}

//* webformatURL - посилання на маленьке зображення для списку карток.
//* tags - рядок з описом зображення. Підійде для атрибуту alt.
//* likes - кількість лайків.
//* views - кількість переглядів.
//* comments - кількість коментарів.
//* downloads - кількість завантажень.

//todo Галерея і картка зображення
//! Елемент div.gallery спочатку міститься в HTML документі, і в нього необхідно рендерити розмітку карток зображень. Під час пошуку за новим ключовим словом необхідно повністю очищати вміст галереї, щоб не змішувати результати.

//* <div class="gallery">
//*   <!-- Картки зображень -->
//* </div>

//? Шаблон розмітки картки одного зображення для галереї.

//* <div class="photo-card">
//*   <img src="" alt="" loading="lazy" />
//*   <div class="info">
//*     <p class="info-item">
//*       <b>Likes</b>
//*     </p>
//*     <p class="info-item">
//*       <b>Views</b>
//*     </p>
//*     <p class="info-item">
//*       <b>Comments</b>
//*     </p>
//*     <p class="info-item">
//*       <b>Downloads</b>
//*     </p>
//*   </div>
//* </div>
