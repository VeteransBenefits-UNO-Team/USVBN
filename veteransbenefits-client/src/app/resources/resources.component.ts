import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  searchInput: string = ''; // Property to hold the search input
  resourceItems = [  // Define your resource items with unique IDs
    { id: 1, question: 'What is USVBN?', answer: '...' },
    { id: 2, question: 'How do I start?', answer: '...' },
    // Add more resource items with unique IDs
  ];

  searchQuestions() {
    console.log(this.searchInput.toLowerCase());
    const searchTerm = this.searchInput.toLowerCase();

    // Filter the resource items based on the search input
    const searchResults = this.resourceItems.filter(resource =>
      resource.question.toLowerCase().includes(searchTerm) ||
      resource.answer.toLowerCase().includes(searchTerm)
    );
  }
}
