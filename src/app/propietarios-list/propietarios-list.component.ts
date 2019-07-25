import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../shared/propietario/propietario.service';

@Component({
  selector: 'app-propietarios-list',
  templateUrl: './propietarios-list.component.html',
  styleUrls: ['./propietarios-list.component.css']
})
export class PropietariosListComponent implements OnInit {
  owners: Array<any>;
  constructor(private propietarioService: PropietarioService) { 
   }

  ngOnInit() {
    this.propietarioService.getAll().subscribe(data => {
      this.owners = data._embedded.owners
    });
  }

data(){
  console.log(this.owners);
}
}
