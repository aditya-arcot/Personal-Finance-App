import { Component } from '@angular/core'
import { Router, RouterOutlet } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { NotificationComponent } from './components/notification/notification.component'
import { AuthService } from './services/auth.service'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, NotificationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    constructor(
        public authSvc: AuthService,
        public router: Router
    ) {}
}
