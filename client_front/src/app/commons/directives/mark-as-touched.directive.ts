import { Directive, Input, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Directive({
  selector: "[prMarkAsTouched]"
})
export class MarkAsTouchedDirective {
  @Input() prMarkAsTouched: FormGroup;

  @HostListener("submit", ["$event"])
  onSubmit(event) {
    Object.values(this.prMarkAsTouched.controls).forEach(control =>
      control.markAsTouched()
    );
  }
}
