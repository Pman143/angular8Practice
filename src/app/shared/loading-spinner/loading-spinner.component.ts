import {Component} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: '<div style="margin-top: 100px" class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {

}
