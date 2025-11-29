# Deploying Veriochi to Vercel

Vercel is the recommended platform for deploying Next.js applications. It offers zero-configuration deployment, global CDN, and automatic HTTPS.

## Prerequisites

1.  A [Vercel account](https://vercel.com/signup).
2.  The Veriochi project pushed to a Git repository (GitHub, GitLab, or Bitbucket).

## Step-by-Step Guide

### 1. Import Project

1.  Log in to your Vercel dashboard.
2.  Click **"Add New..."** and select **"Project"**.
3.  Import the Git repository where your Veriochi code is hosted.

### 2. Configure Project

Vercel automatically detects Next.js projects, so the default settings usually work out of the box.

-   **Framework Preset**: Next.js
-   **Root Directory**: `./` (default)
-   **Build Command**: `next build` (default)
-   **Output Directory**: `.next` (default)
-   **Install Command**: `pnpm install` (or `npm install` / `yarn install` depending on your lockfile)

### 3. Environment Variables

If your project uses any environment variables (e.g., API keys), add them in the **"Environment Variables"** section before deploying.

### 4. Deploy

Click **"Deploy"**. Vercel will:
1.  Clone your repository.
2.  Install dependencies.
3.  Build the project.
4.  Deploy it to a global edge network.

Once complete, you will get a live URL (e.g., `veriochi-landing.vercel.app`) and a dashboard to manage your deployment.

## Automatic Deployments

By default, Vercel sets up **Continuous Deployment**. Every time you push changes to your `main` branch, Vercel will automatically build and deploy the new version.

## Custom Domains

To add a custom domain (e.g., `veriochi.com`):
1.  Go to your Project Settings > **Domains**.
2.  Enter your domain name and click **Add**.
3.  Follow the instructions to configure the DNS records with your domain registrar.
