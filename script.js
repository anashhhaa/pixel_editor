let workplace = document.querySelector('.workplace')

let current_color = 'rgb(255, 0, 0)'
var is_clicked = false

document.addEventListener('mousedown', function(){
    is_clicked = true
})

document.addEventListener('mouseup', function(){
    is_clicked = false
})

for (let i = 0; i < 900; i += 1){
    let block = document.createElement('div')
    block.classList.add('block')
    workplace.appendChild(block)
}

let fill = document.querySelector('.fill')
let blocks = document.querySelectorAll('.block')
blocks.forEach(block => {
    block.addEventListener("mouseover", function() {
        if (is_clicked){
            anime({
                targets: block,
                backgroundColor: current_color,
                duration: 200,
                easing: 'linear',
            })
        }
    })
    fill.addEventListener('click', function(){
        block.style.backgroundColor = current_color
    })
})

blocks.forEach(block => {
    block.addEventListener("click", function() {
        anime({
                targets: block,
                backgroundColor: current_color,
                duration: 200,
                easing: 'linear',
            })
    }
)
})

let colorBlocks = document.querySelectorAll('.colorBlock')
colorBlocks.forEach(colorBlock => {
    colorBlock.addEventListener('click', function() {
        current_color = getComputedStyle(colorBlock).backgroundColor
        document.querySelector('.selected').classList.remove('selected')
        colorBlock.classList.add('selected')
    })
})

let earaser = document.querySelector('.earaser')
earaser.addEventListener('click', function(){
    current_color = getComputedStyle(workplace).backgroundColor
    document.querySelector('.selected').classList.remove('selected')
    earaser.classList.add('selected')
})

document.getElementById("download").addEventListener('click', function(){
    domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95})
    .then(function (dataUrl){
        var link = document.createElement('a');
        link.download = 'my-image-name.Jpeg';
        link.href = dataUrl;
        link.click();
    })
}) 

