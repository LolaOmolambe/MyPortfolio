import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { ServicesComponent } from './Components/services/services.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { WorkComponent } from './Components/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    IntroductionComponent,
    ServicesComponent,
    SidebarComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
