import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

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
  private id:string | null="";

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setContentValues(this.id);
  }

  setContentValues(id:string | null){
    const result = dataFake.filter(post => post.id == id)[0]


    if(result){
      this.coverPicture=result.picture;
      this.contentTitle=result.title;
      this.contentPost=result.post;
    }
  }

}
