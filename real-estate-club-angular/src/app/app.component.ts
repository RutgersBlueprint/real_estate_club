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
      this.mobileMenu.nativeElement.className = "bg-blue-300 text-white px-8 hidden";
      this.isMobileMenuOpen = false;
    } else{
      console.log('caught false')
      this.mobileMenu.nativeElement.className = "bg-blue-300 text-white px-8 block";
      this.isMobileMenuOpen = true;
    }
  }

  toggle() {
    console.log("detected")
    const elem = document.getElementById("main-menu");
    if (elem.classList.contains("expanded")) {
      elem.classList.remove("expanded");
    } else {
      elem.classList.add("expanded");
    }
  }
}
