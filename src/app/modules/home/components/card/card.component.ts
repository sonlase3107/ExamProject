import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() videoObject!: Video
  constructor() { }
  isEmpty: boolean = false


}
