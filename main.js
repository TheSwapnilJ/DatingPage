

const yesBtn = document.getElementById("Yes");
const noBtn = document.getElementById("No");
const cta = document.querySelector(".buttons");

noBtn.addEventListener('mouseenter', () => {
    const yesIdx =Array.from(cta.children).indexOf(yesBtn)
    const noIdx =Array.from(cta.children).indexOf(noBtn)
    if(yesIdx< noIdx)
    {
        cta.insertBefore(noBtn, yesBtn)
    }else
    cta.insertBefore(yesBtn ,noBtn); 
});