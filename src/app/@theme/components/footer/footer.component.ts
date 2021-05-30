import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https:/www.ethunes.com" target="_blank">Team ETHunes</a> for the web3weekend</b> 2021
    </span>
    <div class="socials">
      <a href="https://github.com/Ethunes" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
