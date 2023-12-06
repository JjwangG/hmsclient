import { Component } from '@angular/core';
import { Hdivision } from '../model/hdivision';
import { HdivisionService } from '../service/hdivision.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onediv',
  templateUrl: './onediv.component.html',
  styleUrls: ['./onediv.component.css']
})
export class OnedivComponent {
  selectedUser!: Hdivision|null;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private HdivisionService: HdivisionService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.subscription = this.HdivisionService.getUser(id).subscribe(
        (data: Hdivision) => {
          this.selectedUser = data;
        },
        (_:any) => {
          this.selectedUser = null;
        });
      //this.selectedUser = this.HdivisionService.getUser(id);
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
