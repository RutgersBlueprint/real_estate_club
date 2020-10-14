import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('mobileMenu') mobileMenu: ElementRef
  @ViewChildren('home, about, executives, alumni, events, contact') sections: QueryList<ElementRef>; 
  @ViewChildren('homeButtonDT, aboutButtonDT, executivesButtonDT, alumniButtonDT, eventsButtonDT, contactButtonDT') buttons: QueryList<ElementRef>; 
  @ViewChild('homeButtonDT') homeButtonDT: ElementRef;
  @ViewChild('aboutButtonDT') aboutButtonDT: ElementRef;
  @ViewChild('executivesButtonDT') executivesButtonDT: ElementRef;
  @ViewChild('alumniButtonDT') alumniButtonDT: ElementRef;
  @ViewChild('eventsButtonDT') eventsButtonDT: ElementRef;
  @ViewChild('contactButtonDT') contactButtonDT: ElementRef;
  isDesktop: Boolean;
  isMobileMenuOpen = false;

  constructor() { // detect screen size
    if(window.innerWidth < 1450){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) { // detect screen size change
    if(window.innerWidth < 1450){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  openMobileMenu() { // show mobile or desktop nav
    if(this.isMobileMenuOpen){
      this.mobileMenu.nativeElement.className = "hidden";
      this.isMobileMenuOpen = false;
    } else{
      this.mobileMenu.nativeElement.className = "block";
      this.isMobileMenuOpen = true;
    }
  }

  isElementInViewport(el): boolean {
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 500 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if(this.isDesktop){
      const activeSection = this.sections.toArray().findIndex(section => this.isElementInViewport(section.nativeElement));
      const areas = 'home, about, executives, alumni, events, contact';
      const sectionName = areas.split(', ')[activeSection];
      this.buttons.toArray().forEach(b =>{
        b.nativeElement.className = "bg-clear p-3 rounded-lg uppercase";
      })
      switch(sectionName){
        case 'home':
          this.homeButtonDT.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase";
          break;
        case 'about':
          this.aboutButtonDT.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase";
          break;
        case 'executives':
          this.executivesButtonDT.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase";
          break;
        case 'alumni':
          this.alumniButtonDT.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase";
          break;
        case 'events':
          this.eventsButtonDT.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase";
          break;
        case 'contact':
          this.contactButtonDT.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase";
          break;
      }
    }
  }
}
