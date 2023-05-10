import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'corp-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SlidesComponent implements OnInit {

  /**
   * Api url interact with the json database.
   */
  private apiUrl: string = 'http://localhost:3000/menu';
  /**
   * Local variable that hold the list of items in the menu
   */
  menu: any[] = [];
  // slides$ = new BehaviorSubject<string[]>(['']);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.slides$.next(
    //   Array.from({ length: 30 }).map((el, index) => `Slide ${index + 1}`)
    // );

    this.getMenu().subscribe(res => {
      this.menu = res;
    })
  }

  /**
   * 
   * @returns all the items in the menu from the fake Json database.
   */
  getMenu(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

}
