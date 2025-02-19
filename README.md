# Hextra Markdown Viewer

A modern, feature-rich documentation site built with Hugo and the Hextra theme. This site serves as a markdown viewer and documentation platform with enhanced features for blog posts and content organization.

## Features

- 📝 Clean, responsive blog layout
- 🏷️ Tag-based content organization
- 📅 Chronological post archives
- 🌓 Dark/Light mode support
- 📱 Mobile-friendly design
- 🔍 Full-text search (powered by FlexSearch)
- 📊 Reading time estimates
- 📡 RSS feed support

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd hextra-markdown-viewer
   ```

2. Install Hugo (v0.143.1 or later):
   ```bash
   # macOS
   brew install hugo
   # Windows
   choco install hugo-extended
   ```

3. Start the development server:
   ```bash
   hugo server -D
   ```

4. Visit `http://localhost:1313` in your browser

## Adding Content

### Blog Posts

Add new blog posts in the `content/blog` directory with the following front matter:

```yaml
---
title: "Your Post Title"
date: YYYY-MM-DD
author: "Your Name"
readingTime: <estimated-minutes>
summary: "A brief summary of your post"
tags: ["tag1", "tag2"]
---
```

### Tags

Tags are automatically generated from blog post front matter. View all tags at `/tags`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 