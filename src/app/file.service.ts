import { Injectable, Query } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private firestore : Firestore
  ) { }

  getNote () {
    const notesRef = collection(this.firestore,'notes');
    return collectionData(notesRef);
  }

  addNote (note:any) {
    const notesRef = collection(this.firestore,'notes');
    return addDoc(notesRef,note);
  }

  deleteNote(note: any) {
    const noteDocRef = doc(this.firestore, 'notes/${note.id}');
    return deleteDoc(noteDocRef);
  }


}


