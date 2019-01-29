import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActiviteService } from './services/activite.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConsultActiviteComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActiviteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
