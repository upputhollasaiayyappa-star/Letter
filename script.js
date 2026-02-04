// Create floating love symbols
function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    const symbols = ['💖', '💕', '💝', '💘', '💓', '💗', '💞', '❤️', '🧡', '💛', '💚', '💙', '💜'];
    
    for (let i = 0; i < 25; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.fontSize = (Math.random() * 30 + 20) + 'px';
        element.style.opacity = Math.random() * 0.5 + 0.3;
        element.style.animationDuration = (Math.random() * 10 + 15) + 's';
        element.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(element);
    }
}

// Get all elements
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const shwetaName = document.querySelector(".shweta-name");

// Create floating elements when page loads
document.addEventListener('DOMContentLoaded', function() {
    createFloatingElements();
    
    // Click Envelope to open letter
    envelopeContainer.addEventListener("click", () => {
        envelopeContainer.style.display = "none";
        letterContainer.style.display = "flex";
        
        // Add heartbeat effect to Shweta's name
        shwetaName.style.animation = "heartBeat 1s infinite";
        
        setTimeout(() => {
            document.querySelector(".letter-window").classList.add("open");
        }, 50);
    });

    // Make NO button run away with more drama
    let runAwayCount = 0;
    noBtn.addEventListener("mouseover", () => {
        runAwayCount++;
        
        const container = document.querySelector('.buttons');
        const containerRect = container.getBoundingClientRect();
        
        // Calculate dramatic movement
        const maxX = containerRect.width * 2;
        const maxY = containerRect.height * 2;
        
        let randomX, randomY;
        
        if (runAwayCount > 3) {
            // After 3 tries, make it REALLY run away
            randomX = (Math.random() > 0.5 ? 1 : -1) * (maxX * 0.8);
            randomY = (Math.random() > 0.5 ? 1 : -1) * (maxY * 0.8);
        } else {
            randomX = Math.random() * maxX - maxX/2;
            randomY = Math.random() * maxY - maxY/2;
        }
        
        noBtn.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.9)`;
        
        // Make YES button grow with each attempt
        yesBtn.style.transform = `scale(${1 + runAwayCount * 0.1})`;
    });

    // When NO button is clicked
    noBtn.addEventListener("click", () => {
        yesBtn.style.transform = "scale(1.5)";
        yesBtn.style.filter = "drop-shadow(0 0 20px #ff4081)";
        
        // Create hearts around YES button
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💖';
                heart.style.position = 'absolute';
                heart.style.fontSize = '25px';
                heart.style.left = '50%';
                heart.style.top = '50%';
                heart.style.transform = `rotate(${i * 45}deg) translate(100px) rotate(-${i * 45}deg)`;
                heart.style.transition = 'all 1s ease';
                yesBtn.parentElement.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.transform = `rotate(${i * 45}deg) translate(150px) rotate(-${i * 45}deg)`;
                    heart.style.opacity = '0';
                    setTimeout(() => heart.remove(), 1000);
                }, 100);
            }, i * 100);
        }
        
        setTimeout(() => {
            yesBtn.style.transform = "scale(1.2)";
            yesBtn.style.filter = "drop-shadow(0 5px 15px rgba(0,0,0,0.3))";
        }, 500);
    });

    // YES button clicked - The big moment!
    yesBtn.addEventListener("click", () => {
        title.innerHTML = "💖 YAY! YOU'RE MY VALENTINE! 💖";
        title.style.fontSize = "40px";
        title.style.animation = "heartBeat 1s infinite";
        
        // Change to super happy cat
        catImg.src = "https://i.gifer.com/origin/15/153a6b9a6b6e1e8e6e6e6e6e6e6e6e6e.gif";
        
        // Add celebration class
        document.querySelector(".letter-window").classList.add("final");
        
        // Hide buttons
        buttons.style.display = "none";
        
        // Show final romantic text
        finalText.style.display = "block";
        
        // Massive celebration with hearts
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-element';
                const symbols = ['💖', '💕', '💝', '💘', '💓', '💗', '💞', '❤️'];
                heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = '100vh';
                heart.style.fontSize = (Math.random() * 40 + 30) + 'px';
                heart.style.animation = `floatAround ${Math.random() * 10 + 5}s linear infinite`;
                heart.style.zIndex = '1000';
                document.body.appendChild(heart);
                
                // Remove after animation
                setTimeout(() => heart.remove(), 10000);
            }, i * 100);
        }
        
        // Add romantic message
        const romanticMsg = document.createElement('div');
        romanticMsg.innerHTML = "Shweta 💝 + Me 💝 = Forever 💕";
        romanticMsg.style.position = 'fixed';
        romanticMsg.style.top = '20px';
        romanticMsg.style.left = '50%';
        romanticMsg.style.transform = 'translateX(-50%)';
        romanticMsg.style.fontSize = '28px';
        romanticMsg.style.color = '#ff4081';
        romanticMsg.style.fontFamily = "'Pacifico', cursive";
        romanticMsg.style.zIndex = '1000';
        romanticMsg.style.background = 'rgba(255, 255, 255, 0.9)';
        romanticMsg.style.padding = '15px 30px';
        romanticMsg.style.borderRadius = '50px';
        romanticMsg.style.boxShadow = '0 10px 30px rgba(255, 64, 129, 0.3)';
        document.body.appendChild(romanticMsg);
        
        // Play romantic sound
        try {
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-romantic-heartbeat-1155.mp3');
            audio.volume = 0.5;
            audio.play();
        } catch(e) {
            console.log("Romantic celebration!");
        }
        
        // Final message with Mayfair restaurant details
        setTimeout(() => {
            alert("💝 Shweta, you just made me the happiest person in the world! 💝\n\nOur Valentine's Date:\n🍽️ Mayfair Restaurant\n⏰ 7:00 PM Today\n\nI'll be waiting for you! ❤️");
        }, 2000);
    });
});