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

Note: this app uses Cloudinary to simplify the image management coding 
(to avoid the hassle of setting up an AWS S3 bucket)

make a .env.local file with environment variables for your Cloudinary account
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>