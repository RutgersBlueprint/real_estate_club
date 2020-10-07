import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real-estate-club-angular';
  @ViewChild('mobileMenu') mobileMenu: ElementRef
  isDesktop: Boolean;
  isMobileMenuOpen = false;

  constructor() {
    if(window.innerWidth < 1450){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 1450){
      this.isDesktop = false;
    } else {
      this.isDesktop = true;
    }
  }

  openMobileMenu(){
    if(this.isMobileMenuOpen){
      console.log('caught true')
      this.mobileMenu.nativeElement.className = "hidden";
      this.isMobileMenuOpen = false;
    } else{
      console.log('caught false')
      this.mobileMenu.nativeElement.className = "block";
      this.isMobileMenuOpen = true;
    }
  }
}
