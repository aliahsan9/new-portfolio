import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports:[RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills = [
    { name: 'CV Writing', description: 'Craft professional and ATS-friendly CVs.' },
    { name: 'Resume Design', description: 'Clean layout and modern styling for all roles.' },
    { name: 'ATS Optimization', description: 'Ensure your CV passes automated screenings.' },
    { name: 'Content Writing', description: 'Tailored content highlighting skills & achievements.' },
    { name: 'Professional Formatting', description: 'Structured, easy-to-read CV layouts.' },
    { name: 'Template Designing', description: 'Custom templates for various industries.' },
    { name: 'Career Counseling', description: 'Advice on job applications & market trends.' },
    { name: 'Keyword Optimization', description: 'CVs optimized for recruiter searches.' },
  ];

  services = [
    { title: 'Professional CV Designs', description: 'Modern, European-style CVs for all industries.' },
    { title: 'Customized Content', description: 'CVs tailored to specific job roles & markets.' },
    { title: 'Fast Delivery', description: 'Quick turnaround with high-quality results.' },
    { title: 'Affordable Pricing', description: 'Value-driven packages for all clients.' },
  ];

  whyChooseUs = [
    { title: '10+ Years Experience', description: 'Proven expertise in CV writing & resume design.' },
    { title: 'ATS-Friendly CVs', description: 'CVs designed to pass automated screenings.' },
    { title: 'Clean & Modern Layouts', description: 'Professional formatting for all job types.' },
    { title: '100% Client Satisfaction', description: 'Dedicated support and customized CVs.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}