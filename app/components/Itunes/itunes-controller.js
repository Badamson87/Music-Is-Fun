import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";

//PRIVATE

const itunesService = new ItunesService()



function drawSongs(results) {
  let template = ""
  console.log(results)
  //YOUR CODING STARTS HERE
  for (let i = 0; i < results.length; i++) {
    const songs = results[i];
  } results.forEach(Song => {
    template += `
   <div class="card" style="width: 12rem;">
  <img class="card-img-top" src="${Song.albumArt}" alt="Card image cap">
  <div class="card-body">
    <h5 class="${Song.artist}">${Song.artist}</h5>
    <p class="${Song.title}">${Song.title}</p>
    <p class="${Song.price}">${Song.price}</p>
    <a href="${Song.previewUrl}" class="btn btn-primary">Preview</a>
  </div>
</div>
    `
  });

  document.getElementById("songsList").innerHTML = template
}

{/* <p>${Song.title}</p> */ }

//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController