window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
    
    const transcript = Array.from(e.results)
        .map((item) => item[0])
        .map((item) => item.transcript)
        .join("");

        console.log(transcript);

        p.textContent = transcript;
        if(e.results[0].isFinal){
            p = document.createElement("p");
            words.appendChild(p);
        }

        if(transcript.includes("hey Karen get the weather for me please")){
            console.log("Getting the weather, Wait a Second!");
            alert("Wait a second, I need some time!");
        }
        
})

recognition.addEventListener("end",recognition.start);
recognition.start();