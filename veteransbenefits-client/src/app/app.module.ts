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
import { EligibilityStepComponent } from './guided-wizard/steps/service-details-step/eligibility-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    ResourcesComponent,
    HomeComponent,
    GuidedWizardComponent,
    EligibilityStepComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
