console.log(yesBtn, noBtn, title, flynnImg);


const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const yesBtn = document.querySelector(".yes-btn");
const noBtn  = document.querySelector(".no-btn");

const title = document.getElementById("letter-title");
const flynnImg = document.getElementById("letter-flynn");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
    title.textContent = "WAKU WAKU!!!!!!";
    flynnImg.src = "tenor.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});




// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//    yesScale += 2;

//    if (yesBtn.style.position !== fixed) {
//       yesBtn.style.position = "fixed";
//        yesBtn.style.top = "50%";
//        yesBtn.style.left = "50%";
//        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//    }else{
//       yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//
//    }
// });


