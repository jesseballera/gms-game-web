import {Injectable} from '@angular/core';

@Injectable(
  providedIn: 'root'
)

export class AuthService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000';

  // signal to track the current user state
  private currentUserSignal = signal<User | null>(this.getUserFromLocalStorage());

  // Public readly only signals
  currentUser = this.currentUserSignal.asReadonlySignal();
  isAuthenticated = computed(() => !!this.currentUser());

  // login(credentials: :Lo)
  

  private getUserFromLocalStorage(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
