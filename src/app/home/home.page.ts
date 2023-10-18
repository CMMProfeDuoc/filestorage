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

  constructor(
    private authService : AuthService,
    private router : Router,
    private fileService : FileService,
  ) { }

  logout () {
    this.authService.logout();
    this.router.navigateByUrl('')
  }

  agregarNota () {
    try {
      this.fileService.addNote({text:'cosa'});
      console.log("nota agregada");
    } catch (e){
      console.log(e);
    }

  }

}
