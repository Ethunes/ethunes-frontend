import { Injectable } from '@angular/core'
import { WalletService } from './wallet.service'
import { create } from 'ipfs-http-client'
const MarketplaceABI = require('../contracts/EthunesMarketplace.json')
@Injectable({
  providedIn: 'root'
})
export class EthunesService {

  marketplace: any

  constructor(private wallet: WalletService) {
    this.marketplace = new wallet.web3.eth.Contract(MarketplaceABI.abi, '0x32d2A61A5da441C6834aD54B4f9B8Bd2a55844dF')
  }

  async addSong(songUri: string) {
    const song = await this.marketplace.methods.publishSongAndLicense.call('0x32d2A61A5da441C6834aD54B4f9B8Bd2a55844dF', songUri, [], [], []).send({ from: this.wallet.activeAccount$.value })
    console.log(song)
  }

  async upload(file: File | string) {
    const INFURA_DOMAIN = 'ipfs.infura.io'
    const INFURA_PORT = 5001
    const infuraIpfsClient = create({ host: INFURA_DOMAIN, port: INFURA_PORT, protocol: 'https' })
    try {
      const video = {
        content: file,
        pin: true
      }
      const uploadedFile = await infuraIpfsClient.add(video)

      console.log(uploadedFile)

      return uploadedFile.path

    } catch (e) {
      console.error('Failed to save asset to IPFS', e)
    }
  }

}
