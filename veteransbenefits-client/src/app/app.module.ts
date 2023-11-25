import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ResourcesComponent } from './resources/resources.component';
import { routes } from './app-routing.module';
import { GuidedWizardComponent } from './guided-wizard/guided-wizard.component';
import { MatStepperModule } from '@angular/material/stepper';
import { EligibilityStepComponent } from './guided-wizard/steps/service-details-step/eligibility-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { PersonalInfoStepComponent } from './guided-wizard/steps/personal-info-step/personal-info-step/personal-info-step.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar/navigation-bar.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { FeaturedArticlesComponent } from './knowledge-base/featured-articles/featured-articles.component';
import { MarkdownPipe } from './knowledge-base/featured-articles/shared/markdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    ResourcesComponent,
    GuidedWizardComponent,
    EligibilityStepComponent,
    PersonalInfoStepComponent,
    NavigationBarComponent,
    KnowledgeBaseComponent,
    FeaturedArticlesComponent,
    MarkdownPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
