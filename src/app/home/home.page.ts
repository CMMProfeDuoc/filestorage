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
  ) { }

  logout () {
    this.authService.logout();
    this.router.navigateByUrl('')
  }

  goToUpload () {
    this.router.navigateByUrl('file-upload')
  }

}
