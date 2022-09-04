import itemsCount from './itemsCount.js';
import { getlikes, postLike } from './APImethods.js';

export const renderShows = (showsData) => {
  document.querySelector('.showsContainer').innerHTML = '';
  showsData.forEach((show) => {
    document.querySelector('.showsContainer').innerHTML += `
    <div class="show-card">
      <div class="name-year">
        <h3>${show.name}</h3>
        <h3>${show.premiered.substring(0, 4)}</h3>
      </div>
    <img src=${show.image.medium}  width="290" height="290"/>
    <p>${show.summary.substring(0, 300)}</p>
    <div class="likesLine">
      <h4>Likes:&nbsp;</h4>
      <h4 class="likesCount" id=${show.externals.imdb}></h4>
    </div>
    <button clicked="false" class="button likeButton" type="button" id=${show.externals.imdb}>Like! &hearts;</button>
    <button class="button commentsButton" type="button" id=${show.externals.imdb}>Comments</button>
    </div>`;
  });
  document.querySelector('.showsLink').innerHTML = `Shows (${itemsCount(showsData)})`;
};

export const getButtonsList = () => document.querySelectorAll('.button');

export const getLikesCounters = () => document.querySelectorAll('.likesCount');

export const populateLikes = async (likesCounters) => {
  const likes = await getlikes();
  likes.forEach((element) => {
    likesCounters.forEach((likeCount) => {
      if (likeCount.id === element.item_id) likeCount.innerHTML = element.likes;
    });
  });
};

const buttonClicked = async (target) => {
  if (target.classList.contains('likeButton')) {
    await postLike(target.id);
    await populateLikes(getLikesCounters());
  }
};

export const setClickListeners = (buttonsList) => {
  buttonsList.forEach((button) => {
    button.addEventListener('click', (e) => { buttonClicked(e.target); });
  });
};
