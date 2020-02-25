import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor() { }

  public sayQuestion(utterance) {
    const utteranceInstance = new SpeechSynthesisUtterance(utterance);
    utteranceInstance.lang = 'zh-Chinese'
    utteranceInstance.rate = 4;
    speechSynthesis.speak(utteranceInstance)
  }
  public cancelSpeech() {
    speechSynthesis.cancel()
  }
}
