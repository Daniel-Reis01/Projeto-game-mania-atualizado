import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private noticiaService: NoticiasService) { }

  listaNoticias = [] as Noticias[]

  ngOnInit(): void {
    this.carregarNoticias()
  }

  carregarNoticias() {
    this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticias[]) => {
      this.listaNoticias = noticiasRecebidas;
      console.log(this.listaNoticias);
    } )
  }

}
