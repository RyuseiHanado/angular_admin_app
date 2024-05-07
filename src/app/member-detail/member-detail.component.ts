import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Member} from "../member";

@Component({
  selector: 'app-member-detail',
  standalone: true,
    imports: [
        FormsModule,
        NgIf
    ],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent {
  @Input() member?: Member
}
