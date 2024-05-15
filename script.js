// Select the textarea, button with class "Btn", and select elements from the HTML document
let textArea = document.querySelector("textarea");
let listenBtn = document.querySelector(".Btn");
let voiceSelect = document.querySelector("select");

// Create a new SpeechSynthesisUtterance object
let utterance = new SpeechSynthesisUtterance();

// Event listener for when the voices change (e.g., when the page loads)
speechSynthesis.onvoiceschanged = () => {
    // Get the list of available voices
    let voices = speechSynthesis.getVoices();
    // Set the default voice to the first one in the list
    speechSynthesis.voice = voices[0];
    // Create a new option element with the voice name and index
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Event listener for when the voice select element changes
voiceSelect.addEventListener("change", () => {
    utterance.voice = speechSynthesis.getVoices()[voiceSelect.value];
});
// Event listener for when the listen button is clicked
listenBtn.addEventListener("click", () => {
    // Set the utterance text to the value of the textarea
    utterance.text = textArea.value;
    // Speak the utterance using the speech synthesis API
    speechSynthesis.speak(utterance);
});
