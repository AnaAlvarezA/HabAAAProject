import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LegalDisclaimerComponent } from './legal-disclaimer/legal-disclaimer.component';
import { PrivacePolicyComponent } from './privace-policy/privace-policy.component';
import { PrivateAreaComponent } from './private-area/private-area.component';
import { ProvidersComponent } from './providers/providers.component';
import { ServicesComponent } from './services/services.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [ClientsComponent, ContactUsComponent, HomeComponent, LegalDisclaimerComponent, PrivacePolicyComponent, PrivateAreaComponent, ProvidersComponent, ServicesComponent, MapComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [ClientsComponent, ContactUsComponent, HomeComponent, LegalDisclaimerComponent, PrivacePolicyComponent, PrivateAreaComponent, ProvidersComponent, ServicesComponent]
})
export class FeaturesModule { }
