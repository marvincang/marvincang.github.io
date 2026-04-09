import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ButtonModule],
  template: `
    <div class="min-h-screen pt-24 pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-24">
        <div class="mb-16 page-enter">
          <p class="section-label">Get In Touch</p>
          <h1
            style="font-family:var(--font-display);font-size:clamp(2.5rem,8vw,4rem);font-weight:900"
          >
            Let's <span class="gradient-text">Connect</span>
          </h1>
          <p
            class="text-lg max-w-xl mt-2"
            style="font-family:var(--font-ui);color:var(--color-silver-muted)"
          >
            Whether it's a project, a job opportunity, or just a technical conversation — I'm always
            open.
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Info column -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Availability -->
            <div
              class="p-6 relative"
              style="border:1px solid rgba(0,255,136,0.3);background:rgba(0,255,136,0.04)"
            >
              <div
                class="absolute top-0 left-0 w-full h-px"
                style="background:linear-gradient(to right,var(--color-jade),transparent)"
              ></div>
              <div class="flex items-center gap-2 mb-2">
                <div
                  class="w-2.5 h-2.5 rounded-full animate-pulse"
                  style="background:var(--color-jade)"
                ></div>
                <span
                  style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-jade);letter-spacing:0.12em"
                  >CURRENTLY AVAILABLE</span
                >
              </div>
              <p style="font-family:var(--font-ui);font-size:0.875rem;color:var(--color-silver)">
                Open to Senior / Staff Engineer roles and select freelance projects. Response time:
                <span style="color:var(--color-jade);font-weight:600">&lt; 24 hours</span>.
              </p>
            </div>

            <!-- Contact methods with PrimeNG text buttons -->
            <div class="space-y-3">
              @for (method of contactMethods; track method.label) {
                <div
                  class="flex items-center gap-4 p-4 group transition-all duration-200"
                  style="border:1px solid var(--color-border);background:var(--color-surface)"
                >
                  <div
                    class="w-10 h-10 flex items-center justify-center text-xl transition-colors"
                    style="border:1px solid var(--color-border)"
                  >
                    {{ method.icon }}
                  </div>
                  <div class="flex-1 min-w-0">
                    <p
                      style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em"
                    >
                      {{ method.label }}
                    </p>
                    <p
                      style="font-family:var(--font-ui);font-size:0.875rem;color:var(--color-silver)"
                    >
                      {{ method.value }}
                    </p>
                  </div>
                  <p-button
                    icon="pi pi-arrow-right"
                    [text]="true"
                    size="small"
                    (onClick)="openLink(method.href)"
                  />
                </div>
              }
            </div>

            <!-- PGP -->
            <div
              class="p-4"
              style="border:1px solid var(--color-border);background:var(--color-surface)"
            >
              <p
                style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;margin-bottom:0.5rem"
              >
                PGP FINGERPRINT
              </p>
              <code
                style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-cyan);word-break:break-all;line-height:1.6"
              >
                4A7B 9F2E 1C8D 3056 AB4E<br />7F91 2B3C 8D4A 6E1F 0923
              </code>
            </div>
          </div>

          <!-- Form -->
          <div class="lg:col-span-3">
            @if (!submitted()) {
              <div
                class="p-8 relative"
                style="border:1px solid var(--color-border);background:var(--color-surface)"
              >
                <div
                  class="absolute top-0 left-0 w-6 h-6"
                  style="border-top:2px solid var(--color-cyan);border-left:2px solid var(--color-cyan)"
                ></div>
                <div
                  class="absolute bottom-0 right-0 w-6 h-6"
                  style="border-bottom:2px solid var(--color-cyan);border-right:2px solid var(--color-cyan)"
                ></div>
                <p
                  style="font-family:var(--font-mono);font-size:0.7rem;color:var(--color-cyan);letter-spacing:0.1em;margin-bottom:2rem"
                >
                  // SEND_MESSAGE.ts
                </p>

                <div class="space-y-5">
                  <div class="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;display:block;margin-bottom:0.5rem"
                      >
                        NAME <span style="color:var(--color-ember)">*</span>
                      </label>
                      <input
                        type="text"
                        class="input-field"
                        placeholder="Jane Smith"
                        [(ngModel)]="formData.name"
                      />
                    </div>
                    <div>
                      <label
                        style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;display:block;margin-bottom:0.5rem"
                      >
                        EMAIL <span style="color:var(--color-ember)">*</span>
                      </label>
                      <input
                        type="email"
                        class="input-field"
                        placeholder="jane@company.io"
                        [(ngModel)]="formData.email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;display:block;margin-bottom:0.5rem"
                    >
                      SUBJECT <span style="color:var(--color-ember)">*</span>
                    </label>
                    <select class="input-field" [(ngModel)]="formData.subject">
                      <option value="" disabled>Select a topic...</option>
                      @for (opt of subjectOptions; track opt) {
                        <option [value]="opt">{{ opt }}</option>
                      }
                    </select>
                  </div>
                  <div>
                    <label
                      style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.1em;display:block;margin-bottom:0.5rem"
                    >
                      MESSAGE <span style="color:var(--color-ember)">*</span>
                    </label>
                    <textarea
                      class="input-field resize-none"
                      rows="6"
                      placeholder="Tell me about your project, opportunity, or question..."
                      [(ngModel)]="formData.message"
                    ></textarea>
                  </div>
                  <div class="flex items-center justify-between pt-2">
                    <p
                      style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim)"
                    >
                      <span style="color:var(--color-ember)">*</span> Required fields
                    </p>
                    <p-button
                      [label]="sending() ? 'Transmitting...' : 'Send Message'"
                      [icon]="sending() ? 'pi pi-spin pi-spinner' : 'pi pi-send'"
                      [disabled]="!isFormValid() || sending()"
                      (onClick)="submitForm()"
                    />
                  </div>
                </div>
              </div>
            } @else {
              <!-- Success -->
              <div
                class="p-12 text-center"
                style="border:1px solid rgba(0,255,136,0.3);background:rgba(0,255,136,0.04)"
              >
                <div
                  style="font-family:var(--font-display);font-size:3rem;font-weight:900;color:var(--color-jade);margin-bottom:1rem"
                >
                  ✓
                </div>
                <h3
                  style="font-family:var(--font-display);color:var(--color-silver);font-size:1.25rem;font-weight:700;margin-bottom:0.5rem"
                >
                  Message Received
                </h3>
                <p
                  style="font-family:var(--font-ui);color:var(--color-silver-muted);margin-bottom:1.5rem"
                >
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </p>
                <p-button
                  label="Send Another"
                  icon="pi pi-refresh"
                  severity="secondary"
                  (onClick)="resetForm()"
                />
              </div>
            }
          </div>
        </div>

        <!-- Social links using PrimeNG buttons -->
        <div class="mt-20 pt-8" style="border-top:1px solid var(--color-border)">
          <p
            style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-silver-dim);letter-spacing:0.15em;text-align:center;margin-bottom:1.5rem"
          >
            FIND ME ONLINE
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            @for (social of socialLinks; track social.label) {
              <p-button
                [label]="social.handle"
                [icon]="social.piIcon"
                severity="secondary"
                (onClick)="openLink(social.href)"
              />
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {
  submitted = signal(false);
  sending = signal(false);

  formData = { name: '', email: '', subject: '', message: '' };

  subjectOptions = [
    'Full-time Opportunity',
    'Freelance / Contract',
    'Open Source Collaboration',
    'Technical Consulting',
    'Speaking / Conference',
    'General Inquiry',
  ];

  contactMethods = [
    {
      icon: '✉️',
      label: 'EMAIL',
      value: 'marvincang@hotmail.com',
      href: 'mailto:marvincang@hotmail.com',
    },
    {
      icon: '💼',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/marvin-cangcianno',
      href: 'https://linkedin.com/in/marvin-cangcianno',
    },
    {
      icon: '🐙',
      label: 'GITHUB',
      value: 'github.com/marvincang',
      href: 'https://github.com/marvincang',
    },
    { icon: '🐦', label: 'TWITTER/X', value: '@marvincang', href: 'https://x.com' },
  ];

  socialLinks = [
    {
      piIcon: 'pi pi-github',
      label: 'GitHub',
      handle: '@marvincang',
      href: 'https://github.com/marvincang',
    },
    {
      piIcon: 'pi pi-linkedin',
      label: 'LinkedIn',
      handle: 'marvin-cangcianno',
      href: 'https://linkedin.com/in/marvin-cangcianno',
    },
    {
      piIcon: 'pi pi-youtube',
      label: 'YouTube',
      handle: 'MVNC',
      href: 'https://www.youtube.com/@mrcangcianno',
    },
  ];

  isFormValid() {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.subject &&
      this.formData.message
    );
  }

  submitForm() {
    if (!this.isFormValid()) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
    }, 1500);
  }

  resetForm() {
    this.formData = { name: '', email: '', subject: '', message: '' };
    this.submitted.set(false);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
