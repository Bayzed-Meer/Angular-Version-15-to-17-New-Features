import { Component } from '@angular/core';
import {CdkListboxModule} from '@angular/cdk/listbox';


@Component({
  selector: 'app-cdk-list-box',
  standalone: true,
  imports: [CdkListboxModule],
  templateUrl: './cdk-list-box.component.html',
  styleUrl: './cdk-list-box.component.scss'
})
export class CdkListBoxComponent {
}
