import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { ResourcesComponent } from './resources/resources.component';
import { GuidedWizardComponent } from './guided-wizard/guided-wizard.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { FilledFormsComponent } from './filled-forms/filled-forms.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'knowledge-base', component: KnowledgeBaseComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'guided-wizard', component: GuidedWizardComponent },
  { path: 'filled-forms', component: FilledFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export { routes };
