import { Component } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  //taking parameter "messageService" of type "MessageService"
  constructor(public messageService : MessageService) { }
}

