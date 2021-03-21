import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ModService } from 'src/services/mod.service';
import { Mod } from 'src/models/mod.model';

@Component({
    selector: 'app-mod-list',
    templateUrl: './mod-list.component.html',
    styleUrls: ['./mod-list.component.css']
}) 
export class ModListComponent implements OnInit {

    mods: Mod[];

    constructor(
        private location: Location,
        private modService: ModService) {
            this.mods = this.modService.getMods();
        }

    ngOnInit() {

    }

    goBack() {
        this.location.back();
    }

    dlClicked(mod: Mod) {
        console.log("Download ", mod);
    }
}