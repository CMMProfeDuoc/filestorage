import { Component, OnInit } from '@angular/core';
import { AnimalesService } from './animales.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  animales !: any [];

  constructor(
    private animalesService : AnimalesService
  ) { }

  ngOnInit() {
    this.animalesService.getAllAnimales().then ( res => {
      this.animales = res;
      console.log(this.animales);
    })
  }

}
