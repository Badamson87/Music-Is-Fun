import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()



function drawSongs(songs) {
  let template = ""
  //YOUR CODING STARTS HERE
  songs = songs.slice(0, 12)   // removing extra songs because of lagging preview
  songs.forEach(song => {
    template += `
   <div class="card m-3" style="width: 21rem;">
  <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
  <div class="card-body">
    <h5 class="${song.artist}">${song.artist}</h5>
    <p class="${song.title}">${song.title}</p>
    <p class="${song.price}">${song.price}</p>
   <audio controls source src="${song.preview}" type ="audio/mpeg"></audio controls>
  </div>
</div>
    `
  });
  document.getElementById("songsList").innerHTML = template;
  singleAudio();
}

// Making sure only one song plays at a time

function singleAudio() {
  let songResults = $('audio');
  songResults.on('play', (e) => {
    songResults.each((index, playButton) => {
      if (playButton !== e.target) {
        playButton.pause();
      }
    })
  });

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