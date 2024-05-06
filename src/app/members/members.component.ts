import { Component } from '@angular/core';
import {Member} from "../member";
import {FormsModule} from "@angular/forms";
import {MEMBERS} from "../mock-members";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  members = MEMBERS
  member: Member = {
    id: 1,
    name: '田中太郎'
  };

  selectedMember?: Member;

  constructor() {
  }

  onSelect(member :Member): void {
    this.selectedMember = member
  }
}
