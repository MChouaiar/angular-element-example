import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  template: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular element example';
  private _number = 0;
  private _message = 'Angular';
  count: Number = 0;

  set number(newCount: any) {
    this._number = parseInt(newCount, 10);
    this.count = this._number;
    this.cdr.detectChanges();
    this.countChange.emit(newCount);
  }
  @Input()
  get number() {
    return this._number;
  }
  @Input()
  set message(newMessage: string) {
    this._message = newMessage;
  }
  get message() {
    return this._message;
  }

  @Output('count-change') countChange = new EventEmitter();

  constructor(/*private el: ElementRef, */private cdr: ChangeDetectorRef) {
  }

  increaseCount(count) {
    this.number = count + 1;
    // this.el.nativeElement.setAttribute('number', count + 1);
    this.cdr.detectChanges();
  }
}
