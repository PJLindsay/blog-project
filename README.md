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

Form actions vs Server actions
* at time of recording, Form actions are not stable in react

Form action example:
(see app/new-post/page.js)

```
function createPost(formData) {

  formData.get()
  ...
}

<form action={createPost}>
...
</form>
```