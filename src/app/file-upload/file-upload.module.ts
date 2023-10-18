import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileUploadPageRoutingModule } from './file-upload-routing.module';

import { FileUploadPage } from './file-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FileUploadPageRoutingModule
  ],
  declarations: [FileUploadPage]
})
export class FileUploadPageModule {}
