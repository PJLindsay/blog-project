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

### Points of interest
togglePostLikeStatus() in /actions/posts/ will eventually update the state of the liked icon (color change)
but it takes a short while to update on screen.

If we want a better UX, we can useOptimistic() hook to assume the save/update will succeed, so we won't get a delay, then rollback in the event there was an error (so we get faster UI feedback about the heart changing colour [for a like] after it's clicked/toggled)