import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  menuMobile = false;
  mediumRes = '1000px';

  /* Action button burger */
  public ToggleMenuBurger() {
    if (this.menuMobile) {
      this.menuMobile = false;
    } else if (!this.menuMobile) {
      this.menuMobile = true;
    }
  }

  public ToggleMenuBurgerMain() {
    if (this.menuMobile) {
      this.menuMobile = false;
    }
  }
}
