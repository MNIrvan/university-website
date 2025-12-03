/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-campus-life',
  standalone: true,
  imports: [],
  templateUrl: './campus-life.component.html',
  styleUrl: './campus-life.component.css'
})
export class CampusLifeComponent {

}
*/

// ========================================
// CAMPUS LIFE COMPONENT
// ========================================

// src/app/components/campus-life/campus-life.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  BookOpen, Award, Star, Users, CheckCircle 
} from 'lucide-angular';

@Component({
  selector: 'app-campus-life',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './campus-life.component.html',
  styleUrls: ['./campus-life.component.css']
})
export class CampusLifeComponent {
  readonly BookOpen = BookOpen;
  readonly Award = Award;
  readonly Star = Star;
  readonly Users = Users;
  readonly CheckCircle = CheckCircle;

  organizationCategories = [
    { name: 'Academic Clubs', count: '50+', icon: BookOpen, color: 'blue' },
    { name: 'Sports Teams', count: '30+', icon: Award, color: 'green' },
    { name: 'Arts & Culture', count: '40+', icon: Star, color: 'purple' },
    { name: 'Community Service', count: '35+', icon: Users, color: 'orange' }
  ];

  facilities = [
    { 
      title: 'Modern Dormitories', 
      desc: 'Comfortable on-campus housing with Wi-Fi, study lounges, and recreational facilities', 
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400',
      features: ['Single & Double Rooms', '24/7 Security', 'Laundry Facilities']
    },
    { 
      title: 'Fitness & Recreation', 
      desc: 'State-of-the-art gym with Olympic pool, basketball courts, and training facilities', 
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      features: ['Gym & Pool', 'Sports Courts', 'Yoga Studio']
    },
    { 
      title: 'Student Center Hub', 
      desc: 'Central hub for dining, events, student services, and social activities', 
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400',
      features: ['Dining Options', 'Event Spaces', 'Study Areas']
    }
  ];

  testimonials = [
    { 
      name: 'Sarah Johnson', 
      major: 'Computer Science, Class of 2025', 
      quote: 'The research opportunities and supportive community here have been absolutely incredible. I\'ve grown both academically and personally.' 
    },
    { 
      name: 'Michael Chen', 
      major: 'Business Administration, Class of 2024', 
      quote: 'Excellence University prepared me perfectly for my career. The internship connections and mentorship programs are unmatched.' 
    },
    { 
      name: 'Emily Rodriguez', 
      major: 'Medicine, Class of 2026', 
      quote: 'The hands-on clinical experience and world-class faculty make this medical program one of the best. I couldn\'t be happier with my choice.' 
    }
  ];

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}