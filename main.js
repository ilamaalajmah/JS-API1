let url = "https://coffee.alexflipnote.dev/random.json";

function imagechanged() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let image = document.querySelector(".img1");
            let img = document.createElement("img");
            img.src = data.file; 
            img.classList="img";
            image.append(img);
            console.log(data);
        })
}
imagechanged();



