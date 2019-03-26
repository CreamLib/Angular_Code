import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[c3mModalOut]'
})
export class ModalDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
    const map = {};

    console.log('Directive');
    console.log(this.el.nativeElement);
    const nbEltPopin = this.el.nativeElement.parentElement;
    console.log('Nb enfants: ' + nbEltPopin);
    this.el.nativeElement.onkeydown = this.el.nativeElement.onkeyup = function(e) {
      e = e || event; // to deal with IE
      map[e.keyCode] = e.type === 'keydown';
      if (map[16] && map[9]) {
        // CTRL+SHIFT+A
        console.log('On essaie de remonter');
        this.el.nativeElement.focus();
      }
    };
    /* this.el.nativeElement.addEventListener("keydown", (event) => {
      if (event.defaultPrevented) {
        return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
      }
      console.log(event.key);
      }
      switch (event.key) {
        case "ArrowDown":
          console.log('ArrowDown');
          break;
        case "ArrowUp":
          // Faire quelque chose pour la touche "up arrow" pressée.
          break;
        case "ArrowLeft":
          // Faire quelque chose pour la touche "left arrow" pressée.
          break;
        case "ArrowRight":
          // Faire quelque chose pour la touche "right arrow" pressée.
          break;
        case "Enter":
          // Faire quelque chose pour les touches "enter" ou "return" pressées.
          break;
        case "Escape":
          // Faire quelque chose pour la touche "esc" pressée.
          break;
        default:
          return; // Quitter lorsque cela ne gère pas l'événement touche.
      }
      event.preventDefault();
    }); */
  }
}
