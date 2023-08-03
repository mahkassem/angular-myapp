import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent {
  @Input() mydata!: number[]
  @Output() mydataChange = new EventEmitter<number[]>()

  changeData() {
    this.mydata = this.generateRandomNumbers()
    this.mydataChange.emit(this.mydata)
  }

  generateRandomNumbers() {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  }
}
