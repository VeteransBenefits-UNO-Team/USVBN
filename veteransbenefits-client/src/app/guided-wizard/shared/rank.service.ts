import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  private branches: string[] = [
    'Army',
    'Navy',
    'Air Force',
    'Marines',
    'Coast Guard',
  ];
  private rankCategories: string[] = ['Enlisted', 'Officer'];
  private ranks: { [key: string]: { [key: string]: string[] } } = {
    Army: {
      Enlisted: [
        'Private',
        'Private Second Class',
        'Private First Class',
        'Specialist',
        'Corporal',
        'Sergeant',
        'Staff Sergeant',
        'Sergeant First Class',
        'Master Sergeant',
        'First Sergeant',
        'Sergeant Major',
        'Command Sergeant Major',
        'Sergeant Major of the Army',
      ],
      Officer: [
        'Second Lieutenant',
        'First Lieutenant',
        'Captain',
        'Major',
        'Lieutenant Colonel',
        'Colonel',
        'Brigadier General',
        'Major General',
        'Lieutenant General',
        'General',
        'General of the Army',
      ],
    },
    Navy: {
      Enlisted: [
        'Seaman Recruit',
        'Seaman Apprentice',
        'Seaman',
        'Petty Officer Third Class',
        'Petty Officer Second Class',
        'Petty Officer First Class',
        'Chief Petty Officer',
        'Senior Chief Petty Officer',
        'Master Chief Petty Officer',
        'Command Master Chief Petty Officer',
        'Master Chief Petty Officer of the Navy',
      ],
      Officer: [
        'Ensign',
        'Lieutenant Junior Grade',
        'Lieutenant',
        'Lieutenant Commander',
        'Commander',
        'Captain',
        'Rear Admiral (lower half)',
        'Rear Admiral (upper half)',
        'Vice Admiral',
        'Admiral',
        'Fleet Admiral',
      ],
    },
    'Air Force': {
      Enlisted: [
        'Airman Basic',
        'Airman',
        'Airman First Class',
        'Senior Airman',
        'Staff Sergeant',
        'Technical Sergeant',
        'Master Sergeant',
        'Senior Master Sergeant',
        'Chief Master Sergeant',
        'Command Chief Master Sergeant',
        'Chief Master Sergeant of the Air Force',
      ],
      Officer: [
        'Second Lieutenant',
        'First Lieutenant',
        'Captain',
        'Major',
        'Lieutenant Colonel',
        'Colonel',
        'Brigadier General',
        'Major General',
        'Lieutenant General',
        'General',
        'General of the Air Force',
      ],
    },
    Marines: {
      Enlisted: [
        'Private',
        'Private First Class',
        'Lance Corporal',
        'Corporal',
        'Sergeant',
        'Staff Sergeant',
        'Gunnery Sergeant',
        'Master Sergeant',
        'First Sergeant',
        'Master Gunnery Sergeant',
        'Sergeant Major',
        'Sergeant Major of the Marine Corps',
      ],
      Officer: [
        'Second Lieutenant',
        'First Lieutenant',
        'Captain',
        'Major',
        'Lieutenant Colonel',
        'Colonel',
        'Brigadier General',
        'Major General',
        'Lieutenant General',
        'General',
      ],
    },
    'Coast Guard': {
      Enlisted: [
        'Seaman Recruit',
        'Seaman Apprentice',
        'Seaman',
        'Petty Officer Third Class',
        'Petty Officer Second Class',
        'Petty Officer First Class',
        'Chief Petty Officer',
        'Senior Chief Petty Officer',
        'Master Chief Petty Officer',
        'Command Master Chief',
        'Master Chief Petty Officer of the Coast Guard',
      ],
      Officer: [
        'Ensign',
        'Lieutenant Junior Grade',
        'Lieutenant',
        'Lieutenant Commander',
        'Commander',
        'Captain',
        'Rear Admiral (lower half)',
        'Rear Admiral (upper half)',
        'Vice Admiral',
        'Admiral',
      ],
    },
  };

  getBranches(): string[] {
    return this.branches;
  }

  getRankCategories(): string[] {
    return this.rankCategories;
  }

  hasBranch(branch: string): boolean {
    return this.ranks.hasOwnProperty(branch);
  }

  getRanks(branch: string, category: string): string[] {
    if (this.hasBranch(branch) && this.ranks[branch].hasOwnProperty(category)) {
      return this.ranks[branch][category];
    } else {
      throw new Error('Invalid branch or category');
    }
  }
}
