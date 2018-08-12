import { Component, OnInit } from '@angular/core';
import { Empresa } from './Empresa';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  visitante = 'Jacky';
  fecha = '24/09/2018';
  closeResult: string;
  skills = ['JavaScript', 'Angular', 'JSP', 'JSLT','Java','MySQL','Oracle'];
  //Lista de empresas a partir de la clase Empresa
  Empresas: Empresa[] = [
    {
        Empresa : "Sineti Consulting ",
        web : "http://sineti.com",
        proyecto : "CFDI middleware",
        puesto : "Consultor Java"
    },
    {
        Empresa : "DC Mayorista ",
        web : "http://www.dcm.com.mx/",
        proyecto : "Blitz",
        puesto : "Analista programador Java"
    },
    {
        Empresa : "Global Hitss",
        web : "https://www.globalhitss.com/",
        proyecto : "....",
        puesto : "Desarrollador web [JAVA]"
    }
];
  ngOnInit (){
    //Fucnones a carga cuando se carga la aplicacion 
    }

  empresaSeleccionada: Empresa;

onSelect(emSelect: Empresa): void {
  this.empresaSeleccionada = emSelect;
}

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }
}
