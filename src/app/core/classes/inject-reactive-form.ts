import { ElementRef, Injectable, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Injectable()
export abstract class InjectReactiveForm implements OnInit {
  @Input() form!: FormGroup;
  @Input() formField: string = '';

  protected constructor(
    protected rootFormGroup: FormGroupDirective,
    protected el: ElementRef
  ) {}

  ngOnInit() {
    debugger;
    console.log(this.el.nativeElement);
    this.initForm();
  }

  private initForm(): void {
    this.form = this.rootFormGroup.control;
  }
}
