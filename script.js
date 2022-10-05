const body = document.querySelector('body');


body.addEventListener('mousemove', (e) =>{
    const xPos = e.offsetX
    const YPos = e.offsetY
    const span = document.createElement("span")
    const size = Math.random() * 100;
    span.style.left = xPos  + "px";
    span.style.top = YPos  + "px";
    span.style.width = size + "px";
    span.style.height = size + "px";
    body.appendChild(span)

    setTimeout(() =>{
        span.remove();
    }, 3000)
})