let textArea = document.querySelector("textarea");
let listenBtn = document.querySelector(".Btn");
let voiceSelect = document.querySelector("select");

let utterance = new SpeechSynthesisUtterance();

speechSynthesis.onvoiceschanged = () => {
    let voices = speechSynthesis.getVoices();
    speechSynthesis.voice = voices[0];
    
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    utterance.voice = speechSynthesis.getVoices()[voiceSelect.value];
});

listenBtn.addEventListener("click", () => {
    utterance.text = textArea.value;
    speechSynthesis.speak(utterance);
});
