import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'

@Component({
  selector: 'app-start',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  songs:any[]
  loading= true

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query: gql`{
        songs {
                id
                title
                description
                image
                url
                creator {
                  id
                }
                owner {
                  id
                }
                licenses {
                  categoryId
                  purposeId
                }
        }
      }
      `
    }).subscribe(response=>{
      this.loading = response.loading

      this.songs = response?.data?.songs
    }
    )
  }

}
