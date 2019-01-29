import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,RouterModule, Routes, Router } from '@angular/router';

import { ActiviteService } from '../services/activite.service';



@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {

  param1 : string = "";
  param2 : string ="";
  editAct = false;
  constructor(private activatedRoute:ActivatedRoute, public activiteService : ActiviteService,private monRouteur : Router) {
    
    this.param1 = this.activiteService.objectifs[this.activatedRoute.snapshot.params["param1"]];
    this.param2 = this.activatedRoute.snapshot.params["param2"];
   }

   removeElm(){
     this.activiteService.objectifs.splice(this.activatedRoute.snapshot.params["param1"],1);
     this.monRouteur.navigate([""]);
   }

   showEditText(){
      this.editAct=true;
    
   }

   saveEdition(){
      this.editAct=false;
      this.activiteService.objectifs.splice(this.activatedRoute.snapshot.params["param1"],1,this.param1);
   }
   back(){
      this.monRouteur.navigate([""]);
     }
  ngOnInit() {
  }

}
