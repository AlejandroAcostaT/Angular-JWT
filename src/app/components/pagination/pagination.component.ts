import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../interfaces/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: Pagination = { page: 1, total_pages: 1};
  @Output() previousPageEvent = new EventEmitter<number>();
  @Output() nextPageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  previousPage(page: number) {
    this.previousPageEvent.emit(page);
  }

  nextPage(page: number) {
    this.nextPageEvent.emit(page);
  }

}
