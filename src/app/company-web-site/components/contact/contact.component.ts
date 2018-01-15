import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.data['contactTypes']);
  }

}
