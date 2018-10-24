import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccueilComponent implements OnInit {

    public lottieConfig: Object;
    private anim: any;
    private animationSpeed = 1;

  constructor() {
    this.lottieConfig = {
      path: 'assets/json/creamNGanimation.json',
      autoplay: true,
      loop: false
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }

  ngOnInit() {
  }

}
