import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { env } from '../../environments/env'
import { User } from '../models/user'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    readonly baseUrl = `${env.apiUrl}/users`

    constructor(private http: HttpClient) {}

    currentUser() {
        const url = `${this.baseUrl}/current`
        return this.http.get<User | undefined>(url)
    }

    checkUsernameInUse(username: string) {
        const url = `${this.baseUrl}/username-in-use/${username}`
        return this.http.get<boolean>(url)
    }

    checkEmailInUse(email: string) {
        const url = `${this.baseUrl}/email-in-use/${email}`
        return this.http.get<boolean>(url)
    }
}
