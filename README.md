This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# BADD - Brothers Against Drug Deaths

Our mission is to advocate for those battling addiction and mental illness, particularly within Black and underserved communities.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Deploy static files with FTP

**First: Prepare Files**
1. In `next.config.js`, uncomment the section starting with `distDir: "out",`
2. In terminal, run `npm run build`
3. Log into your FTP account with your host
4. FTP transfer the contents of the `out` folder to your server
5. After you're done, in `next.config.js`, restore the comment

**Second: FTP Files to Server:**
1. Start an FTP connection with your ftp app
2. Drag and drop the `out` folder files to the root directory
3. Done

FTP Login Info and Details:
1. For File Tranfer Protocol access, download an ftp app (I use Cyberduck app on mac)
2. Log into bluehost and click on the User icon at the top right
3. Click "Accounts and Users" 
4. Click "Manage" button on the account
5. Scroll down to "Web Hosting Package" and click "Manage" 
6. Scroll down and clcik "CPANEL"
7. Get the "Shared IP Address" (this changes periodically)
8. Get the username and password from your website admin
9. The FTP app should use port 21

Note on Rewrites:
`/.htaccess` was modified on the server, 
adding `//RewriteRule ^(.*)/$ $1/index.html [L]`



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
