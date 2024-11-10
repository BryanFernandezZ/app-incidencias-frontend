import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseDto } from '../dto/login.response';
import { LoginRequestDto } from '../dto/login.request';
import { UserSession } from '../model/user-session.model';
import * as jose from 'jose';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.api_url;

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(loginRequest: LoginRequestDto): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(`${this.baseUrl}/login`, loginRequest);
  }

  setUserSession(loginResponse: LoginResponseDto) {
    const token = loginResponse.token;
    const payload = jose.decodeJwt(token) as UserSession;
    localStorage.setItem("access_token", token);
    localStorage.setItem("user", JSON.stringify(payload));
  }

  getUserSession(): UserSession {
    const jsonString = localStorage.getItem("user")!;
    return JSON.parse(jsonString) as UserSession;
  }

  getAccessToken(): string {
    const accessToken = localStorage.getItem("access_token")!;
    return accessToken;
  }

  clearUserSession() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
  }
}
