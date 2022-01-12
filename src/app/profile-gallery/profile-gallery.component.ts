import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  public petArray: Array<Pet> = new Array<Pet>();
  // public selectedPet: Pet  | any;                   //why not optional?
  selectedPet?: Pet;
  searchText: any;

  constructor(private petService: PetService) {
    this.searchText = "";
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.petArray = pets);
    //unsubscibe? -> no, angular takes care of this
  }

  selectPet(selectPet: Pet): void {
    this.selectedPet = selectPet;
  }

  // getSelectedPet(){
  //   return this.selectedPet;
  // }
  //
  // onFilterPetsByName(event: Event){   //how/where to use
  //   this.searchText = (<HTMLInputElement>event.target).value;
  // }

}
