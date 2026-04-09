import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, ButtonModule, ButtonGroupModule],
  template: `
    <div class="min-h-screen pt-16">
      <!-- Hero -->
      <section class="relative min-h-screen flex items-center overflow-hidden">
        <div
          class="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block opacity-40"
          style="writing-mode:vertical-rl;font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.2em"
        >
          SENIOR — FULL STACK — ENGINEER
        </div>

        <div class="max-w-7xl mx-auto px-6 lg:px-24 w-full py-20">
          <div class="max-w-4xl">
            <!-- Status badge -->
            <div
              class="inline-flex items-center gap-3 px-4 py-2 mb-8"
              style="border:1px solid var(--color-border);animation:fadeInUp 0.7s ease-out 0.1s both"
            >
              <div
                class="w-2 h-2 rounded-full animate-pulse"
                style="background:var(--color-jade)"
              ></div>
              <span
                style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-muted);letter-spacing:0.15em"
              >
                STATUS: OPEN_TO_OPPORTUNITIES
              </span>
            </div>

            <!-- Heading -->
            <h1 class="mb-4" style="animation:fadeInUp 0.7s ease-out 0.2s both;opacity:0">
              <span
                class="block mb-3"
                style="font-family:var(--font-mono);font-size:0.8rem;color:var(--color-cyan);letter-spacing:0.15em"
              >
                &gt; Hello, I'm
              </span>
              <span
                class="block leading-none tracking-tight"
                style="font-family:var(--font-display);font-size:clamp(3rem,10vw,6rem);font-weight:900;color:var(--color-silver)"
              >
                Marvin
              </span>
              <span
                class="block leading-none tracking-tight gradient-text"
                style="font-family:var(--font-display);font-size:clamp(3rem,10vw,6rem);font-weight:900"
              >
                Cangcianno
              </span>
            </h1>

            <!-- Role -->
            <div
              class="flex items-center gap-2 mb-6"
              style="animation:fadeInUp 0.7s ease-out 0.4s both;opacity:0"
            >
              <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-cyan)"
                >//</span
              >
              <span
                style="font-family:var(--font-display);font-size:1.25rem;color:var(--color-silver-muted);font-weight:500;letter-spacing:0.05em"
              >
                Senior Full Stack Engineer
              </span>
              <span class="animate-blink" style="color:var(--color-cyan)">|</span>
            </div>

            <!-- Tagline -->
            <p
              class="text-lg mb-10 max-w-2xl leading-relaxed"
              style="font-family:var(--font-ui);color:var(--color-silver-muted);animation:fadeInUp 0.7s ease-out 0.5s both;opacity:0"
            >
              I architect <span style="color:var(--color-cyan)">distributed systems</span>, craft
              <span style="color:var(--color-jade)"> pixel-perfect interfaces</span>, and turn
              complex problems into elegant, scalable solutions.
            </p>

            <!-- Tech stack tags -->
            <div
              class="flex flex-wrap gap-2 mb-12"
              style="animation:fadeInUp 0.7s ease-out 0.6s both;opacity:0"
            >
              @for (tech of techStack; track tech) {
                <span class="tag">{{ tech }}</span>
              }
            </div>

            <!-- PrimeNG CTA buttons -->
            <div
              class="flex flex-wrap gap-4"
              style="animation:fadeInUp 0.7s ease-out 0.7s both;opacity:0"
            >
              <p-button label="View Projects" icon="pi pi-code" routerLink="/projects" />
              <p-button
                label="Get In Touch"
                icon="pi pi-envelope"
                severity="secondary"
                routerLink="/contact"
              />
              <p-button
                label="Resume"
                icon="pi pi-download"
                [text]="true"
                href="/assets/resume.pdf"
              />
            </div>
          </div>
        </div>

        <!-- Floating geometric -->
        <div
          class="absolute bottom-12 right-8 lg:right-24 opacity-30 hidden md:block animate-float"
        >
          <div class="w-32 h-32 relative" style="border:1px solid var(--color-cyan)">
            <div
              class="absolute -top-2 -left-2 w-4 h-4"
              style="border-top:2px solid var(--color-cyan);border-left:2px solid var(--color-cyan)"
            ></div>
            <div
              class="absolute -bottom-2 -right-2 w-4 h-4"
              style="border-bottom:2px solid var(--color-cyan);border-right:2px solid var(--color-cyan)"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-8 h-8 animate-spin"
                style="border:1px solid var(--color-cyan);transform:rotate(45deg);animation-duration:8s"
              ></div>
            </div>
          </div>
        </div>

        <!-- Scroll hint -->
        <div
          class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <span
            style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.15em"
            >SCROLL</span
          >
          <div
            class="w-px h-8"
            style="background:linear-gradient(to bottom, var(--color-cyan), transparent)"
          ></div>
        </div>
      </section>

      <!-- Stats -->
      <section class="py-20" style="border-top:1px solid var(--color-border)">
        <div class="max-w-7xl mx-auto px-6 lg:px-24">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            @for (stat of stats; track stat.label) {
              <div class="text-center group">
                <div
                  class="font-display text-4xl font-black group-hover:text-glow-cyan transition-all"
                  style="font-family:var(--font-display);color:var(--color-cyan)"
                >
                  {{ stat.value }}
                </div>
                <div
                  style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.15em;text-transform:uppercase"
                >
                  {{ stat.label }}
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <div class="glow-line max-w-7xl mx-auto px-6"></div>

      <!-- Featured Work -->
      <section class="py-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-24">
          <div class="flex items-end justify-between mb-12">
            <div>
              <p class="section-label">Featured Work</p>
              <h2 class="section-title">
                Selected<br /><span class="gradient-text">Projects</span>
              </h2>
            </div>
            <p-button
              label="View All"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="secondary"
              routerLink="/projects"
              class="hidden md:inline-flex"
            />
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            @for (project of featuredProjects; track project.title) {
              <div class="card-accent p-6 group cursor-pointer clip-corner">
                <div class="flex items-start justify-between mb-4">
                  <div
                    class="w-10 h-10 flex items-center justify-center text-xl transition-colors"
                    style="border:1px solid var(--color-border)"
                  >
                    {{ project.icon }}
                  </div>
                  <span
                    style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-silver-dim)"
                    >{{ project.year }}</span
                  >
                </div>
                <h3
                  class="font-display font-semibold mb-2 group-hover:text-cyan transition-colors"
                  style="font-family:var(--font-display);color:var(--color-silver)"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-sm leading-relaxed mb-4"
                  style="font-family:var(--font-ui);color:var(--color-silver-muted)"
                >
                  {{ project.desc }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                  @for (tag of project.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section
        class="py-24 relative overflow-hidden"
        style="background:var(--color-surface);border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border)"
      >
        <div class="absolute inset-0 bg-grid opacity-50"></div>
        <div class="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <p class="section-label text-center">Core Competencies</p>
          <h2 class="section-title text-center mb-16">
            Technical<br /><span class="gradient-text">Expertise</span>
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (domain of skillDomains; track domain.title) {
              <div
                class="p-6 relative group transition-all duration-300"
                style="border:1px solid var(--color-border)"
              >
                <div
                  class="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style="background:linear-gradient(to right,transparent,var(--color-cyan),transparent)"
                ></div>
                <div class="text-2xl mb-4">{{ domain.icon }}</div>
                <h3
                  class="font-display text-sm font-bold mb-3 tracking-wide"
                  style="font-family:var(--font-display);color:var(--color-silver)"
                >
                  {{ domain.title }}
                </h3>
                <ul class="space-y-1.5">
                  @for (skill of domain.skills; track skill) {
                    <li
                      class="flex items-center gap-2"
                      style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-silver-muted)"
                    >
                      <span style="color:var(--color-cyan);opacity:0.6">›</span>{{ skill }}
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-32">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <p class="section-label text-center">Let's Collaborate</p>
          <h2
            class="mb-6"
            style="font-family:var(--font-display);font-size:clamp(2rem,5vw,3rem);font-weight:900;color:var(--color-silver)"
          >
            Have an interesting<br /><span class="gradient-text">project in mind?</span>
          </h2>
          <p
            class="text-lg mb-10 max-w-xl mx-auto"
            style="font-family:var(--font-ui);color:var(--color-silver-muted)"
          >
            I'm currently open to new opportunities, freelance projects, and technical consulting.
          </p>
          <p-button
            label="Start a Conversation"
            icon="pi pi-comments"
            routerLink="/contact"
            size="large"
          />
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8" style="border-top:1px solid var(--color-border)">
        <div
          class="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span
            style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-silver-dim);letter-spacing:0.08em"
          >
            © 2025 Marvin Cangcianno — Built with Angular 21, PrimeNG & Tailwind CSS v4
          </span>
          <div class="flex items-center gap-2">
            @for (social of socials; track social.label) {
              <p-button
                [label]="social.label"
                [text]="true"
                size="small"
                severity="contrast"
                (onClick)="openLink(social.href)"
              />
            }
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class LandingComponent {
  techStack = [
    'TypeScript',
    'Angular',
    'React',
    'Node.js',
    'Go',
    'Kubernetes',
    'PostgreSQL',
    'Redis',
    'AWS',
  ];

  stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '40+', label: 'Projects Shipped' },
    { value: '12', label: 'Open Source Repos' },
    { value: '3', label: 'Patents Filed' },
  ];

  featuredProjects = [
    {
      icon: '⚡',
      year: '2024',
      title: 'NexusFlow Platform',
      desc: 'Real-time data orchestration platform processing 10M+ events/day with sub-100ms latency.',
      tags: ['Go', 'Kafka', 'React', 'k8s'],
    },
    {
      icon: '🛡️',
      year: '2024',
      title: 'Sentinel Auth',
      desc: 'Zero-trust auth system with ML-based anomaly detection and adaptive MFA.',
      tags: ['Node.js', 'ML', 'PostgreSQL', 'Redis'],
    },
    {
      icon: '📊',
      year: '2023',
      title: 'DataLens Analytics',
      desc: 'Self-service BI platform enabling non-technical users to build complex dashboards.',
      tags: ['Angular', 'D3.js', 'Python', 'ClickHouse'],
    },
  ];

  skillDomains = [
    {
      icon: '🖥️',
      title: 'Frontend',
      skills: [
        'Angular 21',
        'React / Next.js',
        'TypeScript',
        'WebGL / Three.js',
        'PWA / Service Workers',
      ],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      skills: ['Node.js / Bun', 'Go', 'Python', 'GraphQL / REST', 'gRPC / Protobuf'],
    },
    {
      icon: '☁️',
      title: 'Infra',
      skills: ['AWS / GCP', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Observability Stack'],
    },
    {
      icon: '🗄️',
      title: 'Data',
      skills: ['PostgreSQL', 'Redis', 'ClickHouse', 'Apache Kafka', 'Elasticsearch'],
    },
  ];

  socials = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Twitter', href: 'https://x.com' },
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
