import { Component, OnInit } from '@angular/core';
import { EventoService } from '../_services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  // _filtroLista!: string;

  // get filtroLista(): string {
  //   return this._filtroLista;
  // }
  // set filtroLista(value: string) {
  //   this._filtroLista = value;
  //   this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  // }

  // eventosFiltrados: any = [];
  eventos: any = {};
  imagemAltura = 50;
  imagemMargem = 2;
  aparecer: boolean = false;

  constructor(private eventoService: EventoService) { }

  // filtrarEventos(filtrarPor: string): any {
  //   filtrarPor = filtrarPor.toLocaleLowerCase();
  //   return this.eventos.filter(
  //     (      evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
  //   );
  // }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos() {
    this.eventoService.getEvento().subscribe(response => {
      this.eventos = response;
      console.log(response)
    }, error => {
      console.log(error);
    })
  }

  mostrar() {
    this.aparecer = !this.aparecer;
  }

}
