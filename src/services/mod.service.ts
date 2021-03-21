import { Injectable } from '@angular/core';
import { MOD_LIST } from 'src/mocks/mod-list.mock';

import { Mod } from '../models/mod.model';

@Injectable({
    providedIn: 'root'
})
export class ModService {
    private mods: Mod[] = MOD_LIST;

    getMods () : Mod[] {
        return this.mods;
    }
}