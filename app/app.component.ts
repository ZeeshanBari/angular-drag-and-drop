import { Component } from '@angular/core';
import { FileHandle } from './dragDrop.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 5';
  files: FileHandle[] = [];
  maxFiles = 5;
  error = '';

  filesDropped(files: FileHandle[]): void {
    if (this.files.length + files.length <= this.maxFiles) {
      this.files = this.files.concat(files);
      this.error = '';
    } else {
      this.error = 'Too many files';
    }
  }

  upload(): void {
    //get image upload file obj;
  }
}
