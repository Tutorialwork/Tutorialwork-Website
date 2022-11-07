import { Component, OnInit } from '@angular/core';
import {YoutubeVideosService} from '../services/youtube-videos.service';
import {YouTubeVideoResults, Item} from '../models/YouTubeVideoResults';

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})
export class YoutubeVideosComponent implements OnInit {

  public videos: YouTubeVideoResults | undefined;

  constructor(private youtubeApiService: YoutubeVideosService) { }

  ngOnInit(): void {
    this.youtubeApiService.getNewestVideos(3)
      .subscribe((videos: YouTubeVideoResults) => {
        this.videos = videos;
      });
  }

  public openVideo(video: Item): void {
    window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank');
  }

}
