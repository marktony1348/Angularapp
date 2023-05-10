import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'corp-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss']
})
export class SlideItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
