import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import SwiperCore from 'swiper';

import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  public pokemon: any;

  constructor(private pokemonService: PokemonService, private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
   const index = this.rotaAtiva.snapshot.paramMap.get('id');

   this.pokemonService.getPokeDetails(index).subscribe((pokemonRes)=>{
    this.pokemon = pokemonRes;

    console.log(pokemonRes);
   });
  }

}
