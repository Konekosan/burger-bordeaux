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
import { AddEtablissementModalService } from './modal/add-etablissement-modal/add-etablissement-modal.service';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InputTextModule } from 'primeng/inputtext';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserModalComponent } from './modal/add-user-modal/add-user-modal.component';
import { LoginModalService } from './modal/login-modal/login-modal.service';
import { LoginComponent } from './authentication/login/login.component'
import { LoginService } from './authentication/login/login.service';
import { UsagerInfoComponent } from './usager-info/usager-info.component';
import { ContactComponent } from './contact/contact.component';
import { MessageBarComponent } from './shared/message-bar/message-bar.component';
import { MessageBarSuccessComponent } from './shared/message-bar/message-bar-success/message-bar-success.component';
import { MessageBarInfoComponent } from './shared/message-bar/message-bar-info/message-bar-info.component';
import { MessageBarDeleteComponent } from './shared/message-bar/message-bar-delete/message-bar-delete.component';
import { EditUserModalComponent } from './modal/edit-user-modal/edit-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainMenuComponent,
    UsagerComponent,
    AboutUsComponent,
    EtablissementComponent,
    AddEtablissementModalComponent,
    ConfirmModalComponent,
    LoginModalComponent,
    AddUserModalComponent,
    LoginComponent,
    UsagerInfoComponent,
    ContactComponent,
    MessageBarComponent,
    MessageBarSuccessComponent,
    MessageBarInfoComponent,
    MessageBarDeleteComponent,
    EditUserModalComponent
    
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
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [UsagerService,
              EtablissementService, 
              AddEtablissementModalService,
              LoginModalService,
              LoginService,
              provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
