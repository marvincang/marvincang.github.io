import { Component, signal, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  category: string;
  year: string;
  icon: string;
  status: 'shipped' | 'wip' | 'open-source';
  featured: boolean;
  links: { label: string; href: string }[];
  metrics?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ButtonModule, ButtonGroupModule],
  template: `
    <div class="min-h-screen pt-24 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-24">
        <div class="mb-16 page-enter">
          <p class="section-label">Portfolio</p>
          <h1
            style="font-family:var(--font-display);font-size:clamp(2.5rem,8vw,4rem);font-weight:900"
          >
            All <span class="gradient-text">Projects</span>
          </h1>
          <p
            class="text-lg max-w-2xl mt-2"
            style="font-family:var(--font-ui);color:var(--color-silver-muted)"
          >
            Systems, tools, and experiments across backend, frontend, and infrastructure.
          </p>
        </div>

        <!-- Filter bar using PrimeNG ButtonGroup -->
        <div
          class="flex flex-wrap items-center gap-3 mb-12 p-4"
          style="border:1px solid var(--color-border);background:var(--color-surface)"
        >
          <span
            style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;margin-right:0.5rem"
            >FILTER:</span
          >
          <p-buttongroup>
            @for (filter of filters; track filter) {
              <p-button
                [label]="filter"
                [severity]="activeFilter() === filter ? 'primary' : 'secondary'"
                size="small"
                (onClick)="setFilter(filter)"
              />
            }
          </p-buttongroup>
          <span
            class="ml-auto"
            style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-silver-dim)"
          >
            {{ filteredProjects().length }}_results
          </span>
        </div>

        <!-- Project grid -->
        <div class="grid lg:grid-cols-2 gap-4">
          @for (project of filteredProjects(); track project.id) {
            <div class="card-accent group relative" [class.lg:col-span-2]="project.featured">
              @if (project.featured) {
                <div
                  class="absolute top-4 right-4"
                  style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-ember);border:1px solid var(--color-ember);padding:0.2rem 0.5rem;letter-spacing:0.1em"
                >
                  ★ FEATURED
                </div>
              }

              <div class="absolute top-4 left-4 flex items-center gap-2">
                <div
                  class="w-1.5 h-1.5 rounded-full"
                  [style.background]="
                    project.status === 'shipped'
                      ? 'var(--color-jade)'
                      : project.status === 'wip'
                        ? 'var(--color-ember)'
                        : 'var(--color-cyan)'
                  "
                ></div>
                <span
                  style="font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.1em"
                  [style.color]="
                    project.status === 'shipped'
                      ? 'var(--color-jade)'
                      : project.status === 'wip'
                        ? 'var(--color-ember)'
                        : 'var(--color-cyan)'
                  "
                >
                  {{ project.status.toUpperCase() }}
                </span>
              </div>

              <div
                class="p-8 pt-12"
                [class.lg:flex]="project.featured"
                [class.lg:gap-10]="project.featured"
              >
                <div [class.lg:flex-1]="project.featured">
                  <div class="flex items-start gap-4 mb-4">
                    <span class="text-3xl">{{ project.icon }}</span>
                    <div>
                      <span
                        style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                        >{{ project.year }}</span
                      >
                      <h2
                        class="font-bold group-hover:transition-colors"
                        style="font-family:var(--font-display);font-size:1.15rem;color:var(--color-silver)"
                      >
                        {{ project.title }}
                      </h2>
                    </div>
                  </div>
                  <p
                    class="text-sm leading-relaxed mb-4"
                    style="font-family:var(--font-ui);color:var(--color-silver-muted)"
                  >
                    {{ project.featured ? project.longDesc : project.description }}
                  </p>
                  @if (project.metrics) {
                    <div
                      class="mb-4 px-3 py-2"
                      style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-jade);border:1px solid rgba(0,255,136,0.2);background:rgba(0,255,136,0.04)"
                    >
                      › {{ project.metrics }}
                    </div>
                  }
                  <div class="flex flex-wrap gap-1.5 mb-6">
                    @for (tag of project.tags; track tag) {
                      <span class="tag-cyan">{{ tag }}</span>
                    }
                  </div>
                </div>
                <!-- Links via PrimeNG buttons -->
                <div
                  class="flex flex-wrap gap-3"
                  [class.lg:flex-col]="project.featured"
                  [class.lg:justify-end]="project.featured"
                >
                  @for (link of project.links; track link.label) {
                    <p-button
                      [label]="link.label"
                      icon="pi pi-external-link"
                      iconPos="right"
                      severity="secondary"
                      size="small"
                      (onClick)="openLink(link.href)"
                    />
                  }
                </div>
              </div>
            </div>
          }
        </div>

        @if (filteredProjects().length === 0) {
          <div class="text-center py-20">
            <span style="font-family:var(--font-display);font-size:3rem;opacity:0.3">∅</span>
            <p
              style="font-family:var(--font-mono);font-size:0.8rem;color:var(--color-silver-dim);margin-top:1rem"
            >
              No projects match this filter.
            </p>
          </div>
        }

        <!-- GitHub CTA -->
        <div
          class="mt-16 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style="border:1px solid var(--color-border);background:var(--color-surface)"
        >
          <div>
            <p
              style="font-family:var(--font-display);font-size:0.9rem;font-weight:700;color:var(--color-silver);margin-bottom:0.25rem"
            >
              More on GitHub
            </p>
            <p
              style="font-family:var(--font-ui);font-size:0.875rem;color:var(--color-silver-muted)"
            >
              Explore experiments, utilities, and contributions in my open source work.
            </p>
          </div>
          <p-button
            label="github.com/alexchen"
            icon="pi pi-github"
            severity="secondary"
            (onClick)="openLink('https://github.com')"
          />
        </div>
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  filters = ['ALL', 'BACKEND', 'FRONTEND', 'INFRA', 'OPEN-SOURCE'];
  activeFilter = signal('ALL');

  setFilter(f: string) {
    this.activeFilter.set(f);
  }
  openLink(url: string) {
    window.open(url, '_blank');
  }

  projects: Project[] = [
    {
      id: 1,
      title: 'NexusFlow Platform',
      description:
        'Real-time data orchestration platform processing 10M+ events/day with sub-100ms latency.',
      longDesc:
        'NexusFlow is a production-grade event streaming platform I architected. It handles 10M+ events/day across 300+ microservices using Apache Kafka. Built custom Go consumers with exactly-once semantics, auto-scaling worker pools, and a React-based ops dashboard with live topology visualization.',
      tags: ['Go', 'Kafka', 'React', 'Kubernetes', 'Prometheus', 'ClickHouse'],
      category: 'BACKEND',
      year: '2024',
      icon: '⚡',
      status: 'shipped',
      featured: true,
      metrics: '10M+ events/day • P99 < 80ms • 99.99% uptime',
      links: [
        { label: 'Case Study', href: '#' },
        { label: 'Architecture Docs', href: '#' },
      ],
    },
    {
      id: 2,
      title: 'Sentinel Auth',
      description: 'Zero-trust auth system with ML-based anomaly detection and passkey support.',
      longDesc: '',
      tags: ['Node.js', 'Python', 'ML', 'PostgreSQL', 'Redis', 'WebAuthn'],
      category: 'BACKEND',
      year: '2024',
      icon: '🛡️',
      status: 'shipped',
      featured: false,
      metrics: 'Reduced fraud logins by 94%',
      links: [{ label: 'View Project', href: '#' }],
    },
    {
      id: 3,
      title: 'DataLens Analytics',
      description:
        'Self-service BI platform with drag-and-drop dashboard builder and custom SQL editor.',
      longDesc: '',
      tags: ['Angular', 'D3.js', 'Python', 'ClickHouse', 'FastAPI'],
      category: 'FRONTEND',
      year: '2023',
      icon: '📊',
      status: 'shipped',
      featured: false,
      links: [
        { label: 'Live Demo', href: '#' },
        { label: 'GitHub', href: '#' },
      ],
    },
    {
      id: 4,
      title: 'k8s-cost-operator',
      description:
        'Kubernetes operator annotating workloads with real-time cost estimates and budget alerts.',
      longDesc: '',
      tags: ['Go', 'Kubernetes', 'Prometheus', 'Helm'],
      category: 'OPEN-SOURCE',
      year: '2023',
      icon: '☁️',
      status: 'open-source',
      featured: false,
      metrics: '1.2k GitHub stars',
      links: [
        { label: 'GitHub', href: '#' },
        { label: 'Docs', href: '#' },
      ],
    },
    {
      id: 5,
      title: 'PolyMigrate CLI',
      description:
        'Multi-database schema migration tool with rollback support and CI pipeline integration.',
      longDesc: '',
      tags: ['Go', 'PostgreSQL', 'MySQL', 'SQLite', 'CLI'],
      category: 'OPEN-SOURCE',
      year: '2023',
      icon: '🔧',
      status: 'open-source',
      featured: false,
      metrics: '850 weekly downloads',
      links: [{ label: 'GitHub', href: '#' }],
    },
    {
      id: 6,
      title: 'EdgeForge CDN',
      description:
        'Global edge caching layer with smart invalidation and WebAssembly-based transforms.',
      longDesc: '',
      tags: ['Rust', 'WebAssembly', 'Cloudflare Workers', 'TypeScript'],
      category: 'INFRA',
      year: '2023',
      icon: '🌐',
      status: 'shipped',
      featured: false,
      links: [{ label: 'Case Study', href: '#' }],
    },
    {
      id: 7,
      title: 'TerraCanvas UI',
      description:
        'Visual Terraform plan explorer — renders resource graphs, diffs, and dependency trees.',
      longDesc: '',
      tags: ['React', 'D3.js', 'Terraform', 'TypeScript', 'Rust'],
      category: 'FRONTEND',
      year: '2024',
      icon: '🗺️',
      status: 'wip',
      featured: false,
      links: [{ label: 'GitHub', href: '#' }],
    },
    {
      id: 8,
      title: 'LogSurfer',
      description:
        'High-performance log aggregation with sub-second full-text queries over billions of records.',
      longDesc: '',
      tags: ['Go', 'Elasticsearch', 'gRPC', 'React', 'Redis'],
      category: 'INFRA',
      year: '2022',
      icon: '🔍',
      status: 'shipped',
      featured: false,
      links: [{ label: 'GitHub', href: '#' }],
    },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'ALL' ? this.projects : this.projects.filter((p) => p.category === f);
  });
}
