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

  @ViewChild('home', {static: true}) private home: ElementRef<HTMLDivElement>;
  @ViewChild('homeButtonDT') homeButtonDT: ElementRef;
  @ViewChild('about', {static: false}) private about: ElementRef<HTMLDivElement>;
  @ViewChild('aboutButtonDT') aboutButtonDT: ElementRef;
  @ViewChild('executives', {static: false}) private executives: ElementRef<HTMLDivElement>;
  @ViewChild('executivesButtonDT') executivesButtonDT: ElementRef;
  @ViewChild('alumni', {static: false}) private alumni: ElementRef<HTMLDivElement>;
  @ViewChild('alumniButtonDT') alumniButtonDT: ElementRef;
  @ViewChild('events', {static: false}) private events: ElementRef<HTMLDivElement>;
  @ViewChild('eventsButtonDT') eventsButtonDT: ElementRef;
  @ViewChild('contact', {static: false}) private contact: ElementRef<HTMLDivElement>;
  @ViewChild('contactButtonDT') contactButtonDT: ElementRef;
  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    var page;
    var button;
    if(this.home){
      page = this.home;
      button = this.homeButtonDT;
      const rect =page.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(topShown && bottomShown){
        button.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase"
      } else {
        let button = this.executivesButtonDT;
        button.nativeElement.className = "bg-clear p-3 rounded-lg shadow-none uppercase"
      }
    }
    if(this.about){
      page = this.about;
      button = this.aboutButtonDT;
      const rect =page.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(topShown && bottomShown){
        button.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase"
      } else {
        let button = this.executivesButtonDT;
        button.nativeElement.className = "bg-clear p-3 rounded-lg shadow-none uppercase"
      }
    }
    if(this.executives) {
      page = this.executives;
      button = this.executivesButtonDT;
      const rect =page.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(topShown && bottomShown){
        button.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase"
      } else {
        let button = this.executivesButtonDT;
        button.nativeElement.className = "bg-clear p-3 rounded-lg shadow-none uppercase"
      }
    }
    if(this.alumni) {
      page = this.alumni;
      button = this.alumniButtonDT;
      const rect =page.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(topShown && bottomShown){
        button.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase"
      } else {
        let button = this.executivesButtonDT;
        button.nativeElement.className = "bg-clear p-3 rounded-lg shadow-none uppercase"
      }
    }
    if(this.events) {
      page = this.events;
      button = this.eventsButtonDT;
      const rect =page.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(topShown && bottomShown){
        button.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase"
      } else {
        let button = this.executivesButtonDT;
        button.nativeElement.className = "bg-clear p-3 rounded-lg shadow-none uppercase"
      }
    }
    if(this.contact) {
      page = this.contact;
      button = this.contactButtonDT;
      const rect =page.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      if(topShown && bottomShown){
        button.nativeElement.className = "bg-red-700 p-3 rounded-lg shadow uppercase"
      } else {
        let button = this.executivesButtonDT;
        button.nativeElement.className = "bg-clear p-3 rounded-lg shadow-none uppercase"
      }
    }

     
  }
}
