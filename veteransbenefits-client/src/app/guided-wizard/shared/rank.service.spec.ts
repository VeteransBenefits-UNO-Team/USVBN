import { TestBed } from '@angular/core/testing';

import { RankService } from './rank.service';

describe('RankService', () => {
  let service: RankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all branches', () => {
    const branches = service.getBranches();
    expect(branches).toEqual([
      'Army',
      'Navy',
      'Air Force',
      'Marines',
      'Coast Guard',
    ]);
  });

  it('should return rank categories', () => {
    const categories = service.getRankCategories();
    expect(categories).toEqual(['Enlisted', 'Officer']);
  });

  it('should verify if a branch exists', () => {
    expect(service.hasBranch('Army')).toBeTrue();
    expect(service.hasBranch('Navy')).toBeTrue();
    expect(service.hasBranch('Nonexistent')).toBeFalse();
  });

  it('should return ranks for a specific branch and category', () => {
    let ranks = service.getRanks('Army', 'Enlisted');
    expect(ranks).toContain('Private');
    expect(ranks).toContain('Sergeant Major of the Army');

    ranks = service.getRanks('Navy', 'Officer');
    expect(ranks).toContain('Ensign');
    expect(ranks).toContain('Fleet Admiral');
  });

  it('should handle requests for ranks of an invalid branch or category', () => {
    let errorMessage = '';
    try {
      service.getRanks('InvalidBranch', 'Enlisted');
    } catch (error: any) {
      // Check if error is an instance of Error and has a message property
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
    expect(errorMessage).toBe('Invalid branch or category');

    errorMessage = ''; // reset the errorMessage
    try {
      service.getRanks('Army', 'InvalidCategory');
    } catch (error: any) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
    expect(errorMessage).toBe('Invalid branch or category');
  });
});
