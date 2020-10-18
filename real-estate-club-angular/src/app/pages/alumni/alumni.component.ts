import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  alumni_row_1: Alumni[];
  alumni_row_2: Alumni[];
  closeResult = '';
  modalAlumni: Alumni = null;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.alumni_row_1 = [new Alumni("John Smith 1", "Graduated RU NB 2020", "blah blah blah", "../../../assets/Muhammed.PNG")];
    this.alumni_row_1.push(new Alumni("John Smith 2", "Graduated RU NB 2020", "blah blah blah", "../../../assets/Muhammed.PNG"));
    this.alumni_row_1.push(new Alumni("John Smith 3", "Graduated RU NB 2020", "blah blah blah", "../../../assets/Muhammed.PNG"));

    this.alumni_row_2 = [new Alumni("John Smith 4", "Graduated RU NB 2020", "blah blah blah", "../../../assets/Muhammed.PNG")];
    this.alumni_row_2.push(new Alumni("John Smith 5", "Graduated RU NB 2020", "blah blah blah", "../../../assets/Muhammed.PNG"));
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
    public headline: string,
    public description: string,
    public image: string,
  ){}
}
