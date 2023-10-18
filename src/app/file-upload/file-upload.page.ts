import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.page.html',
  styleUrls: ['./file-upload.page.scss'],
})
export class FileUploadPage implements OnInit {

  objeto !: FormGroup;

  constructor(
    private router : Router,
    private fileService : FileService,
    private formBuilder : FormBuilder,
  ) { }

  get nombre () { return this.objeto.get('nombre'); }
  get descripcion () { return this.objeto.get('descripcion'); }
  get categoria () { return this.objeto.get('categoria'); }
  get subCategoria () { return this.objeto.get('subCategoria'); }

  ngOnInit() {
    this.objeto = this.formBuilder.group({
      nombre : ['',[Validators.required, Validators.minLength(3)]],
      descripcion : ['',[Validators.required, Validators.minLength(1)]],
      categoria : ['',[Validators.required, Validators.minLength(3)]],
      subCategoria : ['',[Validators.required, Validators.minLength(3)]]
    })
  }

  goToHome (){
    this.router.navigateByUrl('home');
  }

  subirArchivo () {
    const path = 'objetos/' + this.objeto.value.categoria + '/' + this.objeto.value.subCategoria;
    
    try {
      this.fileService.addCosa(
        this.objeto.value,
        path
      )
    } catch (e) {
      console.log("Error");
      console.log(e);
    }
  }

}
