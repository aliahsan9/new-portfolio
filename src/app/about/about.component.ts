import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports:[CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  experience = [
    { title: 'CV Writing', description: 'Crafting professional CVs tailored to every job role.' },
    { title: 'Resume Design', description: 'Clean, modern layouts that impress recruiters.' },
    { title: 'ATS Optimization', description: 'CVs designed to pass automated screening systems.' },
    { title: 'Content Customization', description: 'Highlighting your achievements effectively.' },
    { title: 'European & Gulf Standards', description: 'CVs compliant with international markets.' },
    { title: 'Career Guidance', description: 'Advice on job applications and strategies.' }
  ];

  industries = [
    { name: 'Driving' },
    { name: 'Administration' },
    { name: 'Technical' },
    { name: 'Customer Service' },
    { name: 'IT & Software' },
    { name: 'Healthcare' }
  ];

  constructor() { }

  ngOnInit(): void { }

}