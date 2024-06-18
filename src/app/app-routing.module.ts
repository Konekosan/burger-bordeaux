import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsagerComponent } from './usager/usager.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { UsagerInfoComponent } from './usager-info/usager-info.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: EtablissementComponent },
  { path: 'usagers', component: UsagerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'me', component: UsagerInfoComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
