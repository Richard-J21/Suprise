import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './playlist.html',
  styleUrls: ['./playlist.css']
})
export class PlaylistComponent {
  songs = [
    { 
      title: 'Aval Ulaghazhagi', 
      movie: 'Lesa Lesa', 
      fullLink: 'https://www.youtube.com/watch?v=xlWTc9Ac3gA&list=RDxlWTc9Ac3gA&start_radio=1', 
      thumb: 'assets/lesa lesa.jpeg' 
    },
    { 
      title: 'Pirai Thedum Iravlie', 
      movie: 'Mayakkam Enna', 
      fullLink: 'https://www.youtube.com/watch?v=6B2jvf81LxE&list=RD6B2jvf81LxE&start_radio=1', 
      thumb: 'assets/mayakam enna.jpeg' 
    },
    { 
      title: 'Nenjai Poo Pol', 
      movie: 'Minnale', 
      fullLink: 'https://www.youtube.com/watch?v=htse-TJ4LNA&list=RDhtse-TJ4LNA&start_radio=1', 
      thumb: 'assets/nenjai poopol.jpeg' 
    },
    { 
      title: 'Ennodu Vaa Vaa', 
      movie: 'Neethaane En Ponvasantham', 
      fullLink: 'https://www.youtube.com/watch?v=QCGBu6ubU-o&list=RDQCGBu6ubU-o&start_radio=1', 
      thumb: 'assets/neethane.jpeg' 
    },
    { 
      title: 'Naan Ini Kaatril', 
      movie: 'Yaakkai', 
      fullLink: 'https://www.youtube.com/watch?v=YNCmE4SWBy8&list=RDYNCmE4SWBy8&start_radio=1', 
      thumb: 'assets/naan ini.jpg' 
    },
    { 
      title: 'Annul Maelae', 
      movie: 'Vaaranam Aayiram', 
      fullLink: 'https://www.youtube.com/watch?v=eG5Zx7qq2C4&list=RDeG5Zx7qq2C4&start_radio=1', 
      thumb: 'assets/vr.jpg' 
    },
    { 
      title: 'Eppadi Vanthaayo', 
      movie: 'Aaromaley', 
      fullLink: 'https://www.youtube.com/watch?v=r3oAMDsC-8Y&list=RDr3oAMDsC-8Y&start_radio=1', 
      thumb: 'assets/epd.jpg' 
    },
    { 
      title: 'Usuraiya Tholaichaen', 
      movie: 'Stephen Zechariah', 
      fullLink: 'https://www.youtube.com/watch?v=auCAzRGAJbM&list=RDauCAzRGAJbM&start_radio=1', 
      thumb: 'assets/usurey tholachen.jpg' 
    },
    { 
      title: 'Manasula Soora Kaathey', 
      movie: 'Cuckoo', 
      fullLink: 'https://www.youtube.com/watch?v=xLo_94VOHoE&list=RDxLo_94VOHoE&start_radio=1', 
      thumb: 'assets/cuckoo.jpg' 
    },
    { 
      title: 'Oru Paadhi Kadhavu', 
      movie: 'Thaandavam', 
      fullLink: 'https://www.youtube.com/watch?v=Fa0KUD33m14&list=RDFa0KUD33m14&start_radio=1', 
      thumb: 'assets/thandavam.jpg' 
    },
    {
      title: 'Gulmohar Malare', 
      movie: 'Manjunu', 
      fullLink: 'https://www.youtube.com/watch?v=8_iJA6R9_hg&list=RD8_iJA6R9_hg&start_radio=1', 
      thumb: 'assets/malare.jpeg' 
    },
    {
      title: 'Ivan Yaaro', 
      movie: 'Minnale', 
      fullLink: 'https://www.youtube.com/watch?v=AStAgQLeBeo&list=RDAStAgQLeBeo&start_radio=1', 
      thumb: 'assets/ivan.jpeg' 
    },
     
  ];

  goBack() { window.history.back(); }
}