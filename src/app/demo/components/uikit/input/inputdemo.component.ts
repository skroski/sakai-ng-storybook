import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-inputdemo',
    template: `<input
        pInputText
       [placeholder]="placeholder"
       [ngClass]="classes"
       [ngStyle]="{ 
        'background-color': backgroundColor, 
        'border': border,
        'padding': padding, 
        'color': color,  
        'border-radius': borderRadius,
        'placeholder': color,
        'width': '40%',
        'height': '40px',
        }"
      />
  `,
    styleUrl: './inputdemo.component.scss',
})
export class InputDemoComponent implements OnInit {

    @Input()
    primary = false;

    @Input()
    placeholder?: string;

    @Input()
    backgroundColor?: string;
    @Input()
    border?: string;
    @Input()
    type?: string;
    padding?: string;
    color?: string;
    borderRadius?: string;


    @Input()
    size: "small" | "medium" | "large" = "medium";

    public get classes(): string[] {
        const mode = this.primary
            ? "p-input-primary"
            : "p-input-secondary";

        return ["p-element p-ripple p-component p-input ", `p-input-${this.size}`, mode];
    }


    ngOnInit() {
        console.log();
    }

}
