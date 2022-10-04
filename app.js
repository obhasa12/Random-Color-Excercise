const btn = document.querySelector('button')
const h1 = document.querySelector('h1')
document.body.style.textAlign = 'center';
btn.addEventListener('click', () =>{
    const r = Math.floor(Math.random()*255)+1 
    const g = Math.floor(Math.random()*255)+1 
    const b = Math.floor(Math.random()*255)+1
    const colorRGB = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = colorRGB;
    h1.textContent = colorRGB
    if(`${r}`<= 20 || `${g}`<= 20 || `${b}`<= 20){
        h1.style.color = '#fff'
    }else{
        h1.style.color = 'black'
    }
})
