# blog-project

Simple Blog site from Max's Next.js 15 course on Udemy 

https://www.udemy.com/course/nextjs-react-the-complete-guide


(Section 6)
Mutating Data

Note: A sqlite database (posts.db) will be created (if it doesn't exist)
every time you run this app. This database (posts.db) is not under source control since you can make your own.

Development
```
npm install
npm run dev
```

create/run production instance
```
npm build
npm run start
```


Data mutation strategies:
* Standalone backend (separate API)
* Integrated NextJS App (with server actions)

## Database
all database logic is in /lib/posts.js
a sqlite3 database is created (if it does not already exist) when the app is started

## Cloudinary usage
to avoid the hassle of setting up an AWS S3 bucket - we use Cloudinary

register for an account at Cloudinary

put environment variables in your .env.local file for your Cloudinary account
```
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
```