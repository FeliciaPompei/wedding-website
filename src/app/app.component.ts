import { Component } from '@angular/core';
import { faGripLines, faBars,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isa-bruno-wedding';
  faGripLines = faGripLines;
  faBars = faBars;

}
