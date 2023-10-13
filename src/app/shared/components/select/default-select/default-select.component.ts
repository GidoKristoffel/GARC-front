import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IOption } from "../../../interfaces/select.interface";

@Component({
  selector: 'tvt-default-select',
  templateUrl: './default-select.component.html',
  styleUrls: ['./default-select.component.scss']
})
export class DefaultSelectComponent implements OnChanges {
  @Input() options: IOption[] = [];
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

  public select(option: IOption): void {
    this.selected = option.label;
    this.change.emit(option.value);
  }
}
