import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-executives',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExecutivesComponent implements OnInit {
  alumni_row_1: Alumni[];
  alumni_row_2: Alumni[];
  closeResult = '';
  modalAlumni: Alumni = null;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.alumni_row_1 = [new Alumni(
      "Eshan Kadam",
      "President", 
      "Club President", 
      "Eshan is a senior at Rutgers Business school majoring in Finance with a concentration in Real Estate. Eshan has experience in Real Estate Law, Brokerage, and Wealth Management. He finds a passion for real estate through the long-term value the industry adds to the world. He is currently pursuing a career in Private Equity - Real Estate. In his free time, Eshan enjoys boxing, mountain biking, and playing the drums.", 
      "../../../assets/Eshan.png")];
    this.alumni_row_1.push(new Alumni(
      "Aurelia Del Rossi", 
      "Vice President", 
      "Club Vice President, Realtor & Leasing Agent, & Real Estate Development Analyst Intern", 
      "Aurelia is a Senior at the Rutgers Business School, pursuing a major in Finance with a concentration in Real Estate. She currently works as a part-time leasing agent for Tverdov Housing, a property management company while also interning at Kokes Properties, a real estate development firm in hopes of transitioning from property management to commercial real estate development. In the future she wants to pair the ability to buy and sell houses with a full-time job in real estate development.", 
      "../../../assets/Aurelia.JPG"));
    this.alumni_row_1.push(new Alumni(
      "Madeline Delayo", 
      "Social Media Manager", 
      "Social Media Manager, Commercial Real Estate Research Analyst Intern", 
      "Madeline is currently a junior at the Rutgers Business School pursuing a degree in Finance with a minor in Psychology and a concentration in Real Estate. She is currently interning for a commercial real estate firm, Berko & Associates, and its sister private equity firm, Astor Realty Capital. Madeline is also an active member of the Community Committee in the Rutgers Undergraduate Women in Business club, and she helps train service dogs in the Rutgers University Companion Animal Club. In the future, she plans on using her experience and what she’s learned to become a key player in the real estate market.", 
      "../../../assets/Madeline.png"));

    this.alumni_row_2 = [new Alumni(
      "Kunal Bhosale", 
      "Marketing Manager", 
      "Club Marketing Manager", 
      "Kunal is a Junior at the Rutgers Business School, majoring in Business Analytics and Information Technology as well as minoring in Computer Science. He has a strong interest in real estate and hopes to use his skills and knowledge as a real estate investment analyzer. Outside of school, Kunal loves to play tennis and hike.", 
      "../../../assets/Kunal_Bhosale.jpg")];
    this.alumni_row_2.push(new Alumni(
      "Frank LoPiccolo", 
      "Chief Accountability Officer", 
      "Club Chief Accountability Officer, Summer Financial Analyst Intern", 
      "Frank is a junior at the Rutgers Business School, majoring in Finance with a concentration in Real Estate. Last summer, Frank completed a summer internship with Johnson & Johnson's Tax department. Next summer, Frank will be a Summer Analyst with Syneos Health in Raleigh, North Carolina. In the future, Frank wants to become a licensed agent and open his own business.", 
      "../../../assets/Frank.jpg"));
    this.alumni_row_2.push(new Alumni(
      "Muhammad Dutt", 
      "Treasurer", 
      "Club Treasurer, Real Estate Development Intern", 
      "Muhammad is a junior studying Finance, Economics, and Real Estate at Rutgers. He currently works full-time at Blackstone 360. Muhammad is pursuing a career in real estate development. In his free time, he likes to play sports and race cars.", 
      "../../../assets/Muhammed.PNG"));
  }

  open(content, al: Alumni) {
    this.modalAlumni = al;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

export class Alumni {
  constructor(
    public name: string,
    public position: string,
    public headline: string,
    public description: string,
    public image: string,
  ){}
}
