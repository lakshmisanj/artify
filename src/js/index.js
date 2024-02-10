import {createApi} from 'unsplash-js';
let headertTitle = document.getElementById("headerTitle");
let allButtons  = document.querySelectorAll("allButtons");
const allPhotos = document.querySelector("#allPhotos");
let painting = document.getElementById("painting");
const unsplash =createApi({
  accessKey:'6jTp19dE0ZvWIecSfpmioQtm2TB69SPZ6Q6iCD1A80E',
});
unsplash.search.getPhotos({
  query: 'Classic Art',
  page:1,
  perPage:12,
  orientation: 'portrait',

}).then((result) =>{
  if(result.type ==='success'){
    var photos = result.response.results;
    //console.log(photos);
    const getUrls = photos.map((i )=>{
      return `<img src ="${i.urls.small}" />`;
    });
    allPhotos.innerHTML= getUrls.join('');
  }
});
let content="";
displayAll(allPhotos);
function displayAll(painting){
  painting.forEach((allPhotos) =>{
    let individualPhoto=  `<section id="allPhotos">
    <div class="img"><img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w1NjUyODl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwQXJ0fGVufDB8MXx8fDE3MDc1Mzg2NDR8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></div>
  <div class="painting">
    <div class="paintingDetails"><h3 class="painter">abcd</h3>
    <h3 class="paintingDesc">fdfnlgn lknfdlnfln dfkndlfndln</h3></div>`
  })
}





