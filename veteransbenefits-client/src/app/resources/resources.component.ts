import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})

export class ResourcesComponent {
  searchInput: string = ''; // Property to hold the search input
  selectedCategory: string = '';  //Property to hold the filter value for categories


  //List of all resources put into array for each card. This array is loop through to update displayed cards
  //Known issues: 
  //1. Trying to break up the description into multiple lines to look better causes error
  //Ideally, we would like to transfer this information to a table so that entries can much more easily be added and removed
  resources: Array<{ title: string, category: string, description: string, link: string }> = [
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scheduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
    { title: 'The Clinicians Guide', category: 'Health', 
    description: 'This guide is designed to assist clinicians when performing compensation and pension (C&P) examinations. Since C&P examinations differ markedly from traditional medical examinations, special clinician guidance is required. This guide provides information for performing examinations that meet the requirements of the federal law.', 
    link: 'https://nebula.wsimg.com/abfac4b8e09be3ac271b628f32919e7a?AccessKeyId=1FBD76F67BF87C8DD859&disposition=0&alloworigin=1' },
    { title: 'State Veteran Benefit Finder', category: 'Misc.', 
    description: 'This tool allows users to filter state-level veteran benefits by type of benefit, beneficiary, and state to identify benefits for which they may be eligible, providing a unique and invaluablereference. The accompanying report offers analysis of trends in state-level benefits and includes recommendations for an array of key stakeholders, from veterans to those who serve them across domains.', 
    link: 'https://www.cnas.org/publications/reports/state-veteran-benefit-finder' },
    { title: 'Application for Burial Benefits', category: 'Death Benefits', 
    description: 'This page aims to assist surviving family and friends of a Veteran who has unfortunately passed away. By filling out this application, applicants can obtain benefits aimed to help cover burial, funeral, and transportation costs', 
    link: 'https://www.va.gov/burials-and-memorials/application/530/introduction' },
    { title: 'VALife - Life Insurance', category: 'Death Benefits', 
    description: 'This page discusses life insurance premium rates, benefit eligiblity,  insurance benefits, beneficiary resources, applications and more regarding life insurance through VA Life. Please note, applicants who switch to VA Life from S-DVI can keep their S-DVI while waiting', 
    link: 'https://www.va.gov/life-insurance/options-eligibility/valife/' },
    { title: 'Arlington National Cemetary Funeral Scheduling', category: 'Death Benefits', 
    description: 'This link will take you to the main funerals page for the Arlington National Cemetary, with links to determining eligiblity, associated costs, required documents, and other information needed to schedule a funeral service.', 
    link: 'https://www.arlingtoncemetery.mil/Funerals/Scheduling-a-Funeral' },
    { title: 'Burial Flags', category: 'Death Benefits', 
    description: 'This page will provide users resources and information about obtaining a burial flag and eligiblity for obtaining this flag', 
    link: 'https://www.arlingtoncemetery.mil/Funerals/Scheduling-a-Funeral' },
    { title: 'CEM - Burial Markers', category: 'Death Benefits', 
    description: 'Information about obtaining free headstones, markers, or medallions for the deceased. Includes eligiblity for said items', 
    link: 'https://www.cem.va.gov/hmm/' },
    { title: 'Presidential Memorial Certificates (PMC)', category: 'Death Benefits', 
    description: 'Engraved paper signed by the current president to honor those who have served. Information regarding eligiblity, application, and certificate transportation.', 
    link: 'https://www.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/' },
    { title: 'Benefits Delivery at Discharge (BDD)', category: 'Disability Compensation', 
    description: 'Information developed from r/VeteransBenefits relating to applying for Benefits at Discharge. Must be completed 90-180 days before separation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/bdd/' },
    { title: 'Aggregated Service Connection', category: 'Disability Compensation', 
    description: 'Information developed by r/VeteransBenefits relating to applying for Benefits at Discharge. Helps users to understand how to determine expected benefits from rating of pre-service (pre-existing) and post-service conditions based on aggravation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/agg/' },
    { title: 'VA Disability Claim Types', category: 'Disability Compensation', 
    description: 'Information developed from r/VeteransBenefits relating to different disability claim types. Types of claims include a Deferred Claim, Fully Developed Claim, Increase Claim, Inferred Claim, Original Claim, Secondary Claim, Standard Claim, Supplemental Claim, and 1151 Claim. There is not set time period you must wait for to file a claim increase.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/claimtype/' },
    { title: 'Buddy Letters Information', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Buddy Letters can be used if an individual is missing evidence or context in their military records regarding possible disabilities that can be helpful for filing a claim.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/buddy/' },
    { title: 'Buddy Letter Form (VA Form 21-10210)', category: 'Disability Compensation', 
    description: 'A form that can be filled out by someone has witnessed a negative impact to your life caused by a disability in circumstances where your military records are missing evidence or context regarding this information. Helpful for filling disability claims', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-10210-ARE.pdf' },
    { title: 'Intent to File Form (VA-Form 21-0966)', category: 'Disability Compensation', 
    description: 'A form for establishing your intent to file and effective date. Your effective date is critical because it is used to determine the date the Veteran gets paid from.', 
    link: 'https://www.vba.va.gov/pubs/forms/vba-21-0966-are.pdf' },
    { title: 'Commonly Overlooked Disabilities', category: 'Disability Compensation', 
    description: 'A list of disabilities you may be able to file a claim for that are frequently forgotten. Compiled by r/VeteransBenefits.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/commonly/' },
    { title: 'Compensation and Pension Examinations (C&Ps)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A step by step walkthrough for a C&P examination including steps to be taken before, during, and after the examination.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/cnp/' },
    { title: 'Veterans Transportation Service Locations', category: 'Misc.', 
    description: 'A state by state list of free transportation services available to veterans.', 
    link: 'https://www.va.gov/HEALTHBENEFITS/vtp/map.asp' },
    { title: 'Congressional Inquiry', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Do you feel like your claim is lost in VA purgatory? Or are having some other issue with the VA? If so, contacting your representative might help things along. This resource provides a breakdown on how to contact a representative to speed to get updated informationr regarding your claim(s).', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/congress/' },
    { title: 'Dealing With A Bad Examiner', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A list of steps an individual can take in cases of an unfair examination. Includes the Memorandum for Record (MFR) Form (VA Form 21-4138).', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/badex/' },
    { title: 'Memorandum for Record (MFR) Form (VA Form 21-4138)', category: 'Disability Compensation', 
    description: 'A form that can be filled out after a Compensation and Pension Examination (C&P) in which you felt you had an unfair or bad examiner.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-4138-ARE.pdf' },
    { title: 'Disability Benefit Questionnaire (DBQ) Information', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Information regarding the Disability Benefit Questionnaire (DBQ). The DBQ is used to determine the severity of a Veteran\'s disability, but does not help determine if the disability is service-connected. A DBQ is not required for your disability claim or appeal to be successful. Please note that it is the position of r/VeteransBenefits that Veterans avoid going this route.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/dbq/' },
    { title: 'Effective Dates', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Effective Dates determine when a Veteran\'s pay will start in cases of Disability Claims. This page includes information regarding these dates and how they are determined.', 
    link: 'https://www.reddit.com/r/VeteranBenefits/wiki/edate/' },
    { title: 'Filing for Aid and Attendance/Housebound Information', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits.  Information regarding application of VA Form 21-2680. This includes information about determining eligibility and how housebound or inidividuals needing aid and attendance can apply.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/aah/' },
    { title: 'Filing for Aid and Attendance/Housebound Form (VA Form 21-2680)', category: 'Disability Compensation', 
    description: 'Form used to apply for individuals who are housebound are in need of aid and attendance so that they may get assistance in their daily living.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-2680-ARE.pdf' },
    { title: 'Filing a VA Disability Claim', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A large collection and breakdown of information about filing a disability claim. VA disability is a monthly tax-free monetary benefit that ranges from over $100 to nearly $10,000 in the case of Special Monthly Compensation.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vaclaim/' },
    { title: 'Independent Medical Opinion (IMO) / Nexus Letter', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page breaks down what an IMO is, how to obtain and IMO, and important information that should be included in an IMO.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/imo/' },
    { title: 'Master Condition List', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. An alphabetical list of all the conditions listed within the rating schedule as well as containing some common but not all Analogous and equivalent conditions. This list can be used to determine how certain conditions are rated from the perspective of disability claims.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/masterlist/' },
    { title: 'National Guard and Reservist Claims', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page contains a plethora of information aimed to help those who served in the National Guard or Reserves to recieve benefits despite the difficulty that can commonly be experienced when doing so. Much of this information relates to Line of Duty (LOD) which can help veterans established a service connection. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/ngr/' },
    { title: 'Permanent & Total Disability (P&T)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page breaks down qualifications for permanent and total disability compensation, questions and answers surrounding the topic, as well as additional benefits that might be aquired. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/pt/' },
    { title: 'Personal Statement/Statement in Support of Claim', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page explains how to file a personal statement, something similar to a Buddy Letter. A personal statement is used to help provide context and clarifications for the filer of a disability claim in cases where more context or evidence may need to be provided. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/personal/' },
    { title: 'Authorization To Disclose Information To The Department Of Veterans Affairs (VA Form 21-4142)', category: 'Disability Compensation', 
    description: 'This form is used to to give permission to obtain your personal information from a non-VA source like a private doctor or hospital. ', 
    link: 'https://www.vba.va.gov/pubs/forms/vba-21-4142-are.pdf' },
    { title: 'Presumptive Conditions (Diseases/Disabilities)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A page breaking down special cases and scenarios that a Veteran may be eligible to recieve benefits and medical attention in special cases and scenarios outlined. Some of these cases include exposure to contaminants, chemicals, or regional diseases.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/presumptive/' },
    { title: 'Priority Processing', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A breakdown of how to speed up VA form processing if eligible.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/fast/' },
    { title: 'Proposed Rating Reduction', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A guide to help recover from a rating reduction that could negatively affect benefits or payments a veteran may recieve. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/reduction/' },
    { title: 'The Rating Schedule', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. An explanation of the rating schedule used to determine the benefit eligibility of a veteran. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/ratingsindex/' },
    { title: 'Requests AKA Tracked Items', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. An explanation of requests that can be sent to veterans by the VA to obtain more information regarding a claim. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/ratingsindex/' },
    { title: 'Requesting your C-File (Claims File)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page summarizes and guides the user in understanding a claims file, a file heavily important in filing an appeal for a claim decision. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/ratingsindex/' },
    { title: 'Reserve Officer Training Corps (ROTC) Claims', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. Information for ROTC members wishing to file benefits claims, relating to if they were or were not on orders. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/ratingsindex/' },
    { title: 'Secondary Conditions Due to Alcohol, Drugs, or Tobacco', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A breakdown of requirements of eligibility to file a claim based on the use of alcohol, drugs, or tabacco in cases of self medication, that may allow veterans to file for compensation claims. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/adt/' },
    { title: 'Service Connection', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A breakdown of what service connection is and how it can be used to help obtain compensation or other veteran benefits. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/sc/' },
    { title: 'Special Monthly Compensation (SMC)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. In certain circumstances the VA will pay compensation to Veterans with certain needs or disabilities at a rate higher than 100%. This is called Special Monthly Compensation (SMC) and this page aims to explain circumstances in which this may occur. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/smc/' },
    { title: 'Stages of a VA Disability Claim', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A break down of the different stages a claim may go through. ', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/stages/' },
    { title: 'VA Site - Checking Claim Status', category: 'Disability Compensation', 
    description: 'The below link takes the user to the VA\'s site for checking the current stage or status of a filed claim. ', 
    link: 'https://www.va.gov/claim-or-appeal-status/' },
    { title: 'Tertiary Service Connection (Intermediate Step AKA Service Connection Twice Removed)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. This page defines tertiary conditions and how they may be used to stregnthen benefits claims.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/tertiary/' },
    { title: 'Total Disability Individual Unemployability (TDIU/IU)', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A breakdown of a TDUI, a status that pays the Veteran at the 100% disability rate regardless of their actual Combined rating.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/iu/' }, 
    { title: 'VA Math', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A guide to understand how the VA performs calculations using items such as the combined rating table.', 
    link: 'https://www.reddit.com/r/VeteranBenefits/wiki/vamath/' }, 
    { title: 'Voluntary Reduction/Severance', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A page that can help a veteran forgo benefits that they believe they do not deserve.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/voluntary/' }, 
    { title: 'Withdrawing an Appeal/Claim', category: 'Disability Compensation', 
    description: 'From r/VeteransBenefits. A guide to help veterans remove a claims appeal, an entire claim, or a claimed condition.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/removed/' },
    { title: 'Becoming an Accredited Claims Agent', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A guide to becoming a Claims Agent.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/hiring3/' },
    { title: 'Becoming a VA Employee', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A guide to becoming a VA Employee as well as other possible roles within the organization.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/hiring/' },
    { title: 'Becoming a Veterans Service Officer (VSO)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A guide to becoming a VSO to help Veterans and their dependents gather claims evidence, provide critically important advice and insight, submit Claims and Appeals, help educate people on state and federal benefits they may be entitled to, as well as being an advocate on Veteran issues.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/hiring2/' },
    { title: 'Chapter 35 (Dependents\' Educational Assistance - DEA)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. The Dependents\' Educational Assistance program provides education benefits for the spouse and dependent children of a Veteran or Servicemember.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/survivorbenefits/#wiki_chapter_35_.28dependents.2019_educational_assistance_-_dea.29' },
    { title: 'Edith Nourse Rogers STEM Scholarship', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. This scholarship can be used to help veterans obtain an undergraduate degree, teaching certificate, or can assist in training programs for healthcare professionals.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/stem/' },
    { title: 'Federal Employment Benefits', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A breakdown of possible benefits or advantages a veteran can obtain when applying to federal positions.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/fedben/' },
    { title: 'GI Bills', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A breakdown of several different types of education opportunities, each with their own eligibility requirements and benefit amounts.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/education/' },
    { title: 'States Offering Free Tuition to Veterans and Their Dependents', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A state by state list of states offering free tuition to veterans.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/free_tuition/' },
    { title: 'States W/ Additional Exemptions of Residency Requirements for In-state Tuition', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A state by state list of states offering additional benefits to veterans for obtaining education.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/in_state/' },
    { title: 'Veterans Business Outreach Center (VBOC) program', category: 'Education & Employment', 
    description: 'This program offers resources to veterans, service members, and military spouses who are interested in starting or growing a small business.', 
    link: 'https://www.sba.gov/local-assistance/resource-partners/veterans-business-outreach-center-vboc-program' },
    { title: 'Veteran Employment Through Technology Education Courses (VET TEC)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. This page breaks down the VET TEC program, a program that can be used to obtain technology skills training from licensed providers.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/free_tuition/' },
    { title: 'Apply for Veteran Employment Through Technology Education Courses (VET TEC)', category: 'Education & Employment', 
    description: 'The application provided by the VA to apply to the VET TEC program, a program funded to help veterans learn technological skills.', 
    link: 'https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/introduction' },
    { title: 'Veterans\'s Employment and Training Service (VETS)', category: 'Education & Employment', 
    description: 'A resoure provided by the US Department of Labor to help veterans in the workplace.', 
    link: 'https://www.dol.gov/agencies/vets' },
    { title: 'Veteran Readiness and Employment (VR&E)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A VA program that helps Veterans, Servicemembers, and certain eligible dependents attain employment.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vre/' },
    { title: 'VetSuccess on Campus (VSOC)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. An explanation of a program that sets out to help make the transition from the military an easier process.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vsoc/' },
    { title: 'Yellow Ribbon Program', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. An explanation of the Yellow Ribbon Program, a program that helps cover the increased costs of non-resident tuition.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/yellow/' },

  ];
  
  // resourceItems: Array<{ title: string, category: string, description: string, link: string }> = [
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scueduling', 
  //   description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
  //   link: 'https://va.my.site.com/VAVERA/s/' },
  //   // Add more resource items with the required properties
  // ];

  filteredResources: any[] = this.resources;
  resource: any; // Declare the resource property


  filterResources() {
    return this.resources.filter(resource => {
      // Check if the resource's category is selected or no category is selected
      const isCategoryMatch = this.selectedCategory.length === 0 || this.selectedCategory.includes(resource.category);
      
      // Check if the search input is empty or if the title or description contains the search input
      const isSearchMatch = this.searchInput === '' ||
        resource.title.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        resource.description.toLowerCase().includes(this.searchInput.toLowerCase());

      // Return true if both category and search match, otherwise false
      return isCategoryMatch && isSearchMatch;
    });
  }

  updateFilteredResources() {
    this.filteredResources = this.filterResources();
  }

  resetCategories() {
    this.selectedCategory = '';
    this.updateFilteredResources();
  }

  searchResources() {
    console.log(this.searchInput.toLowerCase());
    const searchTerm = this.searchInput.toLowerCase();

    // Filter the resource items based on the search input
    const searchResults = this.resources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm)
    );
    this.filteredResources = searchResults;
    this.updateFilteredResources();
  }

  isCategorySelected(category: string) {
    return this.selectedCategory.includes(category) || this.selectedCategory.length === 0;
  }
}
