import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})

export class FaqComponent {
  searchInput: string = ''; // Property to hold the search input
  faqItems = [  // Define your FAQ items with unique IDs
    { id: 1, question: 'What is USVBN?', answer: '...' },
    { id: 2, question: 'How do I start?', answer: '...' },
    // Add more FAQ items with unique IDs
  ];

  toggleAnswer(answerId: string) {
    console.log(answerId)
  }

  searchQuestions() {
    console.log(this.searchInput.toLowerCase());
    const searchTerm = this.searchInput.toLowerCase();

    // Filter the FAQ items based on the search input
    const searchResults = this.faqItems.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
    );

    // Log the search results
    console.log('Search results:', searchResults);
  }
}
