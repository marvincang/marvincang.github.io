import { Component, computed, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { LiquidGlass } from '@components/liquid-glass/liquid-glass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { PostCard } from './post-card/post-card';
import { BirthdayPost } from '../../types/BirthdayPost';
import { PenToSquare } from '@primeicons/angular/pen-to-square';
import { Sparkles } from '@primeicons/angular/sparkles';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cia-birthday-27-page',
  imports: [
    LiquidGlass,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    PostCard,
    PenToSquare,
    Sparkles,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cia-birthday-27-page.html',
  styleUrl: './cia-birthday-27-page.css',
})
export class CiaBirthday27Page implements OnDestroy {
  @ViewChild('video') videoEl!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasEl!: ElementRef<HTMLCanvasElement>;

  stream = signal<MediaStream | null>(null);
  capturedImage = signal<string | null>(null);
  isCameraOn = signal<boolean>(false);

  posts = signal<BirthdayPost[]>(JSON.parse(localStorage.getItem('birthday-posts') || '[]'));

  ciaPosts = computed(() => this.posts().filter((d) => d.for === 'cia'));
  joPosts = computed(() => this.posts().filter((d) => d.for === 'jo'));

  value = signal<'cia' | 'jo'>('cia');

  forValue = signal<'cia' | 'jo'>('cia');

  nameControl = new FormControl('', Validators.required);
  messageControl = new FormControl('', Validators.required);

  async startCamera() {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });

      this.stream.set(mediaStream);
      this.videoEl.nativeElement.srcObject = mediaStream;
      this.isCameraOn.set(true);
    } catch (err) {
      console.error('Camera access denied or unavailable:', err);
    }
  }

  takeSnapshot() {
    const video = this.videoEl.nativeElement;
    const canvas = this.canvasEl.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // Converts frame to base64 Data URL (or use canvas.toBlob() for uploads)
      const dataUrl = canvas.toDataURL('image/png');
      this.capturedImage.set(dataUrl);
    }
  }

  async retakeSnapshot() {
    this.capturedImage.set(null);
    await this.startCamera();
  }

  stopCamera() {
    const activeStream = this.stream();
    if (activeStream) {
      this.capturedImage.set(null);
      activeStream.getTracks().forEach((track) => track.stop());
      this.stream.set(null);
      this.isCameraOn.set(false);
    }
  }

  ngOnDestroy() {
    this.stopCamera();
  }

  animeizeMe() {}

  downloadImage(imageString: string, fileName: string = 'download.png') {
    const anchor = document.createElement('a');
    anchor.href = imageString;
    anchor.download = '~/Dev/marvincang.github.io/public/' + fileName;

    // Trigger download programmatically
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  writeToLocalStorage() {
    const results: BirthdayPost[] = JSON.parse(localStorage.getItem('birthday-posts') || '[]');
    const date = new Date();
    let filename = '';
    if (this.capturedImage()) {
      filename = this.nameControl.value + '-' + date.toISOString() + '.png';
      this.downloadImage(this.capturedImage()!, filename);
    }

    results.push({
      name: this.nameControl.value,
      message: this.messageControl.value,
      image: filename,
      for: this.forValue(),
      createdAt: date,
    } as BirthdayPost);

    results.sort((a, b) =>
      new Date(a.createdAt).toISOString > new Date(b.createdAt).toISOString ? 1 : -1,
    );

    this.value.set(this.forValue());

    localStorage.setItem('birthday-posts', JSON.stringify(results));
    this.posts.set(results);

    this.nameControl.reset();
    this.messageControl.reset();
    this.stopCamera();
  }
}
