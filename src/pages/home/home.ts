import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Prayer } from '../../app/model/prayer/prayer.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentDate;
  formattedDate;
  formatTime;
  prayers:any[];
  constructor(public navCtrl: NavController) {
    this.currentDate = new Date();
    this.getFormattedDate();
     this.prayers = Prayer;
     console.log(this.prayers);
     
  }
  getFormattedDate() {
    var dateObj = new Date();
    var year = dateObj.getFullYear().toString();
    var month = dateObj.getMonth().toString();
    var date = dateObj.getDate().toString();
    var day = dateObj.getDay().toString();
    var hours = dateObj.getHours();
    var minutes = dateObj.getMinutes();
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minute =  (minutes < 10) ? '0'+minutes : minutes;
    




    var monthArray = ['Jan','Feb','Mar','Apr','May','Jun'];
    var dayArray = ['Mon','Tue','Wed','Thu','Fri'];

    this.formattedDate = dayArray[day] +' '+' '+ date+' '+ monthArray[month]+','+ year;
    this.formatTime = hours +':'+ minute+' '+amPm;


  }

}
