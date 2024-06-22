import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    //templateUrl: './buttondemo.component.html',
    selector: 'app-buttondemo',
    template: `<button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 
    'background-color': backgroundColor, 
    'border': border, 
    'padding': padding, 
    'color': color,  
    'border-radius': borderRadius,
    }"
  >
    {{ label }}
  </button>`,
    styleUrl: './buttondemo.component.scss',
})
export class ButtonDemoComponent implements OnInit {

    @Input()
    primary = false;

    @Input()
    backgroundColor?: string;
    border?: string;
    padding?: string;
    color?: string;
    borderRadius?: string;

    @Input()
    size: "small" | "medium" | "large" = "medium";

    @Input()
    label?: string;

    @Output()
    onClick = new EventEmitter<Event>();

    public get classes(): string[] {
        const mode = this.primary
            ? "p-button-primary"
            : "p-button-secondary";

        return ["p-element p-ripple p-component p-button ", `p-button-${this.size}`, mode];
    }

    items: MenuItem[] = [];

    loading = [false, false, false, false];

    ngOnInit() {
        this.items = [
            { label: "Update", icon: "pi pi-refresh" },
            { label: "Delete", icon: "pi pi-times" },
            { label: "Angular.io", icon: "pi pi-info", url: "http://angular.io" },
            { separator: true },
            { label: "Setup", icon: "pi pi-cog" },
        ];
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }
}
