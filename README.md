<!-- # S3UploadApp -->

# 📂 Angular 20 + AWS Amplify File Upload App

A simple Angular 20 standalone app integrated with AWS Amplify that allows authenticated users to upload files securely to Amazon S3 using Cognito User Pools.

🔒 Only authenticated users can upload.
☁️ Files are stored in a private S3 bucket.
⚡ Built with the latest Angular (v20) and Amplify Gen 1.


🚀 Features

✅ AWS Amplify Authentication (Cognito User Pool login & signup)

✅ S3 File Upload with secure access

✅ Angular 20 standalone components (no AppModule)

✅ Deployed with AWS Amplify Hosting

✅ Polyfilled for Angular 20 (global, Buffer, process fixes)

🛠️ Tech Stack

Angular 20
 – Standalone Angular app

AWS Amplify
 – Authentication & Storage

Amazon Cognito
 – Secure login for users

Amazon S3
 – File storage

📂 Project Structure

<img width="632" height="315" alt="image" src="https://github.com/user-attachments/assets/c3f1f3c6-c203-4b4c-9590-dd2dc4d4069b" />

    
### ⚙️ Setup Instructions
1️⃣ Clone Repo
git clone https://github.com/your-username/s3-upload-app.git
cd s3-upload-app

2️⃣ Install Dependencies
npm install

3️⃣ Configure Amplify

Initialize Amplify (Gen 1):

- npx amplify init
- npx amplify add auth
- npx amplify add storage
- npx amplify push


This will generate amplify_outputs.json.

4️⃣ Run Locally
ng serve


5️⃣ Deploy to Amplify Hosting

Push your code to GitHub → Connect repo in AWS Amplify Console → Deploy 🚀
