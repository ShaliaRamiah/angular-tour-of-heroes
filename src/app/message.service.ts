import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  //clearing out all the messages in the message array
  clear(){
    this.messages = [];
  }
}
