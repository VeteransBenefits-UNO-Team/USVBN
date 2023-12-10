import { Component } from '@angular/core';
import { GuidedWizardService } from '../guided-wizard/shared/guided-wizard.service';

@Component({
  selector: 'app-filled-forms',
  templateUrl: './filled-forms.component.html',
  styleUrls: ['./filled-forms.component.scss'],
})
export class FilledFormsComponent {
  pdfForms: any;

  constructor(private wizardService: GuidedWizardService) {}

  ngOnInit() {
    this.pdfForms = this.wizardService.getFilledForms();
  }

  getFileName(url: string): string {
    // decoding the URL to get the actual file path
    const decodedUrl = decodeURIComponent(url);

    // extracting the file name from the decoded URL
    const lastBackslashIndex = decodedUrl.lastIndexOf('\\');
    const pdfIndex = decodedUrl.indexOf('.pdf', lastBackslashIndex);
    if (lastBackslashIndex !== -1 && pdfIndex !== -1) {
      return decodedUrl.substring(lastBackslashIndex + 1, pdfIndex + 4);
    }

    return 'Unknown File';
  }
}
