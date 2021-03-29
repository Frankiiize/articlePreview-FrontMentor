
const showTooltip =  () =>  {
    let tooltip = document.querySelector('#tooltip');
    tooltip.className= "cardContainer__share__tooltip";
    setTimeout(() => tooltip.classList.toggle('change'), 100);
}

const hideTooltip = () => {
    let tooltip = document.querySelector('#tooltip');
    setTimeout(() => tooltip.classList.toggle('changeOff'),100);
}