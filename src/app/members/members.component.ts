import { Component } from '@angular/core';
import {Member} from "../member";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MemberDetailComponent} from "../member-detail/member-detail.component";
import {MemberService} from "../member.service";

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    MemberDetailComponent
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  members?: Member[];

  selectedMember?: Member;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    console.log('ngOnInit!!')
    this.getMembers()
  }

  onSelect(member :Member): void {
    this.selectedMember = member
  }

  getMembers(): void {
    this.memberService.getMembers() // Observable
      .subscribe(members => this.members = members) // メソッドの返り値members をthis.membersに代入
  }
}
