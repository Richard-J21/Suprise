import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-container">
      <!-- Background Decorations -->
      <div class="floating-hearts">
        <div class="heart" *ngFor="let i of [1,2,3,4,5,6,7,8]">❤️</div>
      </div>

      <!-- Content wrapper -->
      <div class="hero-content">
        <div class="text-group">
          <span class="main-headline">FOR MY BEST FRIEND</span>
          <h1 class="sub-message">To My Dearest... ✨</h1>
          <p class="instruction">The best things come from the heart. Are you ready?</p>
        </div>
        
        <!-- Gift Box pushed significantly down -->
        <div class="gift-wrapper" (click)="handleOpen()" [class.opened]="isOpening">
            <div class="gift-container">
                <div class="gift-lid">
                    <div class="lid-ribbon"></div>
                </div>
                
                <div class="surprise-heart">❤️</div>

                <div class="gift-body">
                    <div class="gift-ribbon-v"></div>
                    <div class="gift-ribbon-h"></div>
                </div>
            </div>
            <p class="hint">{{ isOpening ? 'Opening...' : 'Tap the gift to open' }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .landing-container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fffafa; /* Surprise Component Background */
      font-family: 'Poppins', sans-serif;
      overflow: hidden;
      position: relative;
    }

    .hero-content {
      text-align: center;
      z-index: 10;
      width: 90%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Shift text up to make room for the gift below */
    .text-group {
      margin-top: -100px; 
    }

    /* 1. Main Headline Spacing */
    .main-headline {
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      font-weight: 700;
      color: #800e13;
      display: block;
      line-height: 1;
      letter-spacing: -1px;
      margin-bottom: 40px; /* CREATED LARGE GAP HERE */
    }

    /* 2. Sub Message Spacing */
    .sub-message {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      color: #ad2831;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 30px; /* CREATED GAP HERE */
    }

    /* 3. Instruction Spacing */
    .instruction {
      color: #888;
      font-style: italic;
      font-size: 1rem;
      margin-bottom: 0;
    }

    /* 4. Gift Box Spacing - Pushed even lower */
    .gift-wrapper {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 150px; /* CREATED LARGE GAP ABOVE GIFT */
    }

    .gift-container {
      position: relative;
      width: 140px;
      height: 120px;
    }

    .gift-lid {
      width: 110%; height: 28px; 
      background: #ad2831; 
      position: absolute; top: 0; left: -5%; z-index: 5;
      border-radius: 5px;
      transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .gift-body {
      width: 100%; height: 95px; 
      background: #800e13; 
      position: absolute; bottom: 0; 
      border-radius: 0 0 10px 10px;
      z-index: 3;
      box-shadow: 0 20px 40px rgba(128, 14, 19, 0.25);
    }

    .gift-ribbon-v { width: 24px; height: 100%; background: #ffd700; position: absolute; left: 50%; transform: translateX(-50%); }
    .gift-ribbon-h { width: 100%; height: 18px; background: #ffd700; position: absolute; top: 40%; }

    .surprise-heart {
        position: absolute;
        top: 40%; left: 38%;
        font-size: 3rem;
        z-index: 2;
        opacity: 0;
        transition: all 0.6s ease;
    }

    /* Opened State */
    .opened .gift-lid {
        transform: translateY(-130px) rotate(-15deg);
        opacity: 0;
    }
    .opened .surprise-heart {
        opacity: 1;
        transform: translateY(-110px) scale(1.6);
    }

    .hint { 
      color: #800e13; 
      font-weight: 600; 
      font-size: 1rem;
      margin-top: 25px;
      animation: pulse 1.5s infinite; 
    }

    @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

    /* Background Hearts */
    .floating-hearts { position: absolute; width: 100%; height: 100%; top: 0; pointer-events: none; }
    .heart { position: absolute; bottom: -20px; font-size: 24px; animation: float 7s infinite ease-in; opacity: 0; }
    .heart:nth-child(1) { left: 15%; animation-delay: 0s; }
    .heart:nth-child(2) { left: 35%; animation-delay: 2s; }
    .heart:nth-child(3) { left: 55%; animation-delay: 4.5s; }
    .heart:nth-child(4) { left: 75%; animation-delay: 1s; }
    .heart:nth-child(5) { left: 90%; animation-delay: 3s; }

    @keyframes float { 
        0% { transform: translateY(0); opacity: 0; } 
        20% { opacity: 0.5; } 
        100% { transform: translateY(-100vh); opacity: 0; } 
    }

    /* Screen Adjustments */
    @media (max-width: 600px) {
      .main-headline { font-size: 3rem; margin-bottom: 25px; }
      .text-group { margin-top: -50px; }
      .gift-wrapper { margin-top: 100px; }
    }
  `]
})
export class HomeComponent {
  isOpening = false;

  constructor(private router: Router) {}

  handleOpen() {
    this.isOpening = true;
    setTimeout(() => {
      this.router.navigate(['/surprise']);
    }, 1000);
  }
}