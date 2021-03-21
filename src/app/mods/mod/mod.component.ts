import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mod } from 'src/models/mod.model';

@Component({
    selector: 'app-mod',
    templateUrl: 'mod.component.html',
    styleUrls: ['mod.component.css'],
})
export class ModComponent implements OnInit {

    @Input()
    mod!: Mod;

    @Output()
    dlWanted: EventEmitter<Mod> = new EventEmitter<Mod>();

    constructor() {}

    ngOnInit () {}

    dlMod () {
        this.dlWanted.emit(this.mod);
    }
}