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
    template += `<p>${Song.title}</p>`
  });

  document.getElementById("songsList").innerHTML = template
}


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