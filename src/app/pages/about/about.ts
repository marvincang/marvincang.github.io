import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  template: `
    <div class="min-h-screen pt-24 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-24">
        <div class="mb-20 page-enter">
          <p class="section-label">Who I Am</p>
          <h1
            style="font-family:var(--font-display);font-size:clamp(2.5rem,8vw,4rem);font-weight:900"
          >
            About <span class="gradient-text">Me</span>
          </h1>
        </div>

        <!-- Bio section -->
        <div class="grid lg:grid-cols-5 gap-16 mb-24">
          <!-- Avatar -->
          <div class="lg:col-span-2">
            <div class="relative inline-block">
              <div
                class="w-64 h-80 relative overflow-hidden clip-corner"
                style="background:var(--color-surface-2);border:1px solid var(--color-border)"
              >
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div
                    class="gradient-text font-black opacity-80"
                    style="font-family:var(--font-display);font-size:3.5rem"
                  >
                    MV
                  </div>
                  <div
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.15em"
                  >
                    MVNC
                  </div>
                </div>
                <div
                  class="absolute top-3 left-3 w-8 h-8 opacity-60"
                  style="border-top:2px solid var(--color-cyan);border-left:2px solid var(--color-cyan)"
                ></div>
                <div
                  class="absolute bottom-3 right-3 w-8 h-8 opacity-60"
                  style="border-bottom:2px solid var(--color-cyan);border-right:2px solid var(--color-cyan)"
                ></div>
                <div class="scanlines absolute inset-0"></div>
              </div>
              <!-- Status card -->
              <div
                class="absolute -bottom-4 -right-4 px-4 py-3 w-48"
                style="background:var(--color-surface);border:1px solid var(--color-border)"
              >
                <div class="flex items-center gap-2 mb-1">
                  <div
                    class="w-2 h-2 rounded-full animate-pulse"
                    style="background:var(--color-jade)"
                  ></div>
                  <span
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-jade);letter-spacing:0.1em"
                    >AVAILABLE</span
                  >
                </div>
                <p
                  style="font-family:var(--font-ui);font-size:0.75rem;color:var(--color-silver-muted)"
                >
                  Open to Senior / Staff engineering roles
                </p>
              </div>
            </div>

            <div class="mt-12 space-y-3">
              @for (fact of quickFacts; track fact.label) {
                <div class="flex items-center gap-3">
                  <span class="text-lg">{{ fact.icon }}</span>
                  <div>
                    <span
                      style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em"
                      >{{ fact.label }}:</span
                    >
                    <span
                      style="font-family:var(--font-ui);font-size:0.875rem;color:var(--color-silver);margin-left:0.5rem"
                      >{{ fact.value }}</span
                    >
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Bio text -->
          <div class="lg:col-span-3 space-y-6">
            <div
              style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-cyan);letter-spacing:0.1em;margin-bottom:1.5rem"
            >
              /* biography.txt */
            </div>

            <p
              class="text-lg leading-relaxed"
              style="font-family:var(--font-ui);color:var(--color-silver)"
            >
              I'm a Senior Full Stack Engineer with 8+ years of experience building
              <span style="color:var(--color-cyan);font-weight:600"
                >high-throughput distributed systems</span
              >
              and
              <span style="color:var(--color-jade);font-weight:600">
                product-grade web applications</span
              >
              at scale.
            </p>
            <p
              class="leading-relaxed"
              style="font-family:var(--font-ui);color:var(--color-silver-muted)"
            >
              I started writing code at 14, building IRC bots and Minecraft mods. That obsession
              evolved into a career across startups and mid-size companies — from employee #4 at a
              logistics SaaS to architecting core infrastructure for a Series C fintech.
            </p>
            <p
              class="leading-relaxed"
              style="font-family:var(--font-ui);color:var(--color-silver-muted)"
            >
              I care deeply about system reliability, developer experience, and making codebases
              that teams actually enjoy working in. I'm equally comfortable whiteboarding a
              distributed consensus algorithm or obsessing over a loading state transition.
            </p>
            <p
              class="leading-relaxed"
              style="font-family:var(--font-ui);color:var(--color-silver-muted)"
            >
              Outside of engineering: mechanical keyboards, ultramarathon running, homelab hoarding,
              and slowly learning Japanese.
            </p>

            <div class="flex flex-wrap gap-3 pt-4">
              <p-button label="Work With Me" icon="pi pi-comments" routerLink="/contact" />
              <p-button label="Download CV" icon="pi pi-download" severity="secondary" />
            </div>
          </div>
        </div>

        <div class="glow-line mb-24"></div>

        <!-- Experience Timeline -->
        <section class="mb-24">
          <p class="section-label">Career Path</p>
          <h2 class="section-title mb-12">Work <span class="gradient-text">History</span></h2>
          <div class="relative">
            <div
              class="absolute left-4 top-0 bottom-0 w-px"
              style="background:linear-gradient(to bottom, var(--color-cyan), var(--color-border), transparent)"
            ></div>
            <div class="space-y-10">
              @for (job of experience; track job.company; let i = $index) {
                <div class="relative pl-12 group">
                  <div
                    class="absolute left-0 top-1.5 w-8 h-8 flex items-center justify-center transition-all duration-300"
                    [style.border]="
                      i === 0 ? '1px solid var(--color-cyan)' : '1px solid var(--color-border)'
                    "
                    [style.background]="i === 0 ? 'var(--color-cyan-glow)' : 'transparent'"
                  >
                    <div
                      class="w-2 h-2 rounded-full"
                      [style.background]="i === 0 ? 'var(--color-cyan)' : 'var(--color-silver-dim)'"
                    ></div>
                  </div>
                  <div class="card p-6">
                    <div
                      class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3"
                    >
                      <div>
                        <h3
                          style="font-family:var(--font-display);color:var(--color-silver);font-weight:700"
                        >
                          {{ job.role }}
                        </h3>
                        <div class="flex items-center gap-2">
                          <span
                            style="font-family:var(--font-ui);color:var(--color-cyan);font-size:0.875rem"
                            >{{ job.company }}</span
                          >
                          <span
                            style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                            >{{ job.type }}</span
                          >
                        </div>
                      </div>
                      <span
                        style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;white-space:nowrap"
                        >{{ job.period }}</span
                      >
                    </div>
                    <p
                      class="text-sm leading-relaxed mb-3"
                      style="font-family:var(--font-ui);color:var(--color-silver-muted)"
                    >
                      {{ job.description }}
                    </p>
                    <div class="flex flex-wrap gap-1.5">
                      @for (tech of job.tech; track tech) {
                        <span class="tag">{{ tech }}</span>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Skill bars -->
        <section class="mb-24">
          <p class="section-label">Proficiency</p>
          <h2 class="section-title mb-12">Skills <span class="gradient-text">Breakdown</span></h2>
          <div class="grid md:grid-cols-2 gap-4">
            @for (skill of skillBars; track skill.name) {
              <div
                class="p-4"
                style="border:1px solid var(--color-border);background:var(--color-surface)"
              >
                <div class="flex justify-between items-center mb-2">
                  <span
                    style="font-family:var(--font-mono);font-size:0.875rem;color:var(--color-silver)"
                    >{{ skill.name }}</span
                  >
                  <span
                    style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-silver-dim)"
                    >{{ skill.level }}%</span
                  >
                </div>
                <div
                  class="h-1 rounded-full overflow-hidden"
                  style="background:var(--color-surface-2)"
                >
                  <div
                    class="h-full rounded-full"
                    [style.width.%]="skill.level"
                    [style.background]="
                      skill.color === 'cyan'
                        ? 'linear-gradient(to right,var(--color-cyan),var(--color-jade))'
                        : 'linear-gradient(to right,var(--color-ember),var(--color-cyan))'
                    "
                  ></div>
                </div>
              </div>
            }
          </div>
        </section>

        <!-- Credentials -->
        <section>
          <p class="section-label">Credentials</p>
          <h2 class="section-title mb-12">Education & <span class="gradient-text">Certs</span></h2>
          <div class="grid md:grid-cols-2 gap-4">
            @for (cred of credentials; track cred.title) {
              <div class="card p-6 flex gap-4">
                <span class="text-2xl">{{ cred.icon }}</span>
                <div>
                  <h3
                    style="font-family:var(--font-display);color:var(--color-silver);font-size:0.875rem;font-weight:700;margin-bottom:0.25rem"
                  >
                    {{ cred.title }}
                  </h3>
                  <p
                    style="font-family:var(--font-ui);color:var(--color-cyan);font-size:0.875rem;margin-bottom:0.25rem"
                  >
                    {{ cred.institution }}
                  </p>
                  <p
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                  >
                    {{ cred.year }}
                  </p>
                </div>
              </div>
            }
          </div>
        </section>
      </div>
    </div>
  `,
})
export class AboutComponent {
  quickFacts = [
    { icon: '📍', label: 'LOCATION', value: 'San Francisco, CA' },
    { icon: '💼', label: 'ROLE', value: 'Senior Full Stack Engineer' },
    { icon: '🎓', label: 'DEGREE', value: 'B.S. Computer Science, UC Berkeley' },
    { icon: '🌐', label: 'LANGUAGES', value: 'English, Mandarin' },
    { icon: '☕', label: 'FUEL', value: 'Cold brew × 3' },
  ];

  experience = [
    {
      role: 'Senior Software Engineer',
      company: 'Meridian Finance',
      type: '· Full-time',
      period: '2022 — Present',
      description:
        'Leading platform engineering for a fintech processing $2B+/month. Architected the event-driven core banking system, reduced p99 from 800ms to 70ms, grew the team from 5 to 18.',
      tech: ['Go', 'Kafka', 'PostgreSQL', 'React', 'k8s', 'Terraform'],
    },
    {
      role: 'Full Stack Engineer II',
      company: 'Logify Labs',
      type: '· Full-time',
      period: '2020 — 2022',
      description:
        "Joined as employee #8. Built the real-time dashboard and API layer from scratch. Shipped the self-service analytics product that became the company's top revenue driver.",
      tech: ['TypeScript', 'Angular', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    },
    {
      role: 'Software Engineer',
      company: 'CloudFront Inc.',
      type: '· Full-time',
      period: '2018 — 2020',
      description:
        'Built microservices for the CDN routing layer and contributed to the open-source edge caching runtime used by 500+ enterprise customers.',
      tech: ['Go', 'Rust', 'Redis', 'Nginx', 'Kubernetes'],
    },
    {
      role: 'Junior Frontend Developer',
      company: 'PixelStudio Agency',
      type: '· Full-time',
      period: '2016 — 2018',
      description:
        'Delivered 20+ client websites. Developed strong foundations in responsive design, accessibility, and performance optimization.',
      tech: ['JavaScript', 'React', 'CSS', 'PHP', 'WordPress'],
    },
  ];

  skillBars = [
    { name: 'TypeScript / JavaScript', level: 96, color: 'cyan' },
    { name: 'Go', level: 90, color: 'cyan' },
    { name: 'Angular', level: 94, color: 'cyan' },
    { name: 'React / Next.js', level: 88, color: 'ember' },
    { name: 'Node.js', level: 92, color: 'ember' },
    { name: 'PostgreSQL', level: 88, color: 'ember' },
    { name: 'Kubernetes / Docker', level: 85, color: 'cyan' },
    { name: 'AWS / GCP', level: 82, color: 'cyan' },
    { name: 'Python', level: 78, color: 'ember' },
    { name: 'Rust', level: 65, color: 'ember' },
  ];

  credentials = [
    {
      icon: '🎓',
      title: 'B.S. Computer Science',
      institution: 'UC Berkeley',
      year: 'Class of 2016',
    },
    {
      icon: '☁️',
      title: 'AWS Solutions Architect Professional',
      institution: 'Amazon Web Services',
      year: '2024',
    },
    { icon: '☸️', title: 'Certified Kubernetes Administrator', institution: 'CNCF', year: '2023' },
    {
      icon: '🔐',
      title: 'OSCP — Offensive Security',
      institution: 'Offensive Security',
      year: '2022',
    },
  ];
}
