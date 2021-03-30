import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api/api.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) { }

  private getCv(): void {
    this.apiService.getCv().then(res => {
      console.log('res is here', res);
      this.data = res;
    })
  }

  ngOnInit(): void {
    this.getCv();
  }

}
