import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_NAME = "http://194.163.169.47:5000"

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {
    let data = new FormData;
    data.append('email', email);
    data.append('password', password);

    return this.http.post<any>(this.BASE_NAME + "/login.php", data).subscribe(res => {
      if (res.code == 1) {
        localStorage.setItem('Token', res.data.accessToken)
        this.router.navigateByUrl("/hierarchies-details")
      } else {
        alert("error email  or password");
      }
    })
  }

  isLogin() {
    return localStorage.getItem("Token") != null
  }

  logout() {
    localStorage.removeItem("Token")
    this.router.navigateByUrl("/")
  }
}
