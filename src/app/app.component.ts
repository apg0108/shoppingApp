import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedNavigate = 'recipe';

  onNavigate(navigate: string) {
    this.loadedNavigate = navigate;
  }
}
