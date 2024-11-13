// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importation des composants pour les routes
// @ts-ignore
import { AchatComponent } from './achat/achat.component';
// @ts-ignore
import { PaiementComponent } from './paiement/paiement.component';
// @ts-ignore
import { IAComponent } from './ia/ia.component';
// @ts-ignore
import { UserComponent } from './user/user.component';

// Configuration des routes
const routes: Routes = [
  { path: '', redirectTo: '/achat', pathMatch: 'full' },  // Redirection vers une page par défaut
  { path: 'achat', component: AchatComponent },           // Route vers le composant Achat
  { path: 'paiement', component: PaiementComponent },     // Route vers le composant Paiement
  { path: 'ia', component: IAComponent },                 // Route vers le composant Intelligence Artificielle
  { path: 'user', component: UserComponent },             // Route vers le composant Utilisateur
  { path: '**', redirectTo: '/achat' }                    // Redirection pour les routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
