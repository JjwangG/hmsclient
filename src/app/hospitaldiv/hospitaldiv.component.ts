import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospitaldiv',
  templateUrl: './hospitaldiv.component.html',
  styleUrls: ['./hospitaldiv.component.css']
})
export class HospitaldivComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  submit(value: string): void {
    this.router.navigate(['./', value], {relativeTo: this.route}).then(() => {});
  }
}
