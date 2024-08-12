fetch('https://api.sampleapis.com/beers/ale')
.then(data=>data.json())
.then(display=> console.log(display))