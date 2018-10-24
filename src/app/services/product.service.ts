import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(id) {
    return Observable.create(observer => {
      axios
        .get(`http://localhost:3000/api/v1/product/${id}`)
        .then(result => {
					console.log('result', result.data);
          observer.next(result.data);
        })
        .catch(err => observer.error(err));
    });
	}
	
	getProducts() {
    return Observable.create(observer => {
      axios
        .get(`http://localhost:3000/api/v1/product`)
        .then(result => {
					console.log('result', result.data);
          observer.next(result.data);
        })
        .catch(err => observer.error(err));
    });
	}
	
	addReview(id, data){
		return Observable.create(observer => {
      axios
				.post(`http://localhost:3000/api/v1/product/${id}/review`, data 
			)
        .then(result => {
          observer.next(result.data);
        })
        .catch(err => observer.error(err));
    });
	}
}
