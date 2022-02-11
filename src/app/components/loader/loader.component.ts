import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  template: '<div class="wrapper"><mat-progress-spinner [color]="color" [mode]="mode"></mat-progress-spinner></div>',
  styles: [`.wrapper {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
  }`]
})
export class LoaderComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
}