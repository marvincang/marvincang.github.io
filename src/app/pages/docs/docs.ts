import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface DocArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}
interface DocSection {
  id: string;
  label: string;
  icon: string;
  articles: DocArticle[];
}

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [FormsModule, ButtonModule],
  template: `
    <div class="min-h-screen pt-16">
      <div class="flex">
        <!-- Sidebar -->
        <aside
          class="hidden lg:block w-72 shrink-0 min-h-screen pt-12 sticky top-16 self-start h-[calc(100vh-4rem)] overflow-y-auto"
          style="border-right:1px solid var(--color-border)"
        >
          <div class="px-6 py-8">
            <div class="mb-8">
              <p
                style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-cyan);letter-spacing:0.15em;margin-bottom:0.25rem"
              >
                DOCUMENTATION
              </p>
              <h2
                style="font-family:var(--font-display);color:white;font-size:1.1rem;font-weight:700"
              >
                Personal Docs
              </h2>
              <p
                style="font-family:var(--font-ui);font-size:0.75rem;color:var(--color-silver-dim);margin-top:0.25rem"
              >
                Technical writings & notes
              </p>
            </div>

            <!-- Search -->
            <div class="relative mb-6">
              <input
                type="text"
                placeholder="Search docs..."
                class="input-field text-xs py-2 pl-8"
                [ngModel]="searchQuery"
                (ngModelChange)="searchQuery = $event"
              />
              <i
                class="pi pi-search absolute left-2 top-1/2 -translate-y-1/2 text-sm"
                style="color:var(--color-silver-dim)"
              ></i>
            </div>

            <!-- Sections -->
            <nav class="space-y-6">
              @for (section of docSections; track section.id) {
                <div>
                  <p
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.12em;margin-bottom:0.5rem;display:flex;align-items:center;gap:0.5rem"
                  >
                    <span>{{ section.icon }}</span
                    >{{ section.label }}
                  </p>
                  <ul class="space-y-1">
                    @for (article of section.articles; track article.id) {
                      <li>
                        <button
                          class="w-full text-left px-3 py-2 text-sm transition-all duration-150"
                          [style.color]="
                            activeArticle()?.id === article.id
                              ? 'var(--color-cyan)'
                              : 'var(--color-silver-muted)'
                          "
                          [style.background]="
                            activeArticle()?.id === article.id
                              ? 'var(--color-cyan-glow)'
                              : 'transparent'
                          "
                          [style.border-left]="
                            activeArticle()?.id === article.id
                              ? '2px solid var(--color-cyan)'
                              : '2px solid transparent'
                          "
                          [style.font-family]="'var(--font-ui)'"
                          (click)="selectArticle(article)"
                        >
                          {{ article.title }}
                        </button>
                      </li>
                    }
                  </ul>
                </div>
              }
            </nav>
          </div>
        </aside>

        <!-- Main content -->
        <main class="flex-1 min-w-0 pt-12 pb-20">
          <div class="max-w-3xl mx-auto px-6 lg:px-12">
            @if (!activeArticle()) {
              <!-- Index -->
              <div class="py-8">
                <p class="section-label">Personal Docs</p>
                <h1
                  style="font-family:var(--font-display);font-size:clamp(2rem,6vw,3.5rem);font-weight:900"
                >
                  Technical <span class="gradient-text">Writings</span>
                </h1>
                <p
                  class="text-lg max-w-xl mt-3 mb-12"
                  style="font-family:var(--font-ui);color:var(--color-silver-muted)"
                >
                  Deep dives, architecture notes, runbooks, and lessons learned from 8+ years
                  building distributed systems.
                </p>

                <div class="space-y-8">
                  @for (section of docSections; track section.id) {
                    <div>
                      <div class="flex items-center gap-3 mb-4">
                        <span class="text-xl">{{ section.icon }}</span>
                        <h2
                          style="font-family:var(--font-display);color:var(--color-silver);font-weight:700;font-size:1.1rem"
                        >
                          {{ section.label }}
                        </h2>
                        <div class="flex-1 h-px" style="background:var(--color-border)"></div>
                      </div>
                      <div class="grid sm:grid-cols-2 gap-3">
                        @for (article of section.articles; track article.id) {
                          <button class="card p-5 text-left group" (click)="selectArticle(article)">
                            <h3
                              class="text-sm font-semibold mb-2 group-hover:transition-colors"
                              style="font-family:var(--font-ui);color:var(--color-silver)"
                            >
                              {{ article.title }}
                            </h3>
                            <div class="flex items-center gap-3 mb-3">
                              <span
                                style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                                >{{ article.date }}</span
                              >
                              <span style="color:var(--color-silver-dim)">·</span>
                              <span
                                style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                                >{{ article.readTime }}</span
                              >
                            </div>
                            <div class="flex flex-wrap gap-1.5">
                              @for (tag of article.tags; track tag) {
                                <span class="tag">{{ tag }}</span>
                              }
                            </div>
                          </button>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            } @else {
              <!-- Article view -->
              <article class="py-8">
                <!-- Breadcrumb with PrimeNG text button -->
                <div class="flex items-center gap-2 mb-8">
                  <p-button
                    label="← All Docs"
                    [text]="true"
                    severity="contrast"
                    size="small"
                    (onClick)="clearArticle()"
                  />
                  <span
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                    >/</span
                  >
                  <span
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-cyan)"
                    >{{ activeArticle()!.title }}</span
                  >
                </div>

                <header class="mb-10 pb-8" style="border-bottom:1px solid var(--color-border)">
                  <div class="flex flex-wrap items-center gap-3 mb-4">
                    @for (tag of activeArticle()!.tags; track tag) {
                      <span class="tag-cyan">{{ tag }}</span>
                    }
                  </div>
                  <h1
                    style="font-family:var(--font-display);font-size:clamp(1.75rem,5vw,2.5rem);font-weight:900;color:var(--color-silver);margin-bottom:1rem"
                  >
                    {{ activeArticle()!.title }}
                  </h1>
                  <div
                    class="flex items-center gap-4"
                    style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                  >
                    <span>Published {{ activeArticle()!.date }}</span>
                    <span>·</span>
                    <span>{{ activeArticle()!.readTime }}</span>
                    <span>·</span>
                    <span style="color:var(--color-jade)">Marvin Cangcianno</span>
                  </div>
                </header>

                <div class="prose-custom" [innerHTML]="activeArticle()!.content"></div>

                <div
                  class="mt-16 pt-8 flex justify-between"
                  style="border-top:1px solid var(--color-border)"
                >
                  <p-button
                    label="← Back to Docs"
                    icon="pi pi-arrow-left"
                    severity="secondary"
                    (onClick)="clearArticle()"
                  />
                </div>
              </article>
            }
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .prose-custom :is(h2, h3) {
        font-family: 'Orbitron', monospace;
        color: #e2e8f0;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      .prose-custom h2 {
        font-size: 1.4rem;
        font-weight: 700;
      }
      .prose-custom h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #00d4ff;
      }
      .prose-custom p {
        color: #94a3b8;
        line-height: 1.8;
        margin-bottom: 1rem;
        font-family: 'Syne', sans-serif;
      }
      .prose-custom code {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8rem;
        background: #161625;
        border: 1px solid #1e1e35;
        padding: 0.15rem 0.4rem;
        color: #00ff88;
      }
      .prose-custom pre {
        background: #0f0f1a;
        border: 1px solid #1e1e35;
        border-left: 3px solid #00d4ff;
        padding: 1.5rem;
        overflow-x: auto;
        margin: 1.5rem 0;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8rem;
        line-height: 1.7;
        color: #e2e8f0;
      }
      .prose-custom pre code {
        background: none;
        border: none;
        padding: 0;
        color: inherit;
      }
      .prose-custom ul {
        margin: 1rem 0 1rem 1.5rem;
      }
      .prose-custom li {
        color: #94a3b8;
        margin-bottom: 0.4rem;
        font-family: 'Syne', sans-serif;
      }
      .prose-custom li::marker {
        color: #00d4ff;
      }
      .prose-custom blockquote {
        border-left: 3px solid #ff6b35;
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: #64748b;
        font-style: italic;
      }
      .prose-custom strong {
        color: #e2e8f0;
      }
      .prose-custom a {
        color: #00d4ff;
        text-decoration: none;
      }
      .prose-custom a:hover {
        text-decoration: underline;
      }
      .prose-custom hr {
        border-color: #1e1e35;
        margin: 2rem 0;
      }
    `,
  ],
})
export class DocsComponent {
  activeArticle = signal<DocArticle | null>(null);
  searchQuery = '';

  selectArticle(a: DocArticle) {
    this.activeArticle.set(a);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  clearArticle() {
    this.activeArticle.set(null);
  }

  docSections: DocSection[] = [
    {
      id: 'architecture',
      label: 'System Architecture',
      icon: '🏗️',
      articles: [
        {
          id: 'event-driven',
          title: 'Event-Driven Architecture at Scale',
          date: 'Dec 2024',
          readTime: '12 min read',
          tags: ['Architecture', 'Kafka', 'Distributed'],
          content: `<h2>Event-Driven Architecture at Scale</h2><p>After running event-driven systems in production for 5+ years, here's what I've learned about making them reliable, observable, and maintainable at scale.</p><h3>Why Event Sourcing?</h3><p>Traditional CRUD systems discard state transitions — you only ever see the current state. Event sourcing preserves the complete history of <strong>how</strong> your system arrived at the current state.</p><h3>The Core Pattern</h3><pre>// Event definition
interface OrderPlaced {
  type: 'ORDER_PLACED';
  orderId: string;
  customerId: string;
  timestamp: number;
  version: number;
}

// Append-only event store
async function appendEvent(event: DomainEvent): Promise&lt;void&gt; {
  await db.events.insert({
    stream_id: event.orderId,
    event_type: event.type,
    payload: JSON.stringify(event),
  });
}</pre><h3>Handling Idempotency</h3><p>In distributed systems, you <em>will</em> receive duplicate events. Design your consumers to be idempotent from day one. Track processed event IDs in Redis with a TTL.</p><blockquote>The hardest part isn't the happy path — it's designing for consumers that fail, events that arrive out of order, or schemas that evolve.</blockquote><h3>Schema Evolution</h3><ul><li>Use a <code>version</code> field on every event from day one</li><li>Write upcasters to transform old event shapes on read</li><li>Maintain backwards compatibility for at least 2 major versions</li></ul>`,
        },
        {
          id: 'cqrs',
          title: 'CQRS: Practical Patterns',
          date: 'Nov 2024',
          readTime: '8 min read',
          tags: ['CQRS', 'Architecture', 'Go'],
          content: `<h2>CQRS: Practical Patterns</h2><p>Command Query Responsibility Segregation simplifies dramatically complex read/write scenarios. Here's how I apply it in Go services.</p><h3>The Basic Separation</h3><p>Commands mutate state. Queries read state. Keep them completely separate — different code paths, different models, potentially different databases.</p><pre>// Command handler — writes
type PlaceOrderCommand struct {
  CustomerID string
  Items      []OrderItem
}

func (h *OrderCommandHandler) Handle(cmd PlaceOrderCommand) error {
  order := domain.NewOrder(cmd.CustomerID, cmd.Items)
  return h.eventStore.Append(order.Events())
}

// Query handler — reads from optimized read model
func (h *OrderQueryHandler) Handle(q GetOrderQuery) (*OrderView, error) {
  return h.readDB.FindOrder(q.OrderID)
}</pre>`,
        },
      ],
    },
    {
      id: 'performance',
      label: 'Performance Engineering',
      icon: '⚡',
      articles: [
        {
          id: 'postgres',
          title: 'PostgreSQL Query Optimization',
          date: 'Oct 2024',
          readTime: '15 min read',
          tags: ['PostgreSQL', 'Performance', 'SQL'],
          content: `<h2>PostgreSQL Query Optimization</h2><p>Most performance problems fall into a handful of recurring patterns. Here's my systematic approach.</p><h3>Start with EXPLAIN ANALYZE</h3><pre>EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.id, u.email, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > NOW() - INTERVAL '30 days'
GROUP BY u.id, u.email
ORDER BY order_count DESC
LIMIT 50;</pre><h3>The Most Common Culprits</h3><ul><li><strong>Missing indexes</strong> — Seq scans on large tables are the #1 issue</li><li><strong>Type mismatches</strong> — Implicit casts prevent index use</li><li><strong>N+1 queries</strong> — Fetching related records in a loop</li></ul><h3>Partial Indexes</h3><pre>-- Only index pending orders
CREATE INDEX idx_orders_pending
ON orders (created_at, customer_id)
WHERE status = 'pending';</pre>`,
        },
        {
          id: 'go-perf',
          title: 'Go Performance Tuning',
          date: 'Sep 2024',
          readTime: '10 min read',
          tags: ['Go', 'Performance', 'Profiling'],
          content: `<h2>Go Performance Tuning</h2><p>Knowing how to profile and optimize is the difference between "fast" and "blazing".</p><h3>Start with pprof</h3><pre>import _ "net/http/pprof"

go func() {
  log.Println(http.ListenAndServe("localhost:6060", nil))
}()</pre><p>Profile in production with minimal overhead:</p><pre>go tool pprof http://localhost:6060/debug/pprof/profile?seconds=30</pre><h3>Escape Analysis</h3><p>Heap allocations are expensive. Use <code>go build -gcflags='-m'</code> to see what escapes to the heap. Minimize interface{} and pointer-heavy patterns in hot paths.</p>`,
        },
      ],
    },
    {
      id: 'frontend',
      label: 'Frontend Engineering',
      icon: '🎨',
      articles: [
        {
          id: 'signals',
          title: 'Angular 17+ Signals Guide',
          date: 'Aug 2024',
          readTime: '9 min read',
          tags: ['Angular', 'Signals', 'TypeScript'],
          content: `<h2>Angular Signals: A Practical Guide</h2><p>Signals are Angular's answer to fine-grained reactivity. After migrating several large apps, here's what you need to know.</p><h3>The Core API</h3><pre>import { signal, computed, effect } from '@angular/core';

const count = signal(0);
const doubled = computed(() => count() * 2);

effect(() => {
  console.log('Count changed:', count());
});

count.set(5);
count.update(c => c + 1);</pre><h3>Bridging with RxJS</h3><pre>import { toSignal } from '@angular/core/rxjs-interop';

users = toSignal(this.userService.getUsers(), {
  initialValue: []
});</pre>`,
        },
        {
          id: 'css-perf',
          title: 'CSS Performance & Animation',
          date: 'Jul 2024',
          readTime: '7 min read',
          tags: ['CSS', 'Performance', 'Animation'],
          content: `<h2>CSS Performance & Animation</h2><p>Smooth 60fps animations require understanding how browsers paint, composite, and optimize.</p><h3>Compositor-Only Properties</h3><p>Only animate <code>transform</code> and <code>opacity</code> for GPU-accelerated animations. Animating layout properties triggers expensive reflows.</p><pre>/* ❌ Triggers layout */
.bad { transition: width 300ms, height 300ms; }

/* ✅ Compositor-only */
.good { transition: transform 300ms, opacity 300ms; }</pre>`,
        },
      ],
    },
    {
      id: 'devops',
      label: 'DevOps & Infrastructure',
      icon: '☁️',
      articles: [
        {
          id: 'k8s',
          title: 'Kubernetes Patterns I Swear By',
          date: 'Jun 2024',
          readTime: '11 min read',
          tags: ['Kubernetes', 'DevOps', 'Reliability'],
          content: `<h2>Kubernetes Patterns I Swear By</h2><h3>Always Set Resource Requests and Limits</h3><pre>resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"</pre><h3>PodDisruptionBudgets are Non-Negotiable</h3><pre>apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: api</pre><blockquote>Never run without resource requests — the scheduler needs them to make placement decisions.</blockquote>`,
        },
        {
          id: 'terraform',
          title: 'Terraform Best Practices',
          date: 'May 2024',
          readTime: '8 min read',
          tags: ['Terraform', 'IaC', 'AWS'],
          content: `<h2>Terraform Best Practices</h2><h3>Module Structure</h3><pre>infrastructure/
├── modules/
│   ├── networking/
│   ├── compute/
│   └── database/
└── envs/
    ├── production/
    └── staging/</pre><h3>Remote State with Locking</h3><pre>terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "production/terraform.tfstate"
    encrypt        = true
    dynamodb_table = "terraform-state-lock"
  }
}</pre><blockquote>Never store secrets in Terraform state. Use AWS Secrets Manager or Vault and reference by ARN.</blockquote>`,
        },
      ],
    },
  ];
}
