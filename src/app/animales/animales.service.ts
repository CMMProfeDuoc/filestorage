import { Injectable } from '@angular/core';
import { FileService } from '../file.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  documents !: any [];

  animales : any [] = [];

  constructor(
    private fileService : FileService,
  ) { }

  getAnimal (animalId:string){
    return {
      ...this.animales.find ( animal => {
        return animal.id === animalId;
      })
    }
  }

  async getAllAnimales () {
    this.documents = (await this.fileService.getDocuments('animales')).docs;

    for (const element of this.documents){
      const animal = (await this.fileService.getDocument('animales',element.id)).data();
      this.animales.push({
        id:element.id,
        ...animal,
      });
    }

    return [...this.animales];
  }
}
