import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

// import QuillBetterTable from 'quill-better-table';

declare const Quill: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  @ViewChild('editable', {static: true}) editRef: ElementRef;

  quill: any;


  ngOnInit() {
    setTimeout(() => {
      this.initEditor();
    }, 1000)
  }

  initEditor(): void {
    Quill.register({
      'modules/better-table': quillBetterTable
    }, true);
    // tslint:disable-next-line:no-unused-expression
    this.quill = new Quill(this.editRef.nativeElement, {
          theme: 'snow',
          modules: {
            table: false,
            'better-table': {
              operationMenu: {
                items: {
                  unmergeCells: {
                    text: 'Another unmerge cells name'
                  }
                },
                color: {
                  colors: ['green', 'red', 'yellow', 'blue', 'white'],
                  text: 'Background Colors:'
                }
              }
            },
            keyboard: {
              bindings: quillBetterTable.keyboardBindings
            }
          }
        }
    );
  }

  ngAfterViewInit() {

  }

  onInsertTable() {
    const tableModule = this.quill.getModule('better-table');
    tableModule.insertTable(3, 3);
  }
}