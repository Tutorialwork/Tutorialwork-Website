import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
  private readonly isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
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

}
