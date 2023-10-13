import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tvt-default-select',
  templateUrl: './default-select.component.html',
  styleUrls: ['./default-select.component.scss']
})
export class DefaultSelectComponent implements OnChanges {
  @Input() options: string[] = [];
  @Input() defaultOption: string = '';
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['defaultOption'].currentValue) {
      this.selected = changes['defaultOption'].currentValue;
    }
  }

  public openSelector: boolean = false;
  public selected: string = '';

  public toggle(): void {
    this.openSelector = !this.openSelector;
  }

  public close(): void {
    this.openSelector = false;
  }

  public select(option: string): void {
    this.selected = option;
    this.change.emit(this.selected);
  }
}
