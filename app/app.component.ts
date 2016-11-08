import {Component} from "@angular/core";

@Component({
	selector: 'angular2homework-app',
	templateUrl: './templates/angular2homework-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}