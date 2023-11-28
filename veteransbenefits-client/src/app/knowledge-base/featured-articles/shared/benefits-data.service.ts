import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BenefitsDataService {
  percentages = [0, 1, 10, 20, 30, 50, 60, 70, 100, 101, 102];
  categoryIcons: { [key: string]: string } = {
    Business: 'business',
    Death: 'airline_seat_flat',
    Employment: 'work',
    Financial: 'attach_money',
    'Life Insurance': 'local_florist',
    'Health Care': 'health_and_safety',
    Other: 'category',
    Hearing: 'hearing',
    Housing: 'house',
    Vision: 'visibility',
    Notes: 'notes',
    'Vets w/ Private Insurance': 'local_florist',
    Education: 'school',
    'Social Security': 'security',
    Travel: 'flight',
    Automobile: 'directions_car',
  };
  benefitsData: { [key: number]: { overrideTitle?: string; benefits: any[] } } =
    {
      0: {
        benefits: [
          {
            category: 'Business',
            description:
              'Service-Disabled Veteran-Owned Small Businesses program. Joining the disabled Veterans’ business program makes your business eligible to compete for the program’s set-aside contracts.',
            notes: '',
          },
          {
            category: 'Death',
            description:
              'Dependency indemnity compensation (DIC). If death is related to a service connected disability.',
            notes: '',
          },
          {
            category: 'Death',
            description:
              'Increased Burial and plot allowance if death is determined to be connected to military service.',
            notes: '',
          },
          {
            category: 'Employment',
            description:
              '10-Point Disability Preference (XP). Ten points are added to the passing examination score or rating.',
            notes: '',
          },
          {
            category: 'Financial',
            description:
              'VA clothing allowance - Yearly allowance to replace clothing permanently damaged by prosthetic/orthopedic devices or skin medicine. The device or skin medicine MUST be prescribed to treat a service connected disability. It is possible to be granted more than one allowance.',
            notes: '',
          },
          {
            category: 'Financial',
            description:
              'VA travel pay via the Beneficiary Travel program - pays Veterans back for mileage and other travel expenses to and from approved health care appointments. For service connected disabilities only.',
            notes:
              'This DOES include appointments made via the Community care program. Veterans who are low-income may qualify for travel pay even for appointments for non service connected disabilities.',
          },
          {
            category: 'Life Insurance',
            description: 'Veterans Affairs Life Insurance (VALife)',
            notes:
              'Must be younger than 81, unless you are within 2 years of a grant of a NEW service connected disability, that was applied for before turning 81.',
          },
          {
            category: 'Health Care',
            description:
              'Each disability that is rated at least 0% (service connected) entitles the Veteran to free treatment for that disability through the VA. This DOES include medications for those service connected conditions.',
            notes:
              'Non-compensable service connected Veterans rated 0 percent, whose annual income and/ or net worth are NOT greater than VA financial thresholds.',
          },
          {
            category: 'Health Care',
            description:
              'Priority group 5 or 8 (Sub-priority E) for VA health care.',
            notes:
              'If the Veteran is rated at the non-compensable 0% service-connected level and whose annual income and/ or net worth are IS greater than VA financial thresholds.',
          },
          {
            category: 'Health Care',
            description:
              'Foreign Medical Program (FMP) - VA will pay for health care services, medications, and durable medical equipment for service connected conditions. For Veterans living or traveling abroad.',
            notes: '',
          },
          {
            category: 'Other',
            description:
              'Free lifetime access to National parks & Federal recreational lands via the America the Beautiful - National Parks & Federal Recreational Lands Access Pass. The pass also grants other benefits such as Discounts on various services such as tours and camp sites.',
            notes:
              'Veterans without a service connected disability may access National Parks for Free - but they do NOT get the aforementioned discounts.',
          },
          {
            category: 'Other',
            description:
              'Veterans with a service connected disability that results in them being unable to have biological children or requires them to use fertility treatments are eligible to be reimbursed $2,000 per child adopted.',
            notes: '',
          },
          {
            category: 'Other',
            description:
              'Veterans Health Identification Card (VHIC) with "service connected" written on it. This grants the Veteran access to military installations, commissary, exchange and MWR retail privileges.',
            notes:
              'The Veteran MUST get a visitor pass to gain base access at certain bases!',
          },
        ],
      },
      // 0% (Paid at the 10% rate)
      1: {
        overrideTitle: '0% (paid at 10% rate) Benefits',
        benefits: [
          {
            category: 'Employment',
            description:
              '10-Point Compensable Disability Preference (CP) Ten points are added to the passing examination score or rating.',
          },
          {
            category: 'Health Care',
            description: 'Priority group 6 for VA health care.',
          },
          {
            category: 'Hearing',
            description:
              '[Free hearing aids and associated components.](https://www.reddit.com/r/VeteransBenefits/w/Hearing)',
          },
          {
            category: 'Housing',
            description:
              '[Exemption from paying the funding fee for VA loans.](https://www.benefits.va.gov/HOMELOANS/purchaseco_loan_fee.asp)',
          },
          {
            category: 'Vision',
            description:
              '[Free basic eyeglasses from the VA.](https://www.reddit.com/r/VeteransBenefits/w/Vision)',
          },
          {
            category: 'Notes',
            description:
              'In some instances there are individuals who have separate and more than two zero percent service connected disabilities who are paid at the minimum 10 percent [(38 CFR 3.324)](https://www.law.cornell.edu/cfr/text/38/3.324)',
          },
        ],
      },
      10: {
        benefits: [
          {
            category: 'Employment',
            description:
              'Eligibility for [Veteran Readiness and Employment (formerly called Vocational Rehabilitation and Employment (VR&E)](https://www.reddit.com/r/VeteransBenefits/w/vre) if the Veteran has a SERIOUS employment handicap and did NOT receive a dishonorable discharge.',
            notes: '',
          },
          {
            category: 'Financial',
            description:
              '[Combat-Related Special Compensation (CRSC)](https://www.reddit.com/r/VeteransBenefits/w/medboard/#wiki_combat-related_special_compensation_.28crsc.29) A tax free entitlement that is be paid each month in addition to any retiree pay.',
            notes: '',
          },
          {
            category: 'Health Care',
            description: 'Priority group 3 for VA health care.',
            notes: '',
          },
          {
            category: 'Health Care',
            description:
              'Free [VA health care](https://www.reddit.com/r/VeteransBenefits/w/Healthcare) and [Community Care](https://www.reddit.com/r/VeteransBenefits/w/CommCare) for both service AND non service connected conditions (within the USA and its territories).',
            notes:
              "Non service connected medications and residential forms of [long term care](https://www.reddit.com/r/VeteransBenefits/w/elderlt) are NOT free! You'll owe a [small copay](https://www.va.gov/health-care/copay-rates/). Additionally, dental is unavailable for those without a dental service connected disability or meet other [eligibility factors.](https://www.reddit.com/r/VeteransBenefits/w/dental)",
          },
          {
            category: 'Vets w/ Private Insurance',
            description:
              'By law the VA is supposed to bill your insurance for any treatment that is NOT service connected. However, you the Veteran being 10% owe nothing to EITHER your insurance or the VA!',
            notes: '',
          },
          {
            category: 'Vets w/ Private Insurance',
            description:
              'The benefit of giving the VA your private insurance information is that anything the VA bills them will go towards lowering your yearly out of pocket limit on your insurance!',
            notes: '',
          },
          {
            category: 'Vets w/ Private Insurance',
            description:
              'If you are being billed by either the VA or your private insurance you need to contact them directly.',
            notes: '',
          },
        ],
      },
      20: {
        benefits: [
          {
            category: 'Employment',
            description:
              'Eligibility for [VR&E](https://www.reddit.com/r/VeteransBenefits/w/vre) if the Veteran has an employment handicap and did NOT receive a dishonorable discharge.',
            notes: '',
          },
        ],
      },
      30: {
        benefits: [
          {
            category: 'Employment',
            description:
              '10-Point 30 Percent Compensable Disability Preference (CPS) Ten points are added to the passing examination score or rating.',
            notes: '',
          },
          {
            category: 'Employment',
            description:
              '[Disabled Veteran Leave](https://www.opm.gov/policy-data-oversight/pay-leave/leave-administration/fact-sheets/disabled-veteran-leave/) - Veterans working for the Federal Government are eligible for up to 104 hours of free leave. To be used when getting treatment/care for your service connected disabilities. Veterans have 1 year from the start of their employment to use this leave or when the Veteran establishes at least a 30% rating. Whichever is later, if hired after November 4, 2016.',
            notes: '',
          },
          {
            category: 'Financial',
            description:
              'Can add [eligible dependents](https://www.benefits.va.gov/compensation/add-dependents.asp) to their compensation benefits to get a higher payment, also known as a “benefit rate.”',
            notes: '',
          },
          {
            category: 'Financial',
            description:
              '[VA Travel Pay via Beneficiary Travel Program](https://eauth.va.gov/accessva) - pays Veterans back for mileage and other travel expenses to and from approved health care appointments.',
            notes: '',
          },
          {
            category: 'Health Care',
            description: 'Priority group 2 for VA health care.',
            notes: '',
          },
        ],
      },
      50: {
        benefits: [
          {
            category: 'Financial',
            description:
              '[Concurrent Retirement and Disability Pay (CRDP)](https://www.reddit.com/r/VeteransBenefits/w/medboard/#wiki_concurrent_retirement_and_disability_pay_.28crdp.29) Ability to draw military pension and VA disability at the same time.',
            notes: '',
          },
          {
            category: 'Health Care',
            description: 'Priority group 1 for VA health care.',
            notes: '',
          },
          {
            category: 'Health Care',
            description:
              'Free medications for non service connected disabilities.',
            notes: '',
          },
        ],
      },
      60: {
        benefits: [
          {
            category: 'Financial',
            description:
              '[VA Individual Unemployability](https://www.reddit.com/r/VeteransBenefits/w/IU) - Veteran must be have at least one SINGLE service-connected disability rated at 60% and be unable to hold down a steady job that supports you financially (known as substantially gainful employment) because of your service-connected disability. Odd jobs (marginal employment) don’t count.',
            notes:
              'In certain cases— for example, if you need to be in the hospital often. The Veteran may qualify at a lower disability rating.',
          },
        ],
      },
      70: {
        benefits: [
          {
            category: 'Financial',
            description:
              '[VA Individual Unemployability](https://www.reddit.com/r/VeteransBenefits/w/IU) - 2 or more service-connected disabilities with at least 1 rated at 40% or more disabling and a combined rating of 70% or more and be unable to hold down a steady job that supports you financially (known as substantially gainful employment) because of your service-connected disability. Odd jobs (marginal employment) don’t count.',
            notes: '',
          },
          {
            category: 'Health Care',
            description:
              '[Program of Comprehensive Assistance for Family Caregivers (PCAFC)](https://www.reddit.com/r/VeteransBenefits/w/elderlt/#wiki_program_of_comprehensive_assistance_for_family_caregivers_.28pcafc.29)',
            notes: '',
          },
          {
            category: 'Housing',
            description: 'Basic eligibility for VA nursing homes.',
            notes:
              'Each of the VA nursing home programs has admission and eligibility criteria specific to the separate program. Nursing home care is available for Veterans who are enrolled in the VA health system who need nursing home care for service-connected disability, and Veterans who have a 70 percent or greater service-connected disability.',
          },
          {
            category: 'Housing',
            description: '',
            notes:
              "VA-provided nursing home care for all other honorably discharged Veterans is based on available resources. Eligibility for Veterans without service connected disabilities is highly dependent upon their household income, i.e. countable income after medical expenses can generally not exceed the maximum annual rate of a [Veteran's Pension](https://www.reddit.com/r/VeteransBenefits/w/Pension) payable to a Veteran in need of regular [aid and attendance](https://www.reddit.com/r/VeteransBenefits/w/AA) ($22,939 for a Veteran without dependents and $27,195 for a Veteran with one dependent).",
          },
        ],
      },
      100: {
        overrideTitle: '100% or TDIU Benefits',
        benefits: [
          {
            category: 'Death',
            description:
              '[Dependency Indemnity Compensation (DIC)](https://www.va.gov/disability/dependency-indemnity-compensation/). Death need not be related to a service connected disability if additional conditions are met.',
            notes:
              'a) receiving 100% or TDIU for at least 10 years prior to death. b) discharged with a rating of 100% or TDIU and held that rating for at least five years prior to death. c) receiving 100% or TDIU for at least one year prior to death if Veteran was a former POW.',
          },
          {
            category: 'Education',
            description:
              'Discharge of Federal student loans via the [Total and Permanent Disability (TPD) Discharge Program](https://studentaid.gov/manage-loans/forgiveness-cancellation/disability-discharge).',
            notes:
              'The Department of Education has a different definitions of what P&T is than the VA. 34 CFR § 685.213 - [Total and Permanent Disability Discharge.](https://www.law.cornell.edu/cfr/text/34/685.213)',
          },
          {
            category: 'Education',
            description:
              'Nomination of children to a Service Academy: [Air Force](https://www.academyadmissions.com/apply/nomination/), [Army (West Point)](https://www.westpoint.edu/admissions/prospective-cadets/nomination-information), [Navy](https://www.usna.edu/Admissions/Apply/Children-of-POW-MIA-Deceased-Disabled-Vets.php).',
            notes: '',
          },
          {
            category: 'Health Care',
            description:
              'Free dental care through the VA (within the USA and its territories).',
            notes: '',
          },
          {
            category: 'Other',
            description:
              '[Additional MWR Access](https://www.militaryonesource.mil/recreation-travel-shopping/recreation/fun-and-fitness/morale-welfare-and-recreation-programs-and-eligibility) - Fitness, aquatics, and sports program, as well as libraries.',
            notes: '',
          },
          {
            category: 'Other',
            description:
              '[Disabled American Veteran 100% ID (DAV ID)](https://www.reddit.com/r/VeteransBenefits/w/dav)',
            notes: 'Easier access to military bases.',
          },
          {
            category: 'Other',
            description: '',
            notes: 'The commissary credit/debit card user fee is NOT charged.',
          },
          {
            category: 'Other',
            description: '',
            notes:
              'A Veteran who is eligible for the DAV ID can have ID cards made for their dependents.',
          },
          {
            category: 'Other',
            description: '',
            notes:
              'If the Veteran wants to bring a guest/someone without a DoD ID onto base, they MUST get them a visitors passat certain bases!',
          },
        ],
      },
      101: {
        overrideTitle: '100% P&T or TDIU P&T Benefits',
        benefits: [
          {
            category: 'Education',
            description:
              'Entitlement to Chapter 35 [Dependents Educational Assistance (DEA)](https://www.reddit.com/r/VeteransBenefits/w/survivorbenefits/#wiki_chapter_35_.28dependents.2019_educational_assistance_-_dea.29.)',
            notes:
              '[Some states](https://www.reddit.com/r/VeteransBenefits/w/free_tuition) offer Veterans and their dependents free tuition. Some are based upon having a certain disability percentage or other requirements.',
          },
          {
            category: 'Education',
            description: '',
            notes:
              '[Some states](https://www.reddit.com/r/VeteransBenefits/w/exempt) have been gracious enough to grant Veterans either a partial or full exemption from their property taxes. This can end up saving Veterans thousands of dollars a year!',
          },
          {
            category: 'Health Care',
            description:
              "Eligibility for Veteran's dependents to enroll in [CHAMPVA.](https://www.reddit.com/r/VeteransBenefits/w/CHAMPVA)",
            notes: '',
          },
          {
            category: 'Health Care',
            description:
              'During a medical emergency Veteran may freely use non-VA emergency rooms for any condition. Veteran does needs to submit a claim within 2 years of the event to the VA for reimbursement.',
            notes: '',
          },
          {
            category: 'Social Security',
            description:
              '[Expedited Processing of Veteran’s disability claims.](https://www.ssa.gov/pubs/EN-05-10565.pdf)',
            notes: '',
          },
          {
            category: 'Travel',
            description:
              "[Free Air Travel on Space-A](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/451513p.PDF?ver=2018-11-13-101502-967) - Allows travel in the Continental United States or directly between the CONUS and Alaska, Hawaii, Puerto Rico, the U.S. Virgin Islands, Guam, and American Samoa (Guam and American Samoa travelers may transit Hawaii or Alaska); or traveling within Alaska, Hawaii, Puerto Rico, or the U.S. Virgin Islands on flights operated by Air Mobility Command. This benefit CAN be used by the Veteran's dependents so long as the Veteran accompanies them.",
            notes: '',
          },
        ],
      },
      102: {
        overrideTitle: 'Miscellaneous Benefits',
        benefits: [
          {
            category: 'Automobile',
            description:
              '[VA Automobile Allowance and Adaptive Equipment](https://www.va.gov/disability/eligibility/special-claims/automobile-allowance-adaptive-equipment/) - A one time lump sum of over $21,000 to help you buy a specially equipped vehicle.',
            notes: '',
          },
          {
            category: 'Housing',
            description:
              '[Home Improvement and Structural Alterations Program (HISA)](https://www.prosthetics.va.gov/psas/hisa2.asp) - Up to $6,800 to make medically necessary improvements and structural alterations to Veterans primary residence.',
            notes: '',
          },
          {
            category: 'Housing',
            description:
              '[Specially Adapted Housing grant (SAH)](https://www.va.gov/housing-assistance/disability-housing-grants/) - Up to $~90,000 to buy, build, or change your permanent home (a home you plan to live in for a long time). Grant may be used up to 3 times.',
            notes: '',
          },
          {
            category: 'Housing',
            description:
              '[Special Home Adaptation (SHA) Grant](https://www.va.gov/housing-assistance/disability-housing-grants/) - ~$18,000 to buy, build, or change your permanent home (a home you plan to live in for a long time). Grant may be used up to 3 times.',
            notes: '',
          },
          {
            category: 'Housing',
            description:
              "[Temporary Residence Adaptation (TRA) Grant](https://www.va.gov/housing-assistance/disability-housing-grants/) - Are living temporarily in a family member’s home that needs changes to meet your needs. (To use a TRA grant, you don't have to own the house).",
            notes: '',
          },
        ],
      },
    };

  constructor() {}
}
