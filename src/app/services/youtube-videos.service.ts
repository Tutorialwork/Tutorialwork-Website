import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YouTubeVideoResults} from '../models/YouTubeVideoResults';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideosService {

  constructor(private http: HttpClient) { }

  public getNewestVideos(videoCount: number): Observable<YouTubeVideoResults> {
    return this.http.get<YouTubeVideoResults>(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC90-5pI2YMJaEpOyPfNWizA&maxResults=${videoCount}&order=date&key=AIzaSyD99sCZQ3uwdbeEoJuVupRv4rHO3TXaRHE`
    );
  }

}
