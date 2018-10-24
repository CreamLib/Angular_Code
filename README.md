![Logo](https://creamng.github.io/Library/assets/img/creamNG-logo.svg)

**UI components for Angular**

SEE DEMO : https://creamng.github.io/Library/

![Npm](https://camo.githubusercontent.com/3cb4eb3c991f38eddc8092d7d9c8c5b5d8888a33/68747470733a2f2f62616467652e667572792e696f2f6a732f253430616e67756c6172253246636f72652e737667)
![build](https://camo.githubusercontent.com/8d227cc53b74107a9721d592157e02723beb43a9/68747470733a2f2f7472617669732d63692e6f72672f616e67756c61722f616e67756c61722e7376673f6272616e63683d6d6173746572)

![licence](https://camo.githubusercontent.com/3ccf4c50a1576b0dd30b286717451fa56b783512/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667)

**In Developement**

## Sommaire
- Installation
- How to help
- Syntax Highlight System
- Snippets System
- Credits


Installation
=====================

Run
`npm install creamngnpm` 

In your app.module.ts
`import { CreamNG } from 'creamngnpm';`
And
`@NgModule({
  declarations: [
    CreamNG
   ]
  })`

How to help
=====================

### To create a component
- cd src
- cd app
- cd main
-`ng generate component component name` 
- cd nameOfTheNewComponent
- verify app.module.ts
- create route app.module.ts 
- go to header/header.component.html
- Add a new li tag with the route and the label 
- Go to the nameOftheNewComponent.html
- Copy/Past the content of an other component page
-  Do not forget to change H2, href of ScrollTO, id of first type of component, change title, change git repository and create a child component wihtout the 'page' suffix and write his selector tag into the 'demo' div
- Do not forget to add the Auto Snippets Code function in nameOfTheNewComponent.ts

### Components' structure

Notice that, in order to properly display the differente snippets of components, the sctructure have to comply to the following:

- "componentName"-page
  - "componentName"[-"specification"]
    - "componentName"[-"specification"]-item

In your "<componentName>-page.components.ts" file, you'll have to import the "OnInit" event and the "AppComponent" from "app.component". You'll also have to call the codeSnippets() function as the example shown below:
  
`import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    let subComp = ['accordion-item']; // list here all sub-components
    this.app.codeSnippets(subComp); // empty string if no sub-component
  }
}`

Syntax Highlight System
=====================

We use #prettify like this:

`<!--?prettify lang=html linenums=true?--> 
    <pre class="prettyprint linenums"> 
      <code>`
      
Where "lang" is the code language to display.

Snippets System
=====================

We use :
`https://github.com/CreamNG/EntitifyIt` (Studio - Worldline)

 
Credits
=====================

Worldline - 2017 - CreamNG 


