// src/app/pages/blog-page/blog-page.component.ts
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { blogEntries } from '../../components/blog/blog-entries';
import { BlogEntryComponent } from '../../components/blog/blog-entry/blog-entry.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [NgFor, BlogEntryComponent],
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  blogEntries = blogEntries;
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}