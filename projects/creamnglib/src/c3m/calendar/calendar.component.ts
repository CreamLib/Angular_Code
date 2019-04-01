import {
  NgModule,
  Component,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  HostListener
} from '@angular/core';

@Component({
  selector: 'c3m-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  /* *********** INPUT *********** */
  @Input() monthString: string;
  @Input() targetString = ' ';
  @Input() type = 'text';

  /* ************* VARIABLES ************** */
  @ViewChild('dp') dp: any;
  @ViewChild('prev') prev: any;
  @ViewChild('next') next: any;
  @ViewChild('cal') grid: any;
  @ViewChild('showDP') buttonShow: any;
  tbody: any;
  @ViewChild('date') target: any;
  monthNames: string[];
  dayNames: string[];
  dateObj: Date;
  curYear: number;
  year: number;
  curMonth: number;
  month: number;
  currentDate: boolean;
  keys: { [name: string]: any } = {};
  date: number;
  bModal: boolean;

  /* ********* CONSTRUCTOR ********* */

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}

  /* ************ ON INIT *********** */
  ngOnInit() {
    this.datepicker(true);
    if (this.type === 'date') {
      if (this.checkDateInput()) {
        this.renderer.setStyle(this.buttonShow.nativeElement, 'display', 'none');
      }
    }
  }

  /* ************** MAIN FUNCTION ************** */
  datepicker(modal: boolean) {
    /* All the selectors */
    this.dp = this.dp.nativeElement;
    this.prev = this.prev.nativeElement;
    this.next = this.next.nativeElement;
    this.grid = this.grid.nativeElement;
    this.target = this.target.nativeElement;
    this.bModal = modal; // true if datepicker should appear in modal

    // Month Names
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    // Day Names
    this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // DATE
    this.dateObj = new Date();

    // Current Date
    this.curYear = this.dateObj.getFullYear(); // Get the Year using Local Time
    this.year = this.curYear;
    this.curMonth = this.dateObj.getMonth(); // Get the Month using Local Time
    this.month = this.curMonth;
    this.currentDate = true;

    this.date = this.dateObj.getDate();

    // Keyboard Keys
    this.keys = {
      tab: 9,
      enter: 13,
      esc: 27,
      space: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40
    };

    // Stock name of current Date
    this.monthString = this.monthNames[this.month] + ' ' + this.year;

    // Fill the calendar grid
    this.fillGrid();

    // Point Activedescendant to the current day
    const today = this.grid.querySelector('.today');
    this.grid.setAttribute('aria-activedescendant', today.getAttribute('id'));

    // Call all events listener
    this.bindHandlers();
  }

  /* ************ CHECK IF TYPE DATE IS SUPPORTED ******** */
  checkDateInput(): boolean {
    var input = document.createElement('input');
    input.setAttribute('type', 'date');

    var notADateValue = 'not-a-date';
    input.setAttribute('value', notADateValue);

    return input.value !== notADateValue;
    /*var i = document.createElement('input');
    i.setAttribute('type', 'date');
    return i.type !== 'text';*/
  }

  /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
  bindHandlers() {
    const thisobj = this;

    /* ---------------------------------------------- */
    thisobj.renderer.listen(this.grid, 'keydown', e => {
      return thisobj.handleGridKeyDown(e);
    });

    thisobj.renderer.listen(this.grid, 'keypress', e => {
      return thisobj.handleGridKeyDown(e);
    });

    thisobj.renderer.listen(this.grid, 'focus', () => {
      return thisobj.handleGridFocus();
    });

    thisobj.renderer.listen(this.grid, 'blur', () => {
      return thisobj.handleGridBlur();
    });

    /* ---------------------------------------------- */

    this.addEventListenerList(thisobj);
  }

  /* ************************** HANDLE GRID BLUR ********************** */
  handleGridBlur() {
    if (this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'))) {
      const idActiveDescendant = this.eRef.nativeElement.querySelector(
        '#' + this.grid.getAttribute('aria-activedescendant')
      );
      idActiveDescendant.classList.remove('focus');
      idActiveDescendant.setAttribute('aria-selected', 'false');
    }
    return true;
  }

  /* ************************** HANDLE GRID FOCUS ********************** */
  handleGridFocus() {
    const active = this.grid.getAttribute('aria-activedescendant');
    if (this.eRef.nativeElement.querySelector('#' + active).getAttribute('id') === undefined) {
      const lastDay = 'day' + this.calcNumDays(this.year, this.month);
      this.eRef.nativeElement.querySelector('#' + lastDay).classList.add('focus');
      this.eRef.nativeElement.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
    } else {
      this.eRef.nativeElement.querySelector('#' + active).classList.add('focus');
      this.eRef.nativeElement.querySelector('#' + active).setAttribute('aria-selected', 'true');
    }
    return true;
  }

  /* ************************** HANDLE KEY PRESS ********************** */
  handleGridKeyPress(e) {
    if (e.altKey) {
      return true;
    }
    switch (e.keyCode) {
      case this.keys.tab:
      case this.keys.enter:
      case this.keys.space:
      case this.keys.esc:
      case this.keys.left:
      case this.keys.right:
      case this.keys.up:
      case this.keys.down:
      case this.keys.pageup:
      case this.keys.pagedown:
      case this.keys.home:
      case this.keys.end: {
        e.stopPropagation();
        return false;
      }
    }
    return true;
  }

  /* ************************** HANDLE GRID CLICK ********************** */
  handleGridClick(id, e) {
    const cell = id;

    // If Cell is empty
    if (cell.classList.contains('empty')) {
      return true;
    }

    // Get Focus Cell
    const tmpCell = this.grid.querySelector('.focus');
    tmpCell.classList.remove('focus');
    tmpCell.setAttribute('aria-selected', 'false');

    // Add New Focus Cell
    cell.classList.add('focus');
    cell.setAttribute('aria-selected', 'true');

    // Change Grid ActiveDescendant to the newCellId
    this.grid.setAttribute('aria-activedescendant', cell.getAttribute('id'));

    // Get the new Click Cell
    const curDay = this.eRef.nativeElement.querySelector(`#${this.grid.getAttribute('aria-activedescendant')}`);

    // Change the targetString to represente the new current date
    const x: string = curDay.firstChild.nodeValue;
    this.targetString =
      (this.month < 9 ? '0' : '') +
      (this.month + 1) +
      '/' +
      (parseInt(x, 10) < 9 ? '0' : '') +
      curDay.firstChild.nodeValue +
      '/' +
      this.year;

    // Hide modal Dialog
    this.hideDlg();

    e.stopPropagation();
    return false;
  }

  /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
  addEventListenerList(thisobj) {
    const list = this.grid.querySelectorAll('td');
    let i = 0;
    const len = list.length;
    for (i = 0; i < len; i++) {
      const itemList = list[i];
      /*itemList.addEventListener('click', function(e){
          return thisobj.handleGridClick(this, e);
        });*/
      thisobj.renderer.listen(itemList, 'click', e => {
        return thisobj.handleGridClick(itemList, e);
      });
    }
  }

  /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
  handlePrevClick(e): boolean {
    const active = this.grid.getAttribute('aria-activedescendant');
    if (e.ctrlKey) {
      this.showPrevYear();
    } else {
      this.showPrevMonth(1);
    }
    if (this.currentDate === false) {
      this.grid.setAttribute('aria-activedescendant', 'day1');
    } else {
      this.grid.setAttribute('aria-activedescendant', 'active');
    }

    e.stopPropagation();
    return false;
  }

  /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
  handleNextClick(e): boolean {
    const active = this.grid.getAttribute('aria-activedescendant');

    if (e.ctrlKey) {
      this.showNextYear();
    } else {
      this.showNextMonth(1);
    }
    if (this.currentDate === false) {
      this.grid.setAttribute('aria-activedescendant', 'day1');
    } else {
      this.grid.setAttribute('aria-activedescendant', active);
    }

    e.stopPropagation();
    return false;
  }

  /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
  handlePrevKeyDown(e): boolean {
    if (e.altKey) {
      return true;
    }

    switch (e.keyCode) {
      case this.keys.tab: {
        e.preventDefault();
        if (e.ctrlKey) {
          return true;
        } else if (e.shiftKey) {
          this.grid.focus();
        } else {
          this.next.focus();
        }

        e.stopPropagation();
        return false;
      }
      case this.keys.enter:
      case this.keys.space: {
        if (e.shiftKey) {
          return true;
        }
        if (e.ctrlKey) {
          this.showPrevYear();
        } else {
          this.showPrevMonth(1);
        }

        e.stopPropagation();
        return false;
      }
    }
    return true;
  }

  /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
  handleNextKeyDown(e): boolean {
    // Alt
    if (e.altKey) {
      return true;
    }
    // ENTER OR SPACE
    switch (e.keyCode) {
      case this.keys.enter:
      case this.keys.space: {
        // CTRL + SPACE   OR CTRL + ENTER
        if (e.ctrlKey) {
          this.showNextYear();
        } else {
          this.showNextMonth(1);
        }

        e.stopPropagation();
        return false;
      }
    }
    return true;
  }

  /* ************************** SHOW DIALOG ********************** */
  showDlg(): void {
    const thisObj = this;
    // Bind Event Listener
    thisObj.renderer.listen(this.eRef.nativeElement, 'click', e => {
      return thisObj.showDialogMethod(e);
    });

    thisObj.renderer.listen(this.eRef.nativeElement, 'mousedown', e => {
      return thisObj.showDialogMethod(e);
    });

    thisObj.renderer.listen(this.eRef.nativeElement, 'mouseup', e => {
      return thisObj.showDialogMethod(e);
    });

    thisObj.renderer.listen(this.eRef.nativeElement, 'mousemove', e => {
      return thisObj.showDialogMethod(e);
    });

    thisObj.renderer.listen(this.eRef.nativeElement, 'mouseover', e => {
      return thisObj.showDialogMethod(e);
    });

    thisObj.dp.setAttribute('aria-hidden', 'false');

    this.grid.focus();
  }

  /* ************************** ShowDialog Modal Method ********************** */
  showDialogMethod(e): boolean {
    this.grid.focus();
    e.stopPropagation();
    return false;
  }

  /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
  handleGridKeyDown(e): boolean {
    const rows = this.grid.querySelectorAll('tbody tr');
    const curDay = this.eRef.nativeElement.querySelector(`#${this.grid.getAttribute('aria-activedescendant')}`);
    let days = this.grid.querySelectorAll('td:not(.empty)');
    const curRow = curDay.parentElement;
    // ALT
    if (e.altKey) {
      return true;
    }

    // TAB
    switch (e.keyCode) {
      case this.keys.tab: {
        e.preventDefault();
        if (this.bModal === true) {
          // SHIFT + TAB
          if (e.shiftKey) {
            this.next.focus();
          } else {
            this.prev.focus();
          }
          e.stopPropagation();
          return false;
        }
        break;
      }

      // ENTER OR SPACE
      case this.keys.enter:
      case this.keys.space: {
        // CTRL ENTER OR CTRL SPACE
        if (e.ctrlKey) {
          return true;
        }
        // update targent box
        this.targetString =
          (this.month < 9 ? '0' : '') + (this.month + 1) + '/' + curDay.firstChild.nodeValue + '/' + this.year;
        this.hideDlg();
        return false;
      }

      // ESCAPE
      case this.keys.esc: {
        this.hideDlg();
        e.stopPropagation();
        return false;
      }

      // LEFT
      case this.keys.left: {
        // LEFT + CTRL OR LEFT + SHIFT
        if (e.ctlrKey || e.shiftKey) {
          return true;
        }
        days = Array.prototype.slice.call(days);
        const dayIndex = days.indexOf(curDay) - 1;
        let prevDay = null;

        if (dayIndex >= 0) {
          prevDay = days[dayIndex];
          curDay.classList.remove('focus');
          curDay.setAttribute('aria-selected', 'false');
          prevDay.classList.add('focus');
          prevDay.setAttribute('aria-selected', 'true');

          this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
        } else {
          this.showPrevMonth(1);
        }
        e.stopPropagation();
        return false;
      }

      // RIGHT
      case this.keys.right: {
        if (e.ctrlKey || e.shiftKey) {
          return true;
        }
        days = Array.prototype.slice.call(days);
        const dayIndex = days.indexOf(curDay) + 1;
        let nextDay = null;

        if (dayIndex < days.length) {
          nextDay = days[dayIndex];
          curDay.classList.remove('focus');
          curDay.setAttribute('aria-selected', 'false');
          nextDay.classList.add('focus');
          nextDay.setAttribute('aria-selected', 'true');

          this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
        } else {
          this.showNextMonth(1);
        }
        e.stopPropagation();
        return false;
      }

      // UP
      case this.keys.up: {
        if (e.ctrlKey || e.shiftKey) {
          return true;
        }
        days = Array.prototype.slice.call(days);
        let dayIndex = days.indexOf(curDay) - 7;
        let prevDay = null;

        if (dayIndex > 0) {
          prevDay = days[dayIndex];

          curDay.classList.remove('focus');
          curDay.setAttribute('aria-selected', 'false');
          prevDay.classList.add('focus');
          prevDay.setAttribute('aria-selected', 'true');

          this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
        } else {
          days = Array.prototype.slice.call(days);
          dayIndex = 3 - days.indexOf(curDay) + 7;
          this.showPrevMonth(dayIndex);
        }
        e.preventDefault();
        return false;
      }

      // DOWN
      case this.keys.down: {
        if (e.ctrlKey || e.shiftKey) {
          return true;
        }
        days = Array.prototype.slice.call(days);
        let dayIndex = days.indexOf(curDay) + 7;
        let nextDay = null;

        if (dayIndex < days.length) {
          nextDay = days[dayIndex];

          curDay.classList.remove('focus');
          curDay.setAttribute('aria-selected', 'false');
          nextDay.classList.add('focus');
          nextDay.setAttribute('aria-selected', 'true');

          this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
        } else {
          days = Array.prototype.slice.call(days);
          dayIndex = 8 - (days.length - days.indexOf(curDay));

          this.showNextMonth(dayIndex);
        }
        e.preventDefault();
        return false;
      }

      // PAGE UP
      case this.keys.pageup: {
        const active = this.grid.getAttribute('aria-activedescendant');

        if (e.shifKey) {
          return true;
        }
        if (e.ctrlKey) {
          this.showPrevYear();
        } else {
          this.showPrevMonth(1);
        }
        if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
          const lastDay = 'day' + this.calcNumDays(this.year, this.month);
          const lastDayId = this.grid.querySelector('#' + lastDay);
          lastDayId.classList.add('focus');
          lastDayId.setAttribute('aria-selected', 'true');
        } else {
          const lastDayId = this.grid.querySelector('#' + active);
          lastDayId.classList.add('focus');
          lastDayId.setAttribute('aria-selected', 'true');
        }
        e.preventDefault();
        return false;
      }

      // PAGE DOWN
      case this.keys.pagedown: {
        const active = this.grid.getAttribute('aria-activedescendant');

        if (e.shifKey) {
          return true;
        }
        if (e.ctrlKey) {
          this.showNextYear();
        } else {
          this.showNextMonth(1);
        }
        if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
          const lastDay = 'day' + this.calcNumDays(this.year, this.month);
          const lastDayId = this.grid.querySelector('#' + lastDay);
          lastDayId.classList.add('focus');
          lastDayId.setAttribute('aria-selected', 'true');
        } else {
          const lastDayId = this.grid.querySelector('#' + active);
          lastDayId.classList.add('focus');
          lastDayId.setAttribute('aria-selected', 'true');
        }
        e.preventDefault();
        return false;
      }

      // HOME
      case this.keys.home: {
        if (e.ctrlKey || e.shiftKey) {
          return true;
        }
        curDay.classList.remove('focus');
        curDay.setAttribute('aria-selected', 'false');

        this.grid.querySelector('#day1').classList.add('focus');
        this.grid.querySelector('#day1').setAttribute('aria-selected', 'true');
        this.grid.setAttribute('aria-activedescendant', 'day1');
        e.stopPropagation();
        return false;
      }

      // END
      case this.keys.end: {
        if (e.ctrlKey || e.shiftKey) {
          return true;
        }

        const lastDay = 'day' + this.calcNumDays(this.year, this.month);
        curDay.classList.remove('focus');
        curDay.setAttribute('aria-selected', 'false');

        this.grid.querySelector('#' + lastDay).classList.add('focus');
        this.grid.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
        this.grid.setAttribute('aria-activedescendant', lastDay);
        e.stopPropagation();
        return false;
      }
    }
    return true;
  }

  /* ****************** Hide modal on click outiside ******************* */
  @HostListener('document:click', ['$event'])
  clickedOutside(event) {
    // here you can hide your menu
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.hideDlg();
    }
  }

  /* ************************** HIDE MODAL DIALOG ********************** */
  hideDlg(): void {
    const thisObj = this;

    thisObj.renderer.destroy();
    thisObj.dp.setAttribute('aria-hidden', 'true');
    this.target.focus();
  }

  /* ************************** SHOW PREVIOUS MONTH ********************** */
  showPrevMonth(offset) {
    if (this.month === 0) {
      this.month = 11;
      this.year--;
    } else {
      this.month--;
    }

    if (this.month !== this.curMonth || this.year !== this.curYear) {
      this.currentDate = false;
    } else {
      this.currentDate = true;
    }

    this.fillGrid();
    this.monthString = this.monthNames[this.month] + ' ' + this.year;
    this.addEventListenerList(this);

    if (offset !== null) {
      const numDays = this.calcNumDays(this.year, this.month);
      const day = 'day' + (numDays - offset);

      this.grid.setAttribute('aria-activedescendant', day);
      this.grid.querySelector('#' + day).classList.add('focus');
      this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
    }
  }

  /* ************************** SHOW NEXT MONTH ********************** */
  showNextMonth(offset) {
    if (this.month === 11) {
      this.month = 0;
      this.year++;
    } else {
      this.month++;
    }

    if (this.month !== this.curMonth || this.year !== this.curYear) {
      this.currentDate = false;
    } else {
      this.currentDate = true;
    }

    this.fillGrid();
    this.monthString = this.monthNames[this.month] + ' ' + this.year;
    this.addEventListenerList(this);

    if (offset !== null) {
      const day = 'day' + offset;

      this.grid.setAttribute('aria-activedescendant', day);
      this.grid.querySelector('#' + day).classList.add('focus');
      this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
    }
  }

  /* ************************** SHOW PREVIOUS YEAR ********************** */
  showPrevYear() {
    this.year--;

    if (this.month !== this.curMonth || this.year !== this.curYear) {
      this.currentDate = false;
    } else {
      this.currentDate = true;
    }

    this.fillGrid();
    this.monthString = this.monthNames[this.month] + ' ' + this.year;
    this.addEventListenerList(this);
  }

  /* ************************** SHOW NEXT YEAR ********************** */
  showNextYear() {
    this.year++;

    if (this.month !== this.curMonth || this.year !== this.curYear) {
      this.currentDate = false;
    } else {
      this.currentDate = true;
    }

    this.fillGrid();
    this.monthString = this.monthNames[this.month] + ' ' + this.year;
    this.addEventListenerList(this);
  }

  /* ************************** FILL THE GRID ********************** */
  fillGrid() {
    const numDays = this.calcNumDays(this.year, this.month);
    const startWeekDay = this.calcStarWeekDay(this.year, this.month);
    let weekDay = 0;
    let curDay = 1;
    let rowCount = 1;
    this.tbody = this.grid.querySelector('tbody');
    let gridCells = '\t<tr id="row0">\n';

    while (this.tbody.firstChild) {
      this.tbody.removeChild(this.tbody.firstChild);
    }

    // Insert Empty Cells
    for (weekDay = 0; weekDay < startWeekDay; weekDay++) {
      gridCells += '\t\t<td class="empty">&nbsp; </td>\n';
    }

    // Insert the days of the month
    for (curDay = 1; curDay <= numDays; curDay++) {
      if (curDay === this.date && this.currentDate === true) {
        gridCells +=
          '\t\t<td id="day' +
          curDay +
          '" class="today"' +
          'headers="row' +
          rowCount +
          ' ' +
          this.dayNames[weekDay] +
          '" ' +
          'role="gridcell" aria-selected="false">' +
          curDay +
          '</td> \n';
      } else {
        gridCells +=
          '\t\t<td id="day' +
          curDay +
          '" headers="row' +
          rowCount +
          ' ' +
          this.dayNames[weekDay] +
          '" ' +
          'role="gridcell" aria-selected="false">' +
          curDay +
          '</td> \n';
      }

      // Last day of week
      if (weekDay === 6 && curDay < numDays) {
        gridCells += '\t</tr>\n\t<tr id="row' + rowCount + '">\n';
        rowCount++;
        weekDay = 0;
      } else {
        weekDay++;
      }
    }

    // Insert empty cells
    for (weekDay; weekDay < 7; weekDay++) {
      gridCells += '\t\t<td class="empty">&nbsp;</td>\n';
    }
    gridCells += '\t </tr>';

    this.tbody.insertAdjacentHTML('beforeend', gridCells);
  }

  /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
  calcNumDays(year, month) {
    return 32 - new Date(year, month, 32).getDate();
  }

  /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
  calcStarWeekDay(year, month) {
    return new Date(year, month, 1).getDay();
  }
}
