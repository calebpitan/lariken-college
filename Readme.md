# Lariken College

Student's results portal template.

## Installation

To install this results template:

```bash
git clone https://github.com/calebpitan/lariken-college
```

After cloning the repository, the repo. depends on [Chart.js](https://chartjs.org), a javascript library for plotting graphs. This dependency needs to be installed to make the student's graph (result stats) display.

```bash
npm install --production
```

The above command installs the necessary dependency in a `node_modules` folder.

## Templating

This template is more of presentation and doesn't work out of the box with any templating engine (like pug, ejs, django templating, or flask). A templating engine has to be setup, and some portions where variable inputs are needed I have tried as much as possible to indicate by filling them with liquid tags (double curly braces on both sides). It should be modified to fit.
