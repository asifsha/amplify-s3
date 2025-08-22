import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { uploadData } from 'aws-amplify/storage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('s3-upload-app');

   async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const result = await uploadData({
        key: file.name,
        data: file,
        options: { contentType: file.type },
      }).result;

      console.log('✅ Uploaded:', result);
      alert(`File uploaded: ${file.name}`);
    } catch (error) {
      console.error('❌ Upload error:', error);
    }
  }
}
