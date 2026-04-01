import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ats',
  imports:[CommonModule, RouterModule],
  templateUrl: './ats.component.html',
  styleUrls: ['./ats.component.scss']
})
export class AtsComponent {

  features = [
    {
      icon: 'bi bi-search',
      title: 'Keyword Matching',
      description: 'We analyze job descriptions and optimize your resume with relevant keywords.'
    },
    {
      icon: 'bi bi-file-earmark-text',
      title: 'ATS Formatting',
      description: 'Clean layouts ensuring compatibility with all ATS software.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Higher Ranking',
      description: 'Boost your chances of getting shortlisted by recruiters.'
    }
  ];

}