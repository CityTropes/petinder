import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter'
})

@Injectable()
export class NameFilterPipe implements PipeTransform {

  transform(input: Array<Pet>, name: string): Array<Pet> {
    name.toLowerCase();
    return input.filter(input => input.name.toLowerCase().includes(name));
  }


  // transform(pets: Pet[], searchText: string) : any[] {
  //   return pets.filter(pet => {
  //     return pet.name.toLowerCase().includes(searchText.toLowerCase());
  //   });
  // }

}
