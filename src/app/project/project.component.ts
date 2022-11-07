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

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // @ts-ignore
      document.querySelector('#' + this.projectName + '-heading').style.color = this.projectColor;
      // @ts-ignore
      document.querySelector('#' + this.projectName + '-button').style.color = this.projectColor;
      document.querySelectorAll('.social-container img').forEach((socialLogo: any) => {
        console.log(socialLogo);
        socialLogo.addEventListener('mouseover', () => {
          socialLogo.style.filter = 'opacity(.5) invert(63%) sepia(91%) saturate(533%) hue-rotate(172deg) brightness(97%) contrast(81%)';
        });
        socialLogo.addEventListener('mouseout', () => {
          socialLogo.style.filter = '';
        });
      });
    }, 10);
  }

}
