import { Component } from '@angular/core';
import { faAngleDown, faAngleUp  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'day-program',
  templateUrl: './day-program.component.html',
  styleUrls: ['./day-program.component.scss']
})
export class DayProgramComponent {
  isDropdownOpen:boolean = false;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  constructor(){
  }

  changeImage(){
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
