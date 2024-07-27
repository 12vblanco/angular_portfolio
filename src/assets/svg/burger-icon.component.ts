import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-burger-icon',
  standalone: true,
  template: `
    <svg
      class="burger"
      data-slot="icon"
      fill="none"
      [attr.stroke]="strokeColor"
      stroke-width="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 12H20" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M5 17H20" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M5 7H20" stroke-width="2.6" stroke-linecap="round"/>
    </svg>
  `,
  styles: [`
    .burger {
    width: 52px;
    height: 52px;
    stroke-width: 2.2;
    margin-right: 2px;
    cursor: pointer;
    position: relative;
    top: 8px
    }
  `]
})
export class BurgerIconComponent {
  @Input() strokeColor: string = 'var(--color-secondary)';
}
