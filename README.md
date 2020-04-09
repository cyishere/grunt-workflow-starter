# About
This is a frond-end workflow for HTML/SASS and vanilla Javascript by using [Grunt](https://gruntjs.com/).

It's a very basic boilerplate, welcome to use it for front-end developing.

In this starter, the file structure is like this:

```bash
.
├── Gruntfile.js
├── README.md
├── dist
│   ├── css
│   │   ├── style.css
│   │   └── style.min.css
│   ├── images
│   │   └── little-nowten.png
│   └── js
│       └── app.js
├── index.html
├── package.json
└── src
    ├── script
    │   └── app.js
    └── scss
        ├── _base.scss
        └── style.scss
```

All the SASS files and Javascript files are all in the `src/` directory, and will compiled to the `dist/` directory by Grunt.

## Resources:

- [Getting Started with Grunt and Sass](https://www.taniarascia.com/getting-started-with-grunt-and-sass/): The author made a task runner without compiling javascript files;
- [Building a Project Starter with NPM Scripts](https://css-irl.info/a-modern-front-end-workflow-part-1/): This is cool, but still no javascript compiling.
- [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/): This covers js linting and uglify, but I need compile ES6, so...