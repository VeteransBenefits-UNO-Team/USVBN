import { Component, OnInit } from '@angular/core';
import { BenefitsDataService } from './shared/benefits-data.service';

@Component({
  selector: 'app-featured-articles',
  templateUrl: './featured-articles.component.html',
  styleUrls: ['./featured-articles.component.scss'],
})
export class FeaturedArticlesComponent implements OnInit {
  displayedColumns: string[] = ['category', 'description', 'notes'];
  expandedSections: { [key: number]: boolean } = {};
  groupedBenefitsData: {
    [key: number]: {
      overrideTitle?: string;
      benefits: Array<{ category: string; items: any[] }>;
    };
  } = {};
  percentages = this.benefitsDataService.percentages;
  categoryIcons = this.benefitsDataService.categoryIcons;

  constructor(private benefitsDataService: BenefitsDataService) {}

  ngOnInit(): void {
    this.percentages.forEach((percent) => {
      this.expandedSections[percent] = false;
      this.groupBenefitsData(percent);
    });
  }

  groupBenefitsData(percent: number): void {
    const benefitsEntry = this.benefitsDataService.benefitsData[percent];

    // Convert the object returned by groupCategories to an array
    const categoriesArray = Object.entries(
      this.groupCategories(benefitsEntry.benefits)
    ).map(([category, items]) => ({ category, items }));

    this.groupedBenefitsData[percent] = {
      overrideTitle: benefitsEntry.overrideTitle,
      benefits: categoriesArray,
    };
  }

  private groupCategories(benefits: any[]): { [category: string]: any[] } {
    return benefits.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});
  }

  toggleSectionExpansion(percent: number): void {
    this.expandedSections[percent] = !this.expandedSections[percent];
  }
}
