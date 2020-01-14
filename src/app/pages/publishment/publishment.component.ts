import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishment',
  templateUrl: './publishment.component.html',
  styleUrls: ['./publishment.component.css']
})
export class PublishmentComponent implements OnInit {

  public showComments = false;

  public comments = [{
      id: 1,
      name: "Juanito",
      comment:"Buena Foto :)"
    },
    {
      id: 2,
      name: "El arquero",
      comment:"Saludos soy el arquero!!!"
    },
    {
      id: 3,
      name: "Paco",
      comment:"Me quede chato"
    },
  ]

  public comment = {
    id: 0,
    name:"Anonimo",
    comment: "",
  }
  constructor() { }

  ngOnInit() {
  }

  public toggleComments(){
    this.showComments=!this.showComments
  }

  public addComment(){
    let lastId= (this.comments[(this.comments.length)-1].id) + 1
    console.log(lastId)
    let newArray=this.comments
    newArray.push({
      id: lastId,
      name: this.comment.name,
      comment: this.comment.comment,
    })

    this.comments=newArray
    console.log(this.comments)

  }
}
