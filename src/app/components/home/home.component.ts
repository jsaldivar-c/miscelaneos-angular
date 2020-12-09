import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <app-ng-style></app-ng-style>
        <app-css></app-css>
        <p>Hola Mundo desde App.Component !!</p>
        <app-clases></app-clases>
        <br />
        <h3>Clases</h3>
        <p [appResaltado]="'blue'">Hola Mundo Resaltado!</p>
        <h3>ngSwitch</h3>
        <app-ng-switch></app-ng-switch>
    `,
    styles: [],
})
export class HomeComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewChecked,
        AfterViewInit,
        OnDestroy {
    constructor() {
        console.log('Constructor');
    }

    ngOnInit(): void {
        console.log('ngOnInit');
    }
    ngOnChanges(): void {
        console.log('ngChanges');
    }
    ngDoCheck(): void {
        console.log('DoCheck');
    }
    ngAfterContentInit(): void {
        console.log('AfterContentInit');
    }
    ngAfterContentChecked(): void {
        console.log('AfterContentChecked');
    }
    ngAfterViewChecked(): void {
        console.log('AfterViewChecked');
    }
    ngAfterViewInit(): void {
        console.log('AfterViewInit');
    }
    ngOnDestroy(): void {
        console.log('OnDestroy');
    }
}
