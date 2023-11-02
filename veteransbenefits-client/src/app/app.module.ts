import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
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
import { MatDialogModule } from '@angular/material/dialog';
import { PersonalInfoStepComponent } from './guided-wizard/steps/personal-info-step/personal-info-step/personal-info-step.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    ResourcesComponent,
    HomeComponent,
    GuidedWizardComponent,
    EligibilityStepComponent,
    PersonalInfoStepComponent,
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
    MatRadioModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
