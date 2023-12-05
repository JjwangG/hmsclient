import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserModel } from '../model/user-model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-oneuser',
  templateUrl: './oneuser.component.html',
  styleUrls: ['./oneuser.component.css']
})
export class OneuserComponent implements OnInit{
  selectedUser!: UserModel;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.selectedUser = this.userService.getUser(id);
    });
  }
}
