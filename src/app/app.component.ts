import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aemtexas';
  show: boolean;

  ngOnInit() {
  this.show = false;
  }

  toggle(): void {
    this.show = !this.show;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("logo").style.height = "8vh";
    } else {
      document.getElementById("logo").style.height = "13vh";
    }
  }
}
