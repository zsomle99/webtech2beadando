import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateFociDTO } from 'src/app/services/domain/settings/foci/foci';
import { ProductService } from 'src/app/services/domain/settings/foci/product.service';

@Component({
  selector: 'app-create-foci',
  templateUrl: './create-foci.component.html',
  styleUrls: ['./create-foci.component.css']
})
export class CreateFociComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private service: ProductService) { }

  fociFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    organizer: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    date: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    sitting: new FormControl('', [Validators.required]),
  });
  foci: CreateFociDTO;
  ngOnInit(): void { }

  succes() {
    this.snackBar.open('Sikeres létrehozás', 'Új termék', {
      duration: 1000,
    });
  }
  error() {
    this.snackBar.open('Sikertelen létrehozás', 'A meccs már létezik', {
      duration: 1000,
    });
  }
  createProduct = () => {
    this.foci = {
      title: this.fociFormGroup.get('title').value,
      organizer: this.fociFormGroup.get('organizer').value,
      date: this.fociFormGroup.get('date').value,
      price: this.fociFormGroup.get('price').value,
      sitting: this.fociFormGroup.get('sitting').value,
    };
    this.service.createFoci(this.foci.title, this.foci.organizer, this.foci.date, this.foci.price, this.foci.sitting).subscribe(val => {
      if (val != null) {
        this.succes();
      }

    }, (err) => {
      this.error();

    });
  }


}
