import { Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { LiquidGlass } from '@components/liquid-glass/liquid-glass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { PostCard } from './post-card/post-card';
import { BirthdayPost } from '../../types/BirthdayPost';
import { PenToSquare } from '@primeicons/angular/pen-to-square';
import { Sparkles } from '@primeicons/angular/sparkles';

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

  post: BirthdayPost = {
    name: 'Peter Parker',
    createdAt: new Date('Mon, 27 Jul 2026 19:58:03 GMT'),
    message:
      "Happy birthday Marvin! Wishing you all the best in your PhD journey at GSU. You've always been an inspiration to everyone around you. 🎉",
    image: '/me-anime.png',
  };

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

  caricaturizeMe() {}
}
