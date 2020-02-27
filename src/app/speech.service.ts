import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { }

  public sayThis(utterance) {
    const utteranceInstance = new SpeechSynthesisUtterance(utterance);
    utteranceInstance.lang = 'zh-Chinese'
    utteranceInstance.rate = 1.5;
    speechSynthesis.speak(utteranceInstance);
  }
  public cancelSpeech() {
    speechSynthesis.cancel()
  }
}
