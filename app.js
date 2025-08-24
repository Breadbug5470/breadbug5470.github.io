// for index.html

document.addEventListener("DOMContentLoaded", () =>{
    const images = document.querySelectorAll("img");
    // for each image - use url to get random dog image
    for(const image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
        // each image width and height set to 100px - do not put px in
    }
})