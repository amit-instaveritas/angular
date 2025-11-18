import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile/profile';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  profileData: any;
  userId!: number | null;
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.userId = this.authService.getUserId();

    this.route.paramMap.subscribe(params => {
      const profileId = Number(params.get('id'));
      this.profileService.getUserProfile(profileId).subscribe((data) => {
        this.profileData = data;
        this.changeDetectorRef.detectChanges();
      });
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
