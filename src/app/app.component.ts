import { Component, Input, AfterViewChecked, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'app';

  @ViewChild(HeaderComponent) header: HeaderComponent;

  constructor(private http: Http) { }

  // Array of all items to be paged
  private allItems: string;

  // Initialise Code-Prettify
  PR = window['PR'];

// Write snippets into comp pages
public codeSnippets(subComp) {
  const compBlock = document.querySelectorAll('.descriptionComponent');
  const compB = Array.prototype.slice.call(compBlock);
  const mainFolder = compB[0].getAttribute('id');
  let file2Read, tempo;
  const charArray = ['<', '>', '{', '}', '\'', ' & ', '\'', '\`'];
  const entArray = ['&lt;', '&gt;', '&#123;', '&#125;', '&#34;', '&amp;', '&apos;', '&#96;'];

  for (let i = 0; i < compB.length; i++) {
    const compBlockId = compB[i].getAttribute('id');

    /* Find proper block to write to */
    const toWrite2 = compB[i].querySelectorAll('c3m-tabs.snippets c3m-tab');

    for (let z = 0; z < toWrite2.length; z++) {
      tempo = toWrite2[z];

      if (tempo.getAttribute('tabTitle') === 'HTML') {
        let output = tempo.querySelector('div.content');

        output.insertAdjacentHTML('beforeend', '<div id=\"' + compBlockId + '-HTML' + '\"></div>');
        output = document.getElementById(compBlockId + '-HTML');

        file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.html';
        this.http.get(file2Read)
          .map((response: Response) => response.text())
          .subscribe(data => {
            for (let y = 0; y < charArray.length; y++) {
              const pp = new RegExp(charArray[y], 'g');
              data = data.replace(pp, entArray[y]);
            }
            if (data !== '') {
              output.innerHTML = output.innerHTML + '<p class=\"pre-code\">For <strong>' + compBlockId + '.component.html</strong></p><div class=\"code\"><!--?prettify lang=html linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>';
            }
          });
          if (subComp) {
            file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.html';
            this.http.get(file2Read)
              .map((response: Response) => response.text())
              .subscribe(data => {
                for (let y = 0; y < charArray.length; y++) {
                  const pp = new RegExp(charArray[y], 'g');
                  data = data.replace(pp, entArray[y]);
                }
                if (data !== '') {
                  output.insertAdjacentHTML('beforeend', '<p class=\"pre-code\">For <strong>' + subComp + '.component.html</strong></p><div class=\"code\"><!--?prettify lang=html linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>');
                }
              });
          }
      } else if (tempo.getAttribute('tabTitle') === 'CSS') {
        let output = tempo.querySelector('div.content');

        output.insertAdjacentHTML('beforeend', '<div id=\"' + compBlockId + '-CSS' + '\"></div>');
        output = document.getElementById(compBlockId + '-CSS');

        file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.css';
        this.http.get(file2Read)
          .map((response: Response) => response.text())
          .subscribe(data => {
            for (let y = 0; y < charArray.length; y++) {
              const pp = new RegExp(charArray[y], 'g');
              data = data.replace(pp, entArray[y]);
            }
            if (data !== '') {
              output.innerHTML = output.innerHTML + '<p class=\"pre-code\">For <strong>' + compBlockId + '.component.css</strong></p><div class=\"code\"><!--?prettify lang=css linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>';
            }
          });
          if (subComp) {
            file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.css';
            this.http.get(file2Read)
              .map((response: Response) => response.text())
              .subscribe(data => {
                for (let y = 0; y < charArray.length; y++) {
                  const pp = new RegExp(charArray[y], 'g');
                  data = data.replace(pp, entArray[y]);
                }
                if (data !== '') {
                  output.insertAdjacentHTML('beforeend', '<p class=\"pre-code\">For <strong>' + subComp + '.component.css</strong></p><div class=\"code\"><!--?prettify lang=css linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>');
                }
              });
          }
      } else {
        let output = tempo.querySelector('div.content');

        output.insertAdjacentHTML('beforeend', '<div id=\"' + compBlockId + '-TS' + '\"></div>');
        output = document.getElementById(compBlockId + '-TS');

        file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + compBlockId + '.component.ts';
        this.http.get(file2Read)
          .map((response: Response) => response.text())
          .subscribe(data => {
            for (let y = 0; y < charArray.length; y++) {
              const pp = new RegExp(charArray[y], 'g');
              data = data.replace(pp, entArray[y]);
            }
            if (data !== '') {
              output.innerHTML = output.innerHTML + '<p class=\"pre-code\">For <strong>' + compBlockId + '.component.ts</strong></p><div class=\"code\"><!--?prettify lang=js linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>';
            }
          });
          if (subComp) {
            file2Read = 'app/main/' + mainFolder + '-page/' + compBlockId + '/' + subComp + '/' + subComp + '.component.ts';
            this.http.get(file2Read)
              .map((response: Response) => response.text())
              .subscribe(data => {
                for (let y = 0; y < charArray.length; y++) {
                  const pp = new RegExp(charArray[y], 'g');
                  data = data.replace(pp, entArray[y]);
                }
                if (data !== '') {
                  output.insertAdjacentHTML('beforeend', '<p class=\"pre-code\">For <strong>' + subComp + '.component.ts</strong></p><div class=\"code\"><!--?prettify lang=js linenums=true?--><pre class=\"prettyprint linenums\">' + data + '</pre></div>');
                }
              });
          }
      }
    }
  }
}



 // Function create random ID for Accessibility
 public randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

  // After View Checked
  public ngAfterViewChecked() {
      // Launch Code-Prettify
      this.PR.prettyPrint();
  }


  public CallToggleMenuBurger() {
    this.header.ToggleMenuBurgerMain();
  }

}
