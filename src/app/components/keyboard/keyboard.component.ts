import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Input() balance = 0;

  @Output() onBalanceChange = new EventEmitter<any>();
  // Keyboard objects.
  keyboard: any[] = [
    { id: 0, value: 1, label: '1' },
    { id: 1, value: 2, label: '2' },
    { id: 2, value: 3, label: '3' },
    { id: 3, value: 4, label: '4' },
    { id: 4, value: 5, label: '5' },
    { id: 5, value: 6, label: '6' },
    { id: 6, value: 7, label: '7' },
    { id: 7, value: 8, label: '8' },
    { id: 8, value: 9, label: '9' },
    { id: 13, value: '.', label: ',' },
    { id: 10, value: 0, label: '0' },
    {
      id: 11,
      value: 'backspace',
      icon: '../../../assets/backspace.svg',
    },
  ];

  constructor() {}

  ngOnInit() {}

  public buttonTap(button) {
    console.log(this.balance);
    this.balance = button.value;
    // Passing the value to the outer method.
    this.onBalanceChange.emit(button.value);

    // TODO: Add pipe to format the balance with dots.
  }
}
