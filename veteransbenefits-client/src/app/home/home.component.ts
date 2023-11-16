import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getFaq() {
    return this.router.navigateByUrl('/faq');
  }

  ngAfterViewInit(): void {
    this.slideshow();
  }

  slideshow() {
    let index: number = 0;
    displayImages();

    function displayImages() {
      let i: number;
      const images: HTMLCollectionOf<Element> = document.getElementsByClassName('image');

      for (i = 0; i < images.length; i++) {
        const image = images[i] as HTMLElement;
        image.style.display = 'none';
      }

      index++;

      if (index > images.length) {
        index = 1;
      }

      const currentImage = images[index - 1] as HTMLElement;
      currentImage.style.display = 'block';

      setTimeout(displayImages, 10000);
    }
  }
}
