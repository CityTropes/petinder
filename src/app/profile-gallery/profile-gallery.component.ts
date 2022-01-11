import {Component, OnInit} from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  public petArray : Array<Pet> = new Array<Pet>();

  constructor(private petService: PetService) {

  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.petArray = pets);
    //close or unsubscibe?
  }

}