import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() public projectName: string = '';
  @Input() public projectDescription: string = '';
  @Input() public projectWebsiteUrl: string = '';
  @Input() public projectColor: string = '';
  @Input() public hasSocialMedia: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // @ts-ignore
      document.querySelector('#' + this.projectName + '-heading').style.color = this.projectColor;
      // @ts-ignore
      document.querySelector('#' + this.projectName + '-button').style.color = this.projectColor;
    }, 10);
  }

}
