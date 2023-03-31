async function loadDogImage () {
    const req = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await req.json();
    const image = document.querySelector('img')
    image.src = json.message
}
loadDogImage()