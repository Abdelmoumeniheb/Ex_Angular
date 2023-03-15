import { Component } from '@angular/core';
import { Personne } from './classes/personne';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iheb';
  //create table with numbers

    Notes:number[]=[10,11,5,16,18,9,8]
    p:Personne=new Personne(1,"iheb","Abdelmoumen");
    personnes: Array<Personne> = [
    new Personne(100,
    'tounsi','Mohamed'),
    new Personne(101, 'tounsi2','Mohamed2'),
    new Personne(102, 'tounsi3','Mohamed3'),
    new Personne(103, 'tounsi4','Mohamed4')
    ];
    getMessage(valeur: number): string {
      if (valeur >= 0 && valeur <= 9) {
        return "échec";
      } else if (valeur >= 10 && valeur <= 13) {
        return "moyen";
      } else if (valeur >= 14 && valeur <= 16) {
        return "bien";
      } else {
        return "très bien"
      }
    }  
    getStyle(valeur: number): string {
      return valeur < 10 ? 'blue' : 'red';
    }  
}
