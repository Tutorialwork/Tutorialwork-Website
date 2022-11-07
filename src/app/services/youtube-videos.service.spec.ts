import { TestBed } from '@angular/core/testing';

import { YoutubeVideosService } from './youtube-videos.service';

describe('YoutubeVideosService', () => {
  let service: YoutubeVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
