import { Component, Input, OnInit } from '@angular/core';
import { PlayerService, Track } from '../../@core/utils/player.service';

@Component({
  selector: 'song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  track: Track;
  player: HTMLAudioElement;
  @Input() song: any

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.track = new Track()
    this.track.cover = this.song.image
    this.track.url = this.song.url
    this.createPlayer();
  }

  playPause() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private createPlayer() {
    this.player = new Audio();
    this.setTrack();
  }

  private setTrack() {
    this.player.src = this.track.url;
    this.player.load();
  }

}
