import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  date: Date = new Date()
  number: number = 0.123456789
  currency: number = 1234.5678
  percent: number = 0.1234
  text = '&ensp;&ensp;lorem ipsum dolor sit amet consectetur adipisicing elit.  '
}
