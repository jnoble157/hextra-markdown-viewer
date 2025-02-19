---
title: "Social-Icons / Share-Icons"
date: 2021-01-20
author: "Aditya Telange"
readingTime: 2
summary: "Learn how to configure and customize social sharing icons"
---

# Social Icons and Share Icons

Configure social media icons and sharing buttons for your Hugo site.

## Social Icons

Add social links to your config.yml:
```yaml
social:
  twitter: username
  github: username
  linkedin: username
```

## Share Icons

Enable social sharing buttons:
```yaml
params:
  ShowShareButtons: true
  ShareButtons: ["twitter", "linkedin", "reddit"]
```

The icons will automatically appear in your site's header and post footers. 