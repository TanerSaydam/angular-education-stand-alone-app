import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidInputDirective } from 'src/app/valid-input.directive';
import { BlogPipePipe } from 'src/app/blog-pipe.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonsModule } from 'src/app/commons/commons.module';
import { HttpClient } from '@angular/common/http';
import { GenericHttpService } from 'src/app/commons/generic-http.service';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [
    CommonsModule    
  ],
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
  name: string = "Taner"

  constructor(
    private _http: GenericHttpService
  ){
    this._http.get<any>("todos",res=>{
      console.log(res);
    })    
  }


  

  save(form:NgForm){
    console.log(form.value);
  }
}
