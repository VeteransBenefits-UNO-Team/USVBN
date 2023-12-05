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
  //Not sure if we will have enough time to accomplish this though unfortunately 
  resources: Array<{ title: string, category: string, description: string, link: string }> = [
    { title: 'VA Regional Office (VERA) appointment scheduler', category: 'Appointment Scheduling', 
    description: 'This site is for scheduling one-on-one appointments with a VA regional office.', 
    link: 'https://va.my.site.com/VAVERA/s/' },
    { title: 'Find VA locations', category: 'Misc.', 
    description: 'Find a VA location or in-network community care provider. ', 
    link: 'https://www.va.gov/find-locations/?facilityType=benefits' },

    { title: 'TogetherWeServed', category: 'Misc.', 
    description: 'A website that serves as a large directory of US Military veterans. Can be used to help find those you served with that you might have lost contact with.', 
    link: 'https://www.togetherweserved.com/' },

    { title: 'The Clinicians Guide', category: 'Health', 
    description: 'This guide is designed to assist clinicians when performing compensation and pension (C&P) examinations. Since C&P examinations differ markedly from traditional medical examinations, special clinician guidance is required. This guide provides information for performing examinations that meet the requirements of the federal law.', 
    link: 'https://nebula.wsimg.com/abfac4b8e09be3ac271b628f32919e7a?AccessKeyId=1FBD76F67BF87C8DD859&disposition=0&alloworigin=1' },
    { title: 'State Veteran Benefit Finder', category: 'Misc.', 
    description: 'This tool allows users to filter state-level veteran benefits by type of benefit, beneficiary, and state to identify benefits for which they may be eligible, providing a unique and invaluablereference. The accompanying report offers analysis of trends in state-level benefits and includes recommendations for an array of key stakeholders, from veterans to those who serve them across domains.', 
    link: 'https://www.cnas.org/publications/reports/state-veteran-benefit-finder' },
    { title: 'Application for Burial Benefits', category: 'Death Benefits', 
    description: 'This page aims to assist surviving family and friends of a Veteran who has unfortunately passed away. By filling out this application, applicants can obtain benefits aimed to help cover burial, funeral, and transportation costs', 
    link: 'https://www.va.gov/burials-and-memorials/application/530/introduction' },
    { title: 'Information You Need To Apply For Lump Sum Death Benefit', category: 'Death Benefits', 
    description: 'This page discusses requirements and needed information for applying for the Lump Sum Death Benefit for a fallen veteran.', 
    link: 'https://www.ssa.gov/forms/ssa-8.html' },
    { title: 'VA - Apply for Burial Benefits', category: 'Death Benefits', 
    description: 'An online form to apply for veteran burial benefits ', 
    link: 'https://www.va.gov/burials-and-memorials/application/530/introduction' },
    { title: 'VA - Scheduling a Burial', category: 'Death Benefits', 
    description: 'Information needed for scheduling a burial for a veteran.', 
    link: 'https://www.va.gov/burials-memorials/schedule-a-burial/' },
    { title: 'VALife - Life Insurance', category: 'Death Benefits', 
    description: 'This page discusses life insurance premium rates, benefit eligiblity,  insurance benefits, beneficiary resources, applications and more regarding life insurance through VA Life. Please note, applicants who switch to VA Life from S-DVI can keep their S-DVI while waiting', 
    link: 'https://www.va.gov/life-insurance/options-eligibility/valife/' },
    { title: 'Veterans\' Group Life Insurance (VGLI)', category: 'Death Benefits', 
    description: 'A link to information regarding VGLI. With Veterans\' Group Life Insurance (VGLI), you may be able to keep your life insurance coverage after you leave the military for as long as you continue to pay the premiums.', 
    link: 'https://www.va.gov/life-insurance/options-eligibility/vgli/' },
    { title: 'Veterans\' Mortgage Life Insurance (VMLI)', category: 'Death Benefits', 
    description: 'A link to information regarding VMLI. Veterans\' Mortgage Life Insurance (VMLI) offers mortgage protection insurance to the families of Veterans with severe service-connected disabilities who\'ve adapted a home to fit their needs', 
    link: 'https://www.va.gov/life-insurance/options-eligibility/vmli/' },
    { title: 'Arlington National Cemetary Funeral Scheduling', category: 'Death Benefits', 
    description: 'This link will take you to the main funerals page for the Arlington National Cemetary, with links to determining eligiblity, associated costs, required documents, and other information needed to schedule a funeral service.', 
    link: 'https://www.arlingtoncemetery.mil/Funerals/Scheduling-a-Funeral' },
    { title: '2024 VA DIC rates for spouses and dependents', category: 'Death Benefits', 
    description: 'Review 2024 VA Dependency and Indemnity Compensation (DIC) rates for the surviving spouses and dependent children of Veterans', 
    link: 'https://www.va.gov/disability/survivor-dic-rates/' },
    { title: '2024 VA DIC rates for parents', category: 'Death Benefits', 
    description: 'A Review of 2024 VA Dependency and Indemnity Compensation (DIC) rates for the surviving parents of Veterans', 
    link: 'https://www.va.gov/disability/parent-dic-rates/' },
    { title: 'Burial Flags', category: 'Death Benefits', 
    description: 'This page will provide users resources and information about obtaining a burial flag and eligiblity for obtaining this flag', 
    link: 'https://www.va.gov/burials-memorials/memorial-items/burial-flags/' },
    { title: 'CEM - Burial Markers', category: 'Death Benefits', 
    description: 'Information about obtaining free headstones, markers, or medallions for the deceased. Includes eligiblity for said items', 
    link: 'https://www.cem.va.gov/hmm/' },
    { title: 'Presidential Memorial Certificates (PMC)', category: 'Death Benefits', 
    description: 'Engraved paper signed by the current president to honor those who have served. Information regarding eligiblity, application, and certificate transportation.', 
    link: 'https://www.va.gov/burials-memorials/memorial-items/presidential-memorial-certificates/' },

    { title: 'Find your VA pension management center', category: 'Death Benefits', 
    description: 'Find the VA pension management center that serves you, depending on the type of claim you\'re submitting and the state or territory you live in.', 
    link: 'https://www.va.gov/pension/pension-management-centers/' },
    { title: 'Reserve Component Survivor Benefit Plan (SBP)', category: 'Death Benefits', 
    description: 'The Reserve Component Survivor Benefit Plan (RCSBP) enables people who served in Reserve Components to leave the people they care about with a benefit called an \"annuity.\"', 
    link: 'https://www.dfas.mil/retiredmilitary/provide/rcsbp/' },
    { title: 'Survivor Benefit Plan Overview (SBP)', category: 'Death Benefits', 
    description: 'An overview of the SBP. The Survivor Benefit Plan (SBP) allows a retiree to ensure, after death, a continuous lifetime annuity for their dependents. ', 
    link: 'https://militarypay.defense.gov/Benefits/Survivor-Benefit-Program/Overview/' },
    { title: '2024 VA Survivors Pension benefit rates', category: 'Death Benefits', 
    description: '2024 VA Survivors Pension benefit rates as well as an overview of items that might affect these rates. ', 
    link: 'https://www.va.gov/pension/survivors-pension-rates/' },
    



    { title: 'Higher-Level Review Form (HLR 20-0996)', category: 'Disability Compensation', 
    description: 'A form to apply for an entirely new review of your disability claim by an experienced (more senior) rater.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-20-0996-ARE.pdf' },
    { title: 'Higher-Level Review Form (HLR 20-0996) - Online Version', category: 'Disability Compensation', 
    description: 'A online form to apply for an entirely new review of your disability claim by an experienced (more senior) rater.', 
    link: 'https://www.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996/start' },
    { title: 'Supplemental Claim (20-0995)', category: 'Disability Compensation', 
    description: 'A form to submit new AND relevant evidence for a disability claim.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-20-0995-ARE.pdf' },
    { title: 'Supplemental Claim (20-0995) - Online Version', category: 'Disability Compensation', 
    description: 'An online form to submit new AND relevant evidence for a disability claim.', 
    link: 'https://www.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/start' },
    { title: 'United States Court of Appeals for Veterans Claims', category: 'Disability Compensation', 
    description: 'A link to the United States Court of Appeals for Veterans Claims used to appeal desicisons of claims made by the Veterans Benefits Association (VBA).', 
    link: 'https://www.uscourts.cavc.gov/appeal.php' },
    { title: 'Access VA - QuickSubmit', category: 'Disability Compensation', 
    description: 'Quick Submit is a VA partner that can be used to quickly submit applications or other items (for example: evidence to justify a disability claim) to the VA.', 
    link: 'https://eauth.va.gov/accessva/?cspSelectFor=quicksubmit' },
    { title: 'Veterans Evaluation Services', category: 'Disability Compensation', 
    description: 'An organization that can help obtain Compensation and Pension Examinations (C&Ps) exams.', 
    link: 'https://www.ves.com/' },
    { title: 'Optum Serve', category: 'Disability Compensation', 
    description: 'An organization that can help obtain Compensation and Pension Examinations (C&Ps) exams.', 
    link: 'https://www.optum.com/business/federal-government.html' },
    { title: 'Loyal Source', category: 'Disability Compensation', 
    description: 'An organization that can help obtain Compensation and Pension Examinations (C&Ps) exams.', 
    link: 'https://www.loyalsource.com/veteran-services/' },
    { title: 'Quality Timeliness Customer service (QTC)', category: 'Disability Compensation', 
    description: 'An organization that can help obtain Compensation and Pension Examinations (C&Ps) exams.', 
    link: 'https://www.qtcm.com/' },
    { title: 'Public Disability Benefits Questionnaires (DBQs)', category: 'Disability Compensation', 
    description: 'A list of public disability benefit questionnaires that can be review to help support and understand questions associated to your disability claim or examinations surrounding it.', 
    link: 'https://www.benefits.va.gov/compensation/dbq_publicdbqs.asp' },
    { title: 'MyHealtheVet', category: 'Disability Compensation', 
    description: 'Can be used to manage aspects of your health care, refill prescriptions, set appointments, communicate with the VA Healthcare team, or to access health records.', 
    link: 'https://www.myhealth.va.gov/mhv-portal-web/home' },
    { title: 'VA Accreditation Search', category: 'Disability Compensation', 
    description: 'A site to search Accredited Attorneys, Claims Agents, or Veterans Service Organizations (VSO) Representatives in cases where you feel a congressional inquiry may be required in reviewing your disability claim.', 
    link: 'https://www.va.gov/ogc/apps/accreditation/index.asp' },
    { title: 'VA Accreditation Search', category: 'Disability Compensation', 
    description: 'A site to search Accredited Attorneys, Claims Agents, or Veterans Service Organizations (VSO) Representatives in cases where you feel a congressional inquiry may be required in reviewing your disability claim.', 
    link: 'https://www.va.gov/ogc/apps/accreditation/index.asp' },
    { title: 'DD Form 2807-1, "REPORT OF MEDICAL HISTORY"', category: 'Disability Compensation', 
    description: 'The VA Form used to support claims and provided a timeline of your medical history.', 
    link: 'https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2807-1.pdf' },
    { title: 'National Personnel Records Center (NPRC)', category: 'Disability Compensation', 
    description: 'Using this tool you can make a new request for a Veteran\'s records or check the status of existing request..', 
    link: 'https://vetrecs.archives.gov/VeteranRequest/home.html' },
    { title: 'VA Form 21-0781', category: 'Disability Compensation', 
    description: 'Form for Supporting Statements for Service Connection for PTSD.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-0781-ARE.pdf' },
    { title: 'VA Form 21-0781a', category: 'Disability Compensation', 
    description: 'Form for Supporting Statements for Service Connection for PTSD that is a result of a personal trauma (such as military sexual assault).', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-0781a-ARE.pdf' },
    { title: 'VA-Form 21-526EZ', category: 'Disability Compensation', 
    description: 'Form used to apply for VA disability compensation and related benefits', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-526EZ-ARE.pdf' },
    { title: 'Department of Defense Instruction', category: 'Disability Compensation', 
    description: 'A long paper outlining Line of Duty (LOD) Determination for Medical and Dental Treatments and Incapacitation Pay Entitlements', 
    link: 'https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/124101p.pdf' },
    { title: 'VA Benefit Letters', category: 'Disability Compensation', 
    description: 'Link to download your VA benefit letter which provides a summary of your service dates, discharge status and overall/combined rating', 
    link: 'https://www.va.gov/records/download-va-letters/' },
    { title: 'VA - Help Filing A Claim', category: 'Disability Compensation', 
    description: 'Used if you need help filing a claim or appeal. In cases like these, this site may help you if you want to work with an accredited attorney, a claims agent, or a Veterans Service Officer (VSO).', 
    link: 'https://www.va.gov/disability/get-help-filing-claim/' },
    { title: 'Schedule For Rating Disabilities', category: 'Disability Compensation', 
    description: 'One of the outlines used by the VA to determine your disability rating.', 
    link: 'https://www.ecfr.gov/current/title-38/chapter-I/part-4' },
    { title: 'CA-1 (Federal Employee\'s Notice of Traumatic Injury and Claim for Continuation of Pay/Compensation)', category: 'Disability Compensation', 
    description: 'One of the forms that can be used by a ROTC member or cadet to submit a disability claim for physical injuries.', 
    link: 'https://www.dol.gov/sites/dolgov/files/owcp/regs/compliance/ca-1.pdf' },
    { title: 'CA-2 (Notice of Occupational Disease and Claim for Compensation)', category: 'Disability Compensation', 
    description: 'One of the forms that can be used by a ROTC member or cadet to submit a disability claim for non-physical injuries such as illness.', 
    link: 'https://www.dol.gov/sites/dolgov/files/owcp/regs/compliance/ca-2.pdf' },
    { title: ' Employees\' Compensation Operations & Management Portal (ECOMP)', category: 'Disability Compensation', 
    description: 'A site that can be used to submit disability claims for federal work related instances, mainly used to submit the CA-1 and/or CA-2 form.', 
    link: 'https://www.ecomp.dol.gov/#/' },
    { title: 'Employees\' Compensation Appeals Board - Application for Review (AB-1 Form)', category: 'Disability Compensation', 
    description: 'Used to appeal decisions in cases where federal employee disability claims were denied. Used primarily in cases such as denial of disability benefits from forms CA-1 and/or CA-2.', 
    link: 'https://www.dol.gov/sites/dolgov/files/ecab/ab-1.pdf' },
    { title: '2024 VA Special Monthly Compensation Rates', category: 'Disability Compensation', 
    description: 'List of current rates the VA pays to Veterans as well as their spouses, surviving spouses, and parents with certain needs or disabilities.', 
    link: 'https://www.va.gov/disability/compensation-rates/special-monthly-compensation-rates/' },
    { title: 'VA Form 21-8940', category: 'Disability Compensation', 
    description: 'A form used to increase compensation benefits if a veteran is deemed unemployable due to a disability.', 
    link: 'https://www.vba.va.gov/pubs/forms/vba-21-8940-are.pdf' },
    { title: 'Social Security Website - Disability Benefits | How You Qualify', category: 'Disability Compensation', 
    description: 'An outline of requirements needed to quality for Social Security Disability Insurance (SSDI) benefits.', 
    link: 'https://www.ssa.gov/benefits/disability/qualify.html' },
    { title: 'Social Security Credits', category: 'Disability Compensation', 
    description: 'An outline of the number of work/social security credits needed for disability benefits.', 
    link: 'https://www.ssa.gov/benefits/retirement/planner/credits.html#h3' },
    { title: 'Expedited Processing of Veteran\'s 100% Disability Claims', category: 'Disability Compensation', 
    description: 'States a variety of questions a veteran might have about expediting the disability claims process.', 
    link: 'https://www.ssa.gov/pubs/EN-05-10565.pdf' },
    { title: 'Combined Ratings Table.', category: 'Disability Compensation', 
    description: 'A table that can be used to quickly calculate a Veteran\'s level of disability.', 
    link: 'https://www.ecfr.gov/current/title-38/chapter-I/part-4/subpart-A/section-4.25' },
    
    


    { title: 'Buddy Letter Form (VA Form 21-10210)', category: 'Disability Compensation', 
    description: 'A form that can be filled out by someone has witnessed a negative impact to your life caused by a disability in circumstances where your military records are missing evidence or context regarding this information. Helpful for filling disability claims', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-10210-ARE.pdf' },
    { title: 'Intent to File Form (VA-Form 21-0966)', category: 'Disability Compensation', 
    description: 'A form for establishing your intent to file and effective date. Your effective date is critical because it is used to determine the date the Veteran gets paid from.', 
    link: 'https://www.vba.va.gov/pubs/forms/vba-21-0966-are.pdf' },
    { title: 'Veterans Transportation Service Locations', category: 'Misc.', 
    description: 'A state by state list of free transportation services available to veterans.', 
    link: 'https://www.va.gov/HEALTHBENEFITS/vtp/map.asp' },
    { title: 'Memorandum for Record (MFR) Form (VA Form 21-4138)', category: 'Disability Compensation', 
    description: 'A form that can be filled out after a Compensation and Pension Examination (C&P) in which you felt you had an unfair or bad examiner.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-4138-ARE.pdf' },
    { title: 'Filing for Aid and Attendance/Housebound Form (VA Form 21-2680)', category: 'Disability Compensation', 
    description: 'Form used to apply for individuals who are housebound are in need of aid and attendance so that they may get assistance in their daily living.', 
    link: 'https://www.vba.va.gov/pubs/forms/VBA-21-2680-ARE.pdf' },
    { title: 'Authorization To Disclose Information To The Department Of Veterans Affairs (VA Form 21-4142)', category: 'Disability Compensation', 
    description: 'This form is used to to give permission to obtain your personal information from a non-VA source like a private doctor or hospital. ', 
    link: 'https://www.vba.va.gov/pubs/forms/vba-21-4142-are.pdf' },
    { title: 'VA Site - Checking Claim Status', category: 'Disability Compensation', 
    description: 'The below link takes the user to the VA\'s site for checking the current stage or status of a filed claim. ', 
    link: 'https://www.va.gov/claim-or-appeal-status/' },
    { title: 'Veterans Business Outreach Center (VBOC) program', category: 'Education & Employment', 
    description: 'This program offers resources to veterans, service members, and military spouses who are interested in starting or growing a small business.', 
    link: 'https://www.sba.gov/local-assistance/resource-partners/veterans-business-outreach-center-vboc-program' },
    { title: 'Apply for Veteran Employment Through Technology Education Courses (VET TEC)', category: 'Education & Employment', 
    description: 'The application provided by the VA to apply to the VET TEC program, a program funded to help veterans learn technological skills.', 
    link: 'https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/apply-for-vettec-form-22-0994/introduction' },
    { title: 'Veterans\'s Employment and Training Service (VETS)', category: 'Education & Employment', 
    description: 'A resoure provided by the US Department of Labor to help veterans in the workplace.', 
    link: 'https://www.dol.gov/agencies/vets' },
<<<<<<< Updated upstream
    { title: 'Veteran Readiness and Employment (VR&E)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. A VA program that helps Veterans, Servicemembers, and certain eligible dependents attain employment.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vre/' },
    { title: 'VetSuccess on Campus (VSOC)', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. An explanation of a program that sets out to help make the transition from the military an easier process.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vsoc/' },
    { title: 'Yellow Ribbon Program', category: 'Education & Employment', 
    description: 'From r/VeteransBenefits. An explanation of the Yellow Ribbon Program, a program that helps cover the increased costs of non-resident tuition.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/yellow/' },
    { title: 'Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)', category: 'Health Care', 
    description: 'From r/VeteransBenefits. A comprehensive health care program in which the VA shares the cost of covered health care services and supplies with eligible beneficiaries. Requires applicant to fill out VA 10-10d and VA 10-7959C.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/champva/' },
    { title: 'Chapter 17 (Dishonorable Health Care)', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Covers possible benefits for veterans even if their service was deemed dishonorable.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/c17/' },
    { title: 'Community Care (Emergency and Urgent Care)', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Info for those Veterans who are unable to reasonably receive care at their local VA run medical facility.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/commcare/' },
    { title: 'Cross Talk - When the VBA and VHA Communicate', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Scenarios in which two seperate branches of the department of Veterans Affairs the Veterans Benefits Administration (VBA) and the Veterans Health Administration (VHA) might need to communicate.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/xtalk/' },
    { title: 'Dental Care', category: 'Health Care', 
    description: 'From r/VeteransBenefits. All information involving dental care services provided by the VA, free or paid, as well as eligibility for free dental services.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/dental/' },
    { title: 'Elderly & Long Term Care', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Programs designed to help the Veteran at their own home, home of their caretaker, residential, or nursing home facility.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/elderlt/' },
    { title: 'Foreign Medical Program', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Health care programs or services offered to veterans living or traveling in a foreign country.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/fmp/' },
    { title: 'Hearing', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Information about services offered to help with Veteran\'s hearing with VHA Audiology, a part of the VA\'s Rehabilitation and Prosthetic Services organization.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/hearing/' },
    { title: 'Registries', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Registries are an important tool used by medical researchers to identify disease trends in Veterans that share certain exposure events. This page discusses how to join registeries and how they can be used to help all veterans.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/registry/' },
    { title: 'Service Dogs', category: 'Health Care', 
    description: 'From r/VeteransBenefits. All information related to service dogs. Service dogs or guide dogs can be prescribed for a disabled veteran under 38 CFR 17.148 for the purpose of the Veteran being diagnosed as having a visual, hearing, or substantial mobility impairment.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/service/' },
    { title: 'TRICARE', category: 'Health Care', 
    description: 'From r/VeteransBenefits. A health insurance provider that can provide coverage for service-members and their families as well as certain Veterans and their families.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/tricare/' },  
    { title: 'U.S. Army Chemical or Biological Research Program Participants', category: 'Health Care', 
    description: 'From r/VeteransBenefits. This program allows certain Veterans who participated in Army Chemical or Biological Research Programs to get health care for conditions that developed directly due to their participation in these research programs.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/guineapig/' }, 
    { title: 'VA HEALTH CARE (Care At VA Run Facilities)', category: 'Health Care', 
    description: 'From r/VeteransBenefits. A complete guide to obtaining VA Healthcare.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/healthcare/' }, 
    { title: 'Vet Centers', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Discusses Vet Centers, a place made to provide counseling and help to service members, Veterans and their families, focusing more on community care than other VA services.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vetcenter/' }, 
    { title: 'Veteran Health Identification Card (VHIC)', category: 'Health Care', 
    description: 'From r/VeteransBenefits. How to obtain a VHIC and how it is used.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vhic/' }, 
    { title: 'Vision Care', category: 'Health Care', 
    description: 'From r/VeteransBenefits. Information related to obtaining vision care by the VA, discussing eligibility for any and all services offered.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/vision/' }, 
    { title: 'Weight-loss Program (MOVE!)', category: 'Health Care', 
    description: 'From r/VeteransBenefits. A weight loss program for veterans that works to encourage healthy eating behaviors, increase physical activity, promote even small weight losses.', 
    link: 'https://www.reddit.com/r/VeteransBenefits/wiki/move/' }, 

=======
    { title: 'Veteran Readiness and Employment (Chapter 31)', category: 'Education & Employment', 
    description: 'A program aimed to help veterans explore employment options and address education or training needs in cases where a veteran might have a service-connected disability that limits their ability to work or prevents them from working', 
    link: 'https://www.va.gov/careers-employment/vocational-rehabilitation/' },
    
>>>>>>> Stashed changes

  ];
  

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

  //Updates the resources in the array based on the currently selected and searched categories
  updateFilteredResources() {
    this.filteredResources = this.filterResources();
  }

  //Function used for the reset button to clear all filter categories
  resetCategories() {
    this.selectedCategory = '';
    this.updateFilteredResources();
  }

  //Search method to find if a resource is available from the search bar
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

  //Getter method used to determine if a given category is selected
  isCategorySelected(category: string) {
    return this.selectedCategory.includes(category) || this.selectedCategory.length === 0;
  }
}
