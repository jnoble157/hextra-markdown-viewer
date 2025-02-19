---
title: Executive Summary
weight: 1
prev: /proposal
next: /proposal/vision
---

Welcome to the Hextra Markdown Viewer documentation. Here you'll find information about how to use and customize the viewer.

## Quick Start

1. Clone the repository
2. Install Hugo (extended version)
3. Run `hugo server` to start the development server
4. Visit `http://localhost:1313` to view your site

## Features

### Markdown Support

The viewer supports all standard Markdown features plus additional extensions:

{{< callout type="info" >}}
  GitHub Flavored Markdown is fully supported, including tables, task lists, and code blocks with syntax highlighting.
{{< /callout >}}

### Search

Full-text search is enabled by default:

- Fast and accurate results
- Keyboard navigation support
- Search through all content

### Customization

The viewer can be customized through the `hugo.yaml` configuration file:

```yaml
params:
  # Your custom settings here
  navbar:
    displayTitle: true
    displayLogo: false
```

## Contributing

We welcome contributions! Please see our [GitHub repository](https://github.com/joshnoble/hextra-markdown-viewer) for more information.