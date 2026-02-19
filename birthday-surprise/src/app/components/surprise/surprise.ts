import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surprise.html',
  styleUrls: ['./surprise.css']
})
export class SurpriseComponent {
  
  // Logic to control the modal
  isModalOpen = false;
  modalData = { image: '', title: '', desc: '' };

  constructor(private router: Router) {}

  // Function called by the HTML click
  openPopup(imagePath: string, titleText: string, descriptionText: string) {
    this.modalData = {
      image: imagePath,
      title: titleText,
      desc: descriptionText
    };
    this.isModalOpen = true;
  }

  closePopup() {
    this.isModalOpen = false;
  }

  goToPlaylist() {
    this.router.navigate(['/playlist']);
  }
}