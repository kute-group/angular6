import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  reviewForm: FormGroup;
  submitted = false;

  product: any;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      content: ['', Validators.required],
    });
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(id)
      .subscribe(product => (this.product = product));
  }

  onSubmit() {
    this.submitted = true;
    if (this.reviewForm.invalid) {
      return;
    }
    const id = this.route.snapshot.paramMap.get('id');
    if (this.reviewForm.controls.fullname.value !== '') {
      this.productService
        .addReview(id, this.reviewForm.value)
        .subscribe(result => {
					if(result.status && result.status ==="success"){
						this.getProduct();
						this.submitted = false;
						this.reviewForm.controls.content.setValue('');
					}
				});
    }
  }
}
