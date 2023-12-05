import { Component } from '@angular/core';
import { GuidedWizardService } from '../guided-wizard/shared/guided-wizard.service';

@Component({
  selector: 'app-filled-forms',
  templateUrl: './filled-forms.component.html',
  styleUrls: ['./filled-forms.component.scss']
})
export class FilledFormsComponent {
  pdfForms: any;

  constructor(private wizardService: GuidedWizardService) {}

  ngOnInit(){
    this.pdfForms = this.wizardService.getFilledForms();
  }

}
