import { Component, OnInit } from '@angular/core';
import { DataCacheService } from '../../services/data-cache.service';
import { MusicService } from '../../services/music.service';
import { Song } from '../../interfaces/song';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  musicData: Song[];

  constructor(private musicService: MusicService, private dataCacheService: DataCacheService) {}

  ngOnInit() {
    const cachedMusicData = this.dataCacheService.getCachedMusicData();
    if (cachedMusicData && cachedMusicData.length) {
      this.musicData = cachedMusicData;
    } else {
      this.musicService.getMyMusic().then(songs => {
        this.musicData = songs || [];
        this.musicData = songs.sort((a, b) => {
          return a.title === b.title ? 0 : a.title > b.title ? 1 : -1;
        });
        this.dataCacheService.cacheMusicData(this.musicData);
      });
    }
  }
}
