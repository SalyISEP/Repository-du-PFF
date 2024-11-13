// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { AppRoutingModule } from './app-routing.module';  // Importer ici le module de routing

// @ts-ignore
import { AppComponent } from './app.component';
// @ts-ignore
import { AchatComponent } from './achat/achat.component';
// @ts-ignore
import { PaiementComponent } from './paiement/paiement.component';
// @ts-ignore
import { IAComponent } from './ia/ia.component';
// @ts-ignore
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AchatComponent,
    PaiementComponent,
    IAComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Assurez-vous que le module de routing est importé ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
