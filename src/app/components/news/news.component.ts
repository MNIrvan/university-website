import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent {
  news = [
    {
      img: '/assets/img/news-1.jpg',
      title: 'Pelatihan Digital Polinema',
      excerpt: 'Pelatihan pengembangan sistem digital berlangsung...'
    },
    {
      img: '/assets/img/news-2.jpg',
      title: 'Kegiatan Mahasiswa',
      excerpt: 'Mahasiswa mengikuti lomba ...'
    },
    {
      img: '/assets/img/news-1.jpg',
      title: 'Pengumuman Beasiswa',
      excerpt: 'Pengumuman beasiswa untuk mahasiswa berprestasi...'
    }
  ];
}
