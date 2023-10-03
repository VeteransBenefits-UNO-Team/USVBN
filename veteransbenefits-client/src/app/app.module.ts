import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app-routing.module';
import { GuidedWizardComponent } from './guided-wizard/guided-wizard.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    ResourcesComponent,
    HomeComponent,
    GuidedWizardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), MatStepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
