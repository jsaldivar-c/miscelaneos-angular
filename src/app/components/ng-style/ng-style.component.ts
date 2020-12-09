import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    template: `
        <p style="font-size: 50px">
            Esta es una etiqueta
        </p>

        <p [ngStyle]="{ 'font-size': tamano + 'px' }">
            Esta es una etiqueta
        </p>

        <p [style.fontSize]="'50px'">
            Esta es una etiqueta
        </p>

        <p [style.fontSize.px]="tamano">
            Esta es una etiqueta
        </p>

        <button
            type="button"
            class="btn btn-primary"
            (click)="tamano = tamano + 5"
        >
            <i class="fa fa-plus" aria-hidden="true"></i>
        </button>

        <button
            type="button"
            class="btn btn-primary m-2"
            (click)="tamano = tamano - 5"
        >
            <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
    `,
    styles: [],
})
export class NgStyleComponent implements OnInit {
    tamano = 50;
    constructor() {}

    ngOnInit(): void {}
}
