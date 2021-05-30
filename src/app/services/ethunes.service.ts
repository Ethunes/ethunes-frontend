import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EthunesService {

  constructor(private apollo: Apollo) { }

  listSongs() {
    return this.apollo.query<any>({
      query: gql`{
        songs {
                id
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
    }).pipe(
      map(response=>response?.data?.songs)
    )
  }
}
