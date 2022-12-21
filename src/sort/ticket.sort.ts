import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../model/pendingTickets';

export type SortColumntic = keyof Ticket | '';
export type SortDirectiontic = 'asc' | 'desc' | '';

const rotate: { [key: string]: SortDirectiontic } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};

export const compare = (
  v1: string | number | boolean | Date,
  v2: string | number | boolean | Date
) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
  column: SortColumntic;
  direction: SortDirectiontic;
}

@Directive({
  selector: 'th[sortabletic]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class SortableHeaderDirectivetic {
  @Input() sortabletic: SortColumntic = '';
  @Input() direction: SortDirectiontic = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortabletic, direction: this.direction });
  }
}
