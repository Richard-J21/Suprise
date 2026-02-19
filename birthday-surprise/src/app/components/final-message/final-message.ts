import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './final-message.html',
  styleUrls: ['./final-message.css']
})
export class FinalMessage {
  isEnvelopeOpened = false;
  showMessage = false;

  openEnvelope() {
    this.isEnvelopeOpened = true;
    // Wait for envelope animation to finish before showing the popup
    setTimeout(() => {
      this.showMessage = true;
    }, 1200);
  }
}