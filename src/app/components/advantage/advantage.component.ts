import { Component, Input } from '@angular/core';

export interface Advantage {
  text: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.less']
})
export class AdvantageComponent {
  @Input() advantage!: Advantage;
}
