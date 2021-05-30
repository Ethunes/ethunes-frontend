import { Component, OnInit } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map } from 'rxjs/operators'
import { EthunesService } from '../../services/ethunes.service'

@Component({
  selector: 'app-start',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listings: any[] = []
  loading = true

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query: gql`{
        listings{
          id
          amount
          price
          issuer{
            id
          }
        }
      }
      `
    }).subscribe(response => {
      this.listings = response?.data?.listings
      this.loading = response.loading
    }
    )
  }

}
