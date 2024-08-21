# Personal Website

This repository holds the source code of my personal website and blog which is statically
generated via [Jekyll](https://jekyllrb.com/). You can find more reasoning regarding 
[goals]({% post_url 2021-05-18-on-blogging %}) and the technical and design choices I made 
in my early posts.

## Build

In order to build the website locally, using bundler and the included Gemfile. 
In particular, use 
`bundle install` and `bundle exec jekyll serve`.



## Credits

The theming of this site was forked from [Kasper](https://github.com/rosario/kasper) which was 
in-turn a port of Ghost's default theme to Jekyll.

The auto-generation of the site on GitHub Pages utilizes a workflow that statically generates 
the website files and pushes to the `gh-pages` branch. This workflow is found at
[Jekyll Action](https://github.com/helaili/jekyll-action).

The pagination for the main page and auto-pagination for post categories is handled by 
[Jekyll-Paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2).

Modified timestamps utilize [jekyll-last-modified-at](https://github.com/gjtorikian/jekyll-last-modified-at)
to provide timestamps based on git.

### License

The original source repository which this repository was forked from is licensed by the Ghost Foundation under the MIT license.
All modifications by me to code are licensed under the MIT license.
All writing (included in the _posts directory) is not licensed for reproduction. Please do not take or share my writing without permission. 