import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BenefitsDataService {
  percentages = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  categoryIcons: { [key: string]: string } = {
    Business: 'business',
    Death: 'airline_seat_flat',
    Employment: 'work',
    Financial: 'attach_money',
    'Life Insurance': 'local_florist',
    'Health Care': 'health_and_safety',
    Other: 'category',
  };
  benefitsData: { [key: number]: any[] } = {
    0: [
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
  };

  constructor() {}
}
