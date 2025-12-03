import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-slider',
  templateUrl: './anouncementslider.component.html'
})
export class AnnouncementSliderComponent {
  slides = [
    { img: '/assets/img/slider-1.jpg', title: 'Pengumuman Pendaftaran', subtitle: 'Pendaftaran dibuka sampai ...' },
    { img: '/assets/img/slider-2.jpg', title: 'Info Kegiatan', subtitle: 'Workshop & Seminar ...' },
    // tambahkan sesuai kebutuhan
  ];
}
