import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  pictureCover:string="";
  @Input()
  postTitle:string="";
  @Input()
  postPreviewText:string="";
  @Input()
  id:string="";

  constructor(){

  }
  ngOnInit(): void {

  }


}
