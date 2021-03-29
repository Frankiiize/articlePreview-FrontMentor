
const showTooltip =  () =>  {
    let tooltip = document.querySelector('#tooltip');
    if (tooltip.className == "d-none") {
        tooltip.className = "cardContainer__share__tooltip";
        setTimeout(() => tooltip.classList.toggle('change'), 100);
        } else {
            tooltip.classList.toggle('changeOff');
            setTimeout( function(){
                tooltip.className ="d-none";
            },400);  
        }
    }


const hideTooltip = () => {
    let tooltip = document.querySelector('#tooltip');
    
    tooltip.classList.toggle('changeOff');
    setTimeout( function(){
        tooltip.className ="d-none";
    },400);   
}