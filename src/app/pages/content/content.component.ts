import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  coverPicture:string="";
  @Input()
  contentTitle:string="";
  @Input()
  contentPost:string="";

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))

    )
  }

}
