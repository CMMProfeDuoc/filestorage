import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FileService } from '../file.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cosas !: any;

  constructor(
    private authService : AuthService,
    private router : Router,
    private fileService : FileService,
  )
  {
    
  }

  ngOnInit () {
    this.getDocuments();
  }

  logout () {
    this.authService.logout();
    this.router.navigateByUrl('')
  }

  goToUpload () {
    this.router.navigateByUrl('file-upload')
  }

  async getDocuments () {
    this.cosas = (await this.fileService.getDocuments('cosas')).docs;

    
    if (this.cosas){
      console.log("Documentos: ")
      this.cosas.forEach((element:any) => {
        this.PrintDoc('cosas',element.id);
      });
    }else{
      console.log("ERROR DE CARGA");
    }
  }

  async PrintDoc (path:string, id:any) {
    const document = (await this.fileService.getDocument(path, id)).data();

    if (document){
      console.log(id);
      console.log(document['text']);
    }else{
      console.log("load error of id " + id);
    }
  }

}
