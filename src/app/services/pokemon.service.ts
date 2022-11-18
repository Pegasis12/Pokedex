import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2';
  private imageUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  constructor(private http: HttpClient) { }

  public getPokemon(offset = 0){ 
    //@ts-ignore
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`).pipe(map(result=> {return result['results'];}),
    map(pokemon => {
      //@ts-ignore
      return pokemon.map((poke, index) => {
        poke.image = this.getPokeImage(offset + index + 1);
        poke.pokeIndex = offset + index + 1;
        return poke;
      });
    })
  );
  }

  public getPokeImage(index: number){
    return `${this.imageUrl}${index}.png`;
  }

  public findPokemon(search:any){
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(map(pokemon => {
      // @ts-ignore
      pokemon['image'] = this.getPokeImage(pokemon['id']);
      // @ts-ignore
      pokemon['pokeIndex'] = pokemon['id'];
      return pokemon;
    }));
  }

  // @ts-ignore
  public getPokeDetails(index){
    return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(map(pokemon => {
      //@ts-ignore
      let sprites = Object.keys(pokemon['sprites']);
      //@ts-ignore
      pokemon['images'] = sprites.map((spriteKey) => {
        //@ts-ignore
        if(typeof pokemon['sprites'][spriteKey] === 'string')
        //@ts-ignore
        return pokemon['sprites'][spriteKey];
      }).filter(img => img).reverse();
      return pokemon;
    }));
  }
}

