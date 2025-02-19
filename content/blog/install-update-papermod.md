---
title: "Install / Update PaperMod"
date: 2021-01-20
author: "Aditya Telange"
readingTime: 5
summary: "Learn how to install and update the PaperMod theme for your Hugo site"
---

# Install / Update PaperMod

This guide will walk you through installing and updating the PaperMod theme for your Hugo site.

## Installation

1. Go to your Hugo site's root directory
2. Add PaperMod as a submodule:
   ```bash
   git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
   ```
3. Update your `config.yml`:
   ```yaml
   theme: "PaperMod"
   ```

## Updating

To update PaperMod to the latest version:

```bash
git submodule update --remote --merge
```

This will fetch the latest changes from the PaperMod repository and merge them into your site. 