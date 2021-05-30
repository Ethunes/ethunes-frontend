import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { EthunesService } from '../../services/ethunes.service'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  songs:any[] = []
  listings:any[] = []
  loading = true

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query: gql`{
        listings(first: 5){
          id
          amount
          price
          issuer{
            id
          }
        }
        songs(first: 5) {
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
      this.songs = response.data?.songs
    }
    )
  }

}
