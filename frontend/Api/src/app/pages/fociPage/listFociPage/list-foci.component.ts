import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { Foci } from 'src/app/services/domain/settings/foci/foci.model';
import { ProductService } from 'src/app/services/domain/settings/foci/product.service';
import { CreateFociComponent } from '../create-foci/create-foci.component';

@Component({
  selector: 'app-list-focis',
  templateUrl: './list-foci.component.html',
  styleUrls: ['./list-foci.component.css']
})
export class ListFociComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: ProductService, private currentUserService: CurrentUserService) { }

  user: string;
  ELEMENT_DATA: Foci[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('currentUser'));
    this.user = this.currentUserService.getUsername();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.getAllProducts();
  }

  deleteProduct(product: Foci): void {

    this.service.deleteFoci(product._id).subscribe(val => {
      console.log(val);
      alert('Sikeres törlés!');
      this.getAllProducts();
    });

  }

  editProduct(foci: Foci): void {
    localStorage.setItem('title', foci.title);
    localStorage.setItem('organizer', foci.organizer);
    localStorage.setItem('price', foci.price.toString());
    localStorage.setItem('sitting', foci.sitting.toString());
    this.router.navigate(['settings/foci', 'edit', foci._id]);
  }

  getAllProducts(): void {
    this.service.getFocis().subscribe(val => {
      this.ELEMENT_DATA = val;
      this.displayedColumns = ['title', 'organizer', 'date', 'price', 'sitting', 'delete'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  navigateBack() {
    this.router.navigate(['../../']);
  }
  createProduct(): void {
    const dialogRef = this.dialog.open(CreateFociComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllProducts();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['../../']);
  }

}
