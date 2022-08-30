export const renderShows = (showsData) => {
 
  document.querySelector('.showsContainer').innerHTML = '';
  showsData.forEach((show) => {
    document.querySelector('.showsContainer').innerHTML += `
    <div class="show-card">
    <h3>${show.name}</h3>
    <h4>${show.premiered.substring(0, 3)}</h4>
    <img src=${show.image.medium}  width="290" height="290"/>
    <p>${show.summary.substring(0, 300)}</p>
    <button type="button">Like!</button>
    <button type="button">Details</button>
    </div>`;
  });

}

