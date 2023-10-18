import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private firestore : Firestore
  ) { }

  getNote (path:string) {
    const notesRef = collection(this.firestore, path);
    return collectionData(notesRef);
  }

  addCosa (cosa:any, path:string) {
    const notesRef = collection(this.firestore, path);
    return addDoc(notesRef,cosa);
  }

}


