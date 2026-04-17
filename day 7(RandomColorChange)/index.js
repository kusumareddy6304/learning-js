const changeColor = () => {
    let display = document.getElementById("display")
    let color = "#"//6
    let colorCOdes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    for(let i = 0 ;i < 6; i++ ){
        let randNo = Math.floor(Math.random() * 16) //math.floor=for ignoring decimal values
        color +=colorCOdes[randNo]
    }   
    
    display.style.backgroundColor = color
}

changeColor()