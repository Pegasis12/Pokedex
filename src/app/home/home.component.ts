import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pokemon: any[] = [];
  private offset: number = 0;

  public pokemonName = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    
    this.loadPokemon();
  }


  public loadPokemon(loadmore = false, event?:any){

    if(loadmore){
      this.offset +=25;
    }

    this.pokemonService.getPokemon(this.offset).subscribe (res =>{
      this.pokemon = [...this.pokemon,...res];

      console.log(res);
    });
  }
//@ts-ignore

public onSearchChange(e) {

let value = e;

console.log('AQUI');
console.log(value);
console.log(typeof(value));


if(value == " " || value == undefined) {

  if(this.offset > 0 ) {
    this.offset = 0;
  }
  if(this.pokemon.length === 0 ) {
    this.loadPokemon();
  }

  return;
}

this.pokemonService.findPokemon(value).subscribe({
  next : (res) =>{this.pokemon = [res]},
  
  error:(err) => {this.pokemon = []}
});

}
}
