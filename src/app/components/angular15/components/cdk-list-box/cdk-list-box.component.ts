import { Component } from '@angular/core';
import { CdkListboxModule } from '@angular/cdk/listbox';

@Component({
  selector: 'app-cdk-list-box',
  standalone: true,
  imports: [CdkListboxModule],
  templateUrl: './cdk-list-box.component.html',
  styleUrl: './cdk-list-box.component.scss',
})
export class CdkListBoxComponent {
  cdk: string = `<div>
  <h5>Courses</h5>
  <ul cdkListbox>
    <li cdkOption="angular">Angular</li>
    <li cdkOption="react">React</li>
    <li cdkOption="solid">Solid</li>
  </ul>
</div>`;
}
