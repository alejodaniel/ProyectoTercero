import { Component, OnInit } from '@angular/core';
import { ProfilepictureService } from '../services/profile/profilepicture.service';
import { Profilepicture } from '../models/profile/Profilepicture';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean;
    
    constructor(public profilePictureDataService: ProfilepictureService) {}

    ngOnInit() {
        this.getProfilePicture();
    }

    getProfilePicture() {
        this.profilePictureDataService.get().then( r2 => {
            if ( typeof r2.error === 'undefined' ) {
                sessionStorage.setItem('profilePicture', JSON.stringify(r2 as Profilepicture));
            }
        }).catch( e => {
            console.log(e);
        });
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
