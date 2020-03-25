import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  employees: any[];

  constructor() {
    this.employees = [
      { code: '1', name: 'firoz', gender: 'male'},
      { code: '2', name: 'shaik', gender: 'male'},
      { code: '3', name: 'shami', gender: 'male'},
      { code: '4', name: 'baji', gender: 'female'},
      { code: '5', name: 'ammi', gender: 'female'},
    ];
   }
   getTotalEmployees(): number {
     return this.employees.length;
   }

   getTotalFemaleEmployees(): number {
    return this.employees.filter(e => e.gender === 'female').length;
  }

  getTotalMaleEmployees(): number {
    return this.employees.filter(e => e.gender === 'male').length;
  }


  ngOnInit(): void {
  }

}
