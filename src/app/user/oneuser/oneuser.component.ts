import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserModel } from '../model/user-model';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-oneuser',
  templateUrl: './oneuser.component.html',
  styleUrls: ['./oneuser.component.css']
})
export class OneuserComponent implements OnInit, OnDestroy{
  selectedUser!: UserModel|null;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.userService.getUser(id).subscribe(
        (data: UserModel) => {
          this.selectedUser = data;
        },
        (_:any) => {
          this.selectedUser = null;
        });
      //this.selectedUser = this.userService.getUser(id);
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
