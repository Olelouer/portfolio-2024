import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private isAnimating: Boolean = false;
  constructor() {}

  reverseAnimation(array: Array<string>, element: ElementRef): void {
    this.isAnimating;

    // Check if the animation is currently active and prevent it from re running
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;

    // Set animation index
    let startIndex = 0;
    let endIndex = array.length - 1;
    // Set the length the interval time regarding the number of items in the array set to 300ms animation
    let intervalTime = 300 / array.length;
    // Initialize the first iteration
    let currentIteration = 0;

    const runAnimation = () => {
      let interval = setInterval(() => {
        let temp = array[startIndex];
        array[startIndex] = array[endIndex];
        array[endIndex] = temp;

        startIndex++;
        endIndex--;

        element.nativeElement.innerHTML = array.join('');

        if (startIndex >= endIndex) {
          // CLear the interval
          clearInterval(interval);

          // Run the animation a second time
          if (currentIteration < 1) {
            //Reinitialize the indexes
            startIndex = 0;
            endIndex = array.length - 1;
            currentIteration++;
            runAnimation();
          } else {
            // Set the animation back to false
            this.isAnimating = false;
          }
        }
      }, intervalTime);
    };

    // Run the animation
    runAnimation();
  }
}
