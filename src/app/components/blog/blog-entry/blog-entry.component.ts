// src/app/components/blog-entry/blog-entry.component.ts
import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-entry',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent {
  @Input() entry: any;
}