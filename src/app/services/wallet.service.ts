import { Injectable } from '@angular/core';
import Web3 from 'web3'
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  web3 = new Web3()
  web3Modal: any

  accounts$ = new Subject<string[]>()
  activeAccount$ = new BehaviorSubject<string>(undefined)

  constructor() {

    const providerOptions = {
      // walletconnect: {
      //   package: WalletConnectProvider, // required
      //   options: {
      //     infuraId: "INFURA_ID" // required
      //   }
      // }
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });

    this.connect()
  }

  async connect(){
    // this.web3Modal.clearCachedProvider();
    const provider = await this.web3Modal.connect(); // set provider
    this.web3.setProvider(provider); // create web3 instance
    const accounts = await this.web3.eth.getAccounts()
    provider.on('accountsChanged', async ()=>{
      const accounts = await this.web3.eth.getAccounts()
      this.accounts$.next(accounts);
      this.activeAccount$.next(accounts[0]);
    });
    this.accounts$.next(accounts);
    this.activeAccount$.next(accounts[0]);
  }
}
