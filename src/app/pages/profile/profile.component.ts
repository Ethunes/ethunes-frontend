import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo, gql } from 'apollo-angular'
import { of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'
import Observable from 'zen-observable'
import { WalletService } from '../../services/wallet.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  songs: any[] = []
  listings: any[] = []
  account: string

  constructor(
    private apollo: Apollo,
    private wallet: WalletService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.paramMap
      .pipe(
        map(paramMap => paramMap.get('account'))
      )
      .subscribe(account => this.account = account)
  }

  query = gql`
  query ($owner: String)
  {
    listings(where: {issuer: $owner}) {
      id
      amount
      price
      issuer {
        id
      }
    }
    songs(where: { creator: $owner}) {
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

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map(paramMap => paramMap.get('account')),
        switchMap(account => this.apollo.watchQuery<any>({
          variables: {
            owner: account.toLowerCase()
          },
          query: this.query
        }).valueChanges))
      .subscribe(response => {
        this.songs = response?.data?.songs
        this.listings = response?.data?.listings
      }
      )
  }

}
