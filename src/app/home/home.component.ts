import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], 
  animations: [
    trigger('objectifs',[
      transition('* => *',[
       query(':enter', style({opacity: 0}), {optional: true}),
       query(':enter', stagger('300ms',[
         animate('.6s ease-in', keyframes([
           style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
           style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
           style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]),{optional: true}) 
       ])
      ])
    ]
})
export class HomeComponent implements OnInit {

  nbItems: number;
  btnText: string  = "Ajouter un item";
  objectifText : string = "Mon nouvel objectif";
  objectifs = [];
 

  constructor(private monRouteur : Router, public activiteService : ActiviteService) { }
  ngOnInit() {
    
   
     this.objectifs = this.activiteService.objectifs;
     this.nbItems = this.objectifs.length;
  }

  ajoutItem()
  {
    this.activiteService.objectifs.push(this.objectifText);
    this.nbItems = this.objectifs.length;
    this.objectifText = '';
    
    setTimeout(()=> {this.monRouteur.navigate(["about"])}, 1000 );
  }

  consultAct(index)
  {
    this.monRouteur.navigate(["consultAct/" + index]);

  }
}
