const mainBody = document.querySelector("#mainbody");
const sourceText = document.querySelector("#source span");

const bgsource = [
    {pictur:"1.jpg",
    source: "eberhard grossgasteiger 님의 사진, 출처 Pexels"},
    {pictur:"2.jpg",
    source: "Philippe Donn 님의 사진, 출처 Pexels"},
    {pictur:"3.jpg",
    source: "Roberto Nickson 님의 사진, 출처 Pexels"},
]

const randomSource = bgsource[Math.floor(Math.random()*bgsource.length)];
//const radomPicture = 
sourceText.innerText = ` ${randomSource.source}`

//const bgImage = document.createElement("img");
//bgImage.src = `js/picture/${randomSource.pictur}`;
console.log(randomSource.pictur)

mainBody.style.backgroundImage = `url('js/picture/${randomSource.pictur}')`;