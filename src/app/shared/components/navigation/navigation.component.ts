import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../models/link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() items: Link[];
  constructor() { }

  ngOnInit(): void {
  }

}
