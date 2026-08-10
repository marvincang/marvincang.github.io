import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ConfigService } from '../../services/config-service';
import { ButtonModule } from 'primeng/button';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  selector: 'app-main-page',
  imports: [ButtonModule, PIcon],
  templateUrl: './main-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main-page.css',
})
export class MainPage {
  configService = inject(ConfigService);
  contents = computed(() => this.configService.getMainPageContents());

  Object = Object;
  aboutTexts = [
    `I am a software engineer with a strong foundation in building tools that help
    developers work better. Over seven years at NCR Voyix, I led teams that designed
    internal platforms, standardized CI/CD practices, and shipped developer tooling used daily
    by hundreds of engineers.`,
    `I hold a Master's degree in Computer Science from Georgia Institute of Technology (2019), where I specialized in Interactive Intelligence, 
    a middle ground where AI and humans meet. My primary research interests are in healthcare AI, computer graphics, and natural language processing.`,
    `Now, I'm returning to academia as an incoming PhD student at Georgia State University to
    pursue research in AI, with a focus on applicable day-to-day AI systems with my industrial experience in distributed systems and
    platform engineering.`,
  ];
  skills: { [key: string]: string[] } = {
    languages: ['TypeScript', 'Python', 'C#'],
    platforms: ['Node.js', 'Angular', 'React', '.NET'],
    tooling: ['Git', 'Docker', 'Kubernetes', 'Google Cloud'],
    interests: ['Web Development', 'Machine Learning', 'Cloud Computing', 'DevOps'],
  };
}
