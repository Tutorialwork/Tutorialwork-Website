import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  @Input() public skillName: string = '';
  @Input() public skillProgress: number = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // @ts-ignore
      document.querySelector('#' + this.skillName + '-progress').style.width = this.skillProgress + '%'
    }, 10);
  }

}
