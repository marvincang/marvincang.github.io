import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main-page.css',
})
export class MainPage {
  Object = Object;
  aboutTexts = [
    `I am a software engineer and researcher with a strong foundation in building tools that help
    developers work better. Over five years at NCR Corporation, I led teams that designed
    internal platforms, standardized CI/CD practices, and shipped developer tooling used daily
    by hundreds of engineers.`,
    `I hold a Master's degree in Computer Science from Georgia Tech (2019), where I developed
    deep interests in systems design, software scalability, and the human side of engineering —
    how teams build, communicate, and ship.`,
    `Now, I'm returning to academia as an incoming PhD student at Georgia State University to
    pursue research at the intersection of developer experience, distributed systems, and
    platform engineering.`,
  ];
  skills: { [key: string]: string[] } = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    platforms: ['Node.js', 'Angular', 'React', 'Django', 'Flask'],
    tooling: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure'],
    interests: ['Web Development', 'Machine Learning', 'Cloud Computing', 'DevOps', 'Open Source'],
  };
}
