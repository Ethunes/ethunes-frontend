import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop'
import { EthunesService } from '../../services/ethunes.service'

@Component({
  selector: 'app-start',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  songs: any[]
  loading = true

  trackUrl: string | undefined
  imageUrl: string | undefined
  title = ''
  description = ''

  checked = false

  constructor(private ethunes: EthunesService, private router: Router) { }

  ngOnInit(): void {
  }

  async addMusic(files: NgxFileDropEntry[]) {
    const fileEntry = files[0].fileEntry as FileSystemFileEntry
    fileEntry.file(async (file) => {
      this.trackUrl = await this.ethunes.upload(file)
    })
  }

  async addImage(files: NgxFileDropEntry[]) {
    const fileEntry = files[0].fileEntry as FileSystemFileEntry
    fileEntry.file(async (file) => {
      this.imageUrl = await this.ethunes.upload(file)
    })
  }

  async createSong() {
    const metadata = {
      name: this.title,
      external_uri: "https://ethunes.com/",
      description: this.description,
      animation_url: `http://ipfs.infura.io/ipfs/${this.trackUrl}`,
      animation_mime_type: "audio/mp3",
      image: `http://ipfs.infura.io/ipfs/${this.imageUrl}`,
      image_mime_type: "image/png"
      }

      var file = new File([JSON.stringify(metadata)], "metadata.json", {
        type: "application/json",
      });
    const songUri = await this.ethunes.upload(file)
    console.log({songUri})
    this.ethunes.addSong(songUri)
    this.router.navigate(['/songs'])
  }
}
