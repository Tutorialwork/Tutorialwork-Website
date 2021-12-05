import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { BasicMetaTags } from '../models/BasicMetaTags';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  public basicKeywords: string[] = ['tutorialwork'];

  constructor(private meta: Meta) { }

  public setBasicMetaTags(content: BasicMetaTags): void {
    this.meta.addTag({ name: 'title', content: content.title });
    this.meta.addTag({ name: 'description', content: content.description });
    this.meta.addTag({ name: 'keywords', content: content.keywords.concat(this.basicKeywords).join(',') });
  }

}
