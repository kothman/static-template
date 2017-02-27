# Static Site Template

## Getting started

Install node modules.
```
npm install
```

## Commands

See gulpfile.js for more info.

Compile HTML
```
gulp html
```

Compile and Minify JS
```
gulp js
```

Compile and Minify Sass
```
gulp sass
```

Run all tasks and watch for changes
```
gulp
```

## Directory Structure

Modify source files in the src/ folder.
src/html/elements/ should contain HTML elements that can be placed in pages or other elements.
src/html/pages/ should contain your static pages, consiting of HTML and elements.

All files are placed in the release/ folder. Directory structure of src/html/pages/ should be preserved.