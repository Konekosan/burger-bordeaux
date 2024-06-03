import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UsagerComponent } from './usager/usager.component';
import { UsagerService } from './usager/usager.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EtablissementService } from './etablissement/etablissement.service'
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { AddEtablissementModalComponent } from './modal/add-etablissement-modal/add-etablissement-modal.component';
import { AddEtablissementModalService } from './modal/add-etablissement-modal/add-etablissement-modal.service'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainMenuComponent,
    UsagerComponent,
    AboutUsComponent,
    EtablissementComponent,
    AddEtablissementModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    MenubarModule,
    DropdownModule
  ],
  providers: [UsagerService, EtablissementService, AddEtablissementModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
