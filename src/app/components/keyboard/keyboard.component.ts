import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  count: any;

  @Input() balance = 0;

  @Output() onBalanceChange = new EventEmitter<any>();
  // Keyboard objects.
  keyboard: any = {
    1: { id: 1, value: 1, label: '1' },
    2: { id: 2, value: 2, label: '2' },
    3: { id: 3, value: 3, label: '3' },
    4: { id: 4, value: 4, label: '4' },
    5: { id: 5, value: 5, label: '5' },
    6: { id: 6, value: 6, label: '6' },
    7: { id: 7, value: 7, label: '7' },
    8: { id: 8, value: 8, label: '8' },
    9: { id: 9, value: 9, label: '9' },
    10: { id: 10, value: '.', label: ',' },
    11: { id: 11, value: 0, label: '0' },
    12: { id: 12, value: 'backspace', icon: '../../../assets/backspace.svg' },
  };

  timeoutHandler: any;

  constructor() {}

  ngOnInit() {}

  public buttonTap(button) {
    this.balance = button.value['value'];

    // Passing the value to the outer method.
    this.onBalanceChange.emit(button.value['value']);
  }

  // Este método ordena el objeto by its keys.
  asIsOrder(a, b) {
    return 1;
  }
}
