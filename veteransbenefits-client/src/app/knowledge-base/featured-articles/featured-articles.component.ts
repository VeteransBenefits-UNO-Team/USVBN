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
  groupedBenefitsData: { [key: number]: { [category: string]: any[] } } = {};
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
    const benefits = this.benefitsDataService.benefitsData[percent] || [];
    this.groupedBenefitsData[percent] = benefits.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});
  }

  toggleSectionExpansion(percent: number): void {
    this.expandedSections[percent] = !this.expandedSections[percent];
  }
}
