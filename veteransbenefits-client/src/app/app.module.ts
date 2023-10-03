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
import { ServiceDetailsStepComponent } from './guided-wizard/steps/service-details-step/service-details-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    ResourcesComponent,
    HomeComponent,
    GuidedWizardComponent,
    ServiceDetailsStepComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
