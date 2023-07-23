import {useEffect, useState} from "react";

export const useSpeech = (handleSpeechEnd?: () => void) => {

    const [voice, setVoice] = useState<SpeechSynthesisUtterance>();
    const [synth, setSynth] = useState<SpeechSynthesis>();

    useEffect(() => {
        const voiceInitial = new SpeechSynthesisUtterance();
        handleSpeechEnd && voiceInitial.addEventListener('end', handleSpeechEnd);
        const synthInitial = speechSynthesis;
        setVoice(voiceInitial)
        setSynth(synthInitial)
        return () => {
            window.speechSynthesis.cancel();
            handleSpeechEnd && voiceInitial.removeEventListener('end', handleSpeechEnd)
        }
    }, []);


    const handleSpeech = (text: string) => {
        if (voice && synth) {
            voice.rate = 0.9
            synth.cancel();
            voice.text = text;
            synth.speak(voice);
        }
    }
    return {handleSpeech}
}
