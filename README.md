# Jackson's Tech World

A technical blog exploring systems programming, C++, performance optimization, and the foundations of computing.

## 🚀 Live Site

Visit the blog at: [https://spi3ex.github.io](https://spi3ex.github.io)

## 📝 About

This blog focuses on:
- **Systems Programming**: Low-level programming concepts and techniques
- **C++ Development**: Modern C++ best practices and advanced features
- **Performance Optimization**: Making code faster and more efficient
- **Algorithms & Data Structures**: Deep dives into computational fundamentals

## 🛠 Tech Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting platform
- **Sass** - CSS preprocessing
- **Responsive Design** - Mobile-friendly layout

## 🏗 Local Development

### Prerequisites
- Ruby (>= 2.7)
- Bundler gem
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/spi3ex/spi3ex.github.io.git
cd spi3ex.github.io

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Open in browser
open http://localhost:4000
```

### Development Commands
```bash
# Build the site
bundle exec jekyll build

# Serve with live reload
bundle exec jekyll serve --livereload

# Serve drafts
bundle exec jekyll serve --drafts

# Clean build directory
bundle exec jekyll clean
```

## 📄 Publishing

### GitHub Pages Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Add new post: Your Post Title"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

3. **Automatic Deployment:**
   - GitHub Pages will automatically build and deploy the site
   - Changes are typically live within 1-2 minutes
   - Check the Actions tab for build status

### Writing New Posts

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-post-title.markdown`

2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2025-08-29 10:00:00
   categories: [Programming, C++]
   tags: [cpp, performance, optimization]
   excerpt: "Brief description of your post"
   ---
   ```

3. Write your content using Markdown

4. Test locally, then commit and push

## 🎨 Customization

### Colors & Styling
- Main styles: `assets/css/main.scss`
- Theme colors can be adjusted in the CSS custom properties

### Site Configuration
- Edit `_config.yml` for site-wide settings
- Update author info, social links, and metadata

### Adding Features
- Analytics: Uncomment and configure Google Analytics in `_config.yml`
- Comments: Set up Disqus by adding your shortname to `_config.yml`
- Social Links: Update the about page with your social media profiles

## 📊 Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ RSS feed
- ✅ Syntax highlighting
- ✅ Category and tag pages
- ✅ Pagination
- ✅ Social media meta tags
- ✅ Performance optimized

## 🤝 Contributing

While this is a personal blog, suggestions and feedback are welcome:

1. Open an issue for suggestions
2. Fork and submit pull requests for improvements
3. Share the blog posts if you find them useful

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

## 📄 License

This project is open source and available under the [MIT License](LICENSE.txt).

The original source repository which this repository was forked from is licensed by the Ghost Foundation under the MIT license.
All modifications by me to code are licensed under the MIT license.
All writing (included in the _posts directory) is not licensed for reproduction. Please do not take or share my writing without permission.

## 📞 Contact

- **GitHub**: [@spi3ex](https://github.com/spi3ex)
- **Email**: Available on GitHub profile
- **Blog**: [spi3ex.github.io](https://spi3ex.github.io)

---

*Built with ❤️ using Jekyll and GitHub Pages* 