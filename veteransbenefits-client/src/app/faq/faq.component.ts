import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})

export class FaqComponent {
  // Keep track of the visibility of answers
  searchInput: string = ''; // Property to hold the search input
  answerVisibility: { [key: string]: boolean } = {};

  questions: Array<{ id: string, question: string, answer: string }> = [
    { id: '0', question: 'What is USVBN?', 
      answer: 'USVBN stands for United States Veterans Benefits. This site is all about America\'s military veteran and their Department of Veterans Affairs (The VA) benefits. We may also be able to help you with Social Security benefit questions.'},
    { id: '1', question: 'Where should I start?', 
      answer: 'If you\'re new to the website, we highly recommend starting with our questionnaire to help give you an idea of what forms and documents might be helpful for you. If you have specific questions or items you\'re looking for, we suggest looking in the FAQ category and resources page'},
  ];   

  filteredQuestions: any[] = this.questions;

  getAnswerDescription(answerKey: string): string {
    const question = this.filteredQuestions.find(item => item.id === answerKey);
    console.log('answer text is :', question.answer);
    return question.answer;
  }

  getQuestionText(answerKey: string): string {
    const faqItem = this.filteredQuestions.find(item => item.id === answerKey);
    console.log('Question text is :', faqItem.question);
    return faqItem.question;
  }

  // Function to check if an answer is visible
  isAnswerVisible(answerKey: string): boolean {
    return this.answerVisibility[answerKey] || false;
  }

  toggleAnswer(answerId: string) {
    this.answerVisibility[answerId] = !this.answerVisibility[answerId];
    if (this.answerVisibility[answerId]) {
      console.log("Answer toggled");
    } else {
      console.log("Hidden");
    }
  }

  searchQuestions() {
    console.log(this.searchInput.toLowerCase());
    const searchTerm = this.searchInput.toLowerCase();

    // Filter the resource items based on the search input
    const searchResults = this.questions.filter(question =>
      question.question.toLowerCase().includes(searchTerm) ||
      question.answer.toLowerCase().includes(searchTerm)
    );
    this.filteredQuestions = searchResults;
  }
}
