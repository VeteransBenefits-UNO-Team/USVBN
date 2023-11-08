// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   FormBuilder,
//   ReactiveFormsModule,
//   ValidationErrors,
//   Validators,
// } from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// import { EligibilityStepComponent } from './eligibility-step.component';
// import { GuidedWizardService } from '../../shared/guided-wizard.service';
// import { RankService } from '../../shared/rank.service';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// describe('EligibilityStepComponent', () => {
//   let component: EligibilityStepComponent;
//   let fixture: ComponentFixture<EligibilityStepComponent>;
//   let mockGuidedWizardService: jasmine.SpyObj<GuidedWizardService>;
//   let mockRankService: jasmine.SpyObj<RankService>;

//   beforeEach(async () => {
//     mockGuidedWizardService = jasmine.createSpyObj('GuidedWizardService', [
//       'moveToStep',
//     ]);
//     mockRankService = jasmine.createSpyObj('RankService', [
//       'getBranches',
//       'getRankCategories',
//       'hasBranch',
//       'getRanks',
//     ]);
//     mockRankService.getBranches.and.returnValue(['Army', 'Navy']);
//     mockRankService.getRankCategories.and.returnValue(['Enlisted', 'Officer']);
//     mockRankService.hasBranch.and.returnValue(true);
//     mockRankService.getRanks.and.returnValue(['Rank1', 'Rank2']);

//     await TestBed.configureTestingModule({
//       declarations: [EligibilityStepComponent],
//       imports: [
//         ReactiveFormsModule,
//         NoopAnimationsModule,
//         MatSelectModule,
//         MatInputModule,
//         MatIconModule,
//         MatFormFieldModule,
//         BrowserAnimationsModule,
//       ],
//       providers: [
//         { provide: GuidedWizardService, useValue: mockGuidedWizardService },
//         { provide: RankService, useValue: mockRankService },
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EligibilityStepComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize with a defined form group', () => {
//     expect(component.serviceDetailsForm).toBeDefined();
//     expect(component.serviceDetailsForm.get('yearsOfService')).toBeDefined();
//     expect(component.serviceDetailsForm.get('branch')).toBeDefined();
//     expect(component.serviceDetailsForm.get('serviceType')).toBeDefined();
//     expect(component.serviceDetailsForm.get('rankCategory')).toBeDefined();
//     expect(component.serviceDetailsForm.get('dischargeRank')).toBeDefined();
//   });

//   it('should populate branches and rank categories on initialization', () => {
//     component.ngOnInit();
//     expect(mockRankService.getBranches).toHaveBeenCalled();
//     expect(component.branches).toEqual(['Army', 'Navy']);
//     expect(mockRankService.getRankCategories).toHaveBeenCalled();
//     expect(component.rankCategories).toEqual(['Enlisted', 'Officer']);
//   });

//   it('should update form controls and UI on branch selection', () => {
//     const branch = 'Army';
//     component.onBranchSelect({ value: branch });
//     expect(mockRankService.hasBranch).toHaveBeenCalledWith(branch);
//     expect(component.showRankCategory).toBeTrue();
//     expect(component.serviceDetailsForm.get('rankCategory')?.value).toBe('');
//     expect(component.filteredRanks).toEqual([]);
//   });

//   it('should update filtered ranks on rank category selection', () => {
//     const category = 'Enlisted';
//     component.serviceDetailsForm.get('branch')?.setValue('Army');
//     component.onRankCategorySelect({ value: category });
//     expect(mockRankService.getRanks).toHaveBeenCalledWith('Army', category);
//     expect(component.filteredRanks).toEqual(['Rank1', 'Rank2']);
//   });

//   it('should proceed to the next step if the form is valid', () => {
//     component.serviceDetailsForm.setValue({
//       yearsOfService: '5',
//       branch: 'Army',
//       serviceType: 'Active',
//       rankCategory: 'Enlisted',
//       dischargeRank: 'Rank1',
//     });
//     component.moveToNextStep();
//     expect(mockGuidedWizardService.moveToStep).toHaveBeenCalledWith(1);
//   });

//   it('should not proceed to the next step if the form is invalid', () => {
//     component.serviceDetailsForm.setValue({
//       yearsOfService: '',
//       branch: '',
//       serviceType: '',
//       rankCategory: '',
//       dischargeRank: '',
//     });
//     component.moveToNextStep();
//     expect(mockGuidedWizardService.moveToStep).not.toHaveBeenCalled();
//   });

//   it('should have yearsOfService field numeric', () => {
//     let errors: ValidationErrors | null = {};
//     const yearsOfService =
//       component.serviceDetailsForm.controls['yearsOfService'];

//     yearsOfService.setValue('1.234');
//     errors = yearsOfService.errors || {};
//     expect(errors['pattern']).toBeTruthy();
//   });

//   it('should validate yearsOfService field as required', () => {
//     let errors: { [key: string]: any } = {};
//     const yearsOfService =
//       component.serviceDetailsForm.controls['yearsOfService'];

//     yearsOfService.setValue('');
//     errors = yearsOfService.errors || {};
//     expect(errors['required']).toBeTruthy();
//   });
// });
