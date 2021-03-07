import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import  *  as  data  from  '../../../assets/executives.json'

@Component({
  selector: 'app-executives',
  templateUrl: './executives.component.html',
  styleUrls: ['./executives.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExecutivesComponent implements OnInit {
  execs;
  exec_row_1 = [];
  exec_row_2 = [];
  closeResult = '';
  modalExec = null;
  faLinkedin = faLinkedin

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.execs = data
    console.log("testing: ", this.execs)
    for(var i = 0; i < 3; i++){
      this.exec_row_1.push(this.execs.default[i])
    }
    for(var i = 3; i < this.execs.default.length; i++){
      this.exec_row_2.push(this.execs.default[i])
    }
    console.log("1 ", this.exec_row_1)
    console.log("2 ", this.exec_row_2)
  }

  open(content, al) {
    this.modalExec = al;
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
