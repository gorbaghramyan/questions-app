import { ModalComponent } from './../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { id } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  categories = [] as Category[];
  id: id = null;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.categoryService.categories$.subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    this.router.navigate(
      ['/questions'],
      {
        state: { id: this.id }
      }
    );
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      position: {
        top: '30vh',
      }
    });
  }
}