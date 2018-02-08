import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: object[]	

  constructor(
  	public navCtrl: NavController,
  	public http: Http
  	) {

  }

findCharacter(name){
  	console.log(`searching for ${name}`);
  	this.http.get('https://swapi.co/api/people/?search=' + name)
  	.toPromise()
  	.then(response => this.results = response.json().results);
  	}

}
