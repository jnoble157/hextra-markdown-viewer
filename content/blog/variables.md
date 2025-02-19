---
title: "Variables | Front Matter"
date: 2021-01-20
author: "Aditya Telange"
readingTime: 6
summary: "Understanding variables and front matter configuration in Hugo"
---

# Variables and Front Matter

Learn about the various variables and front matter options available in Hugo.

## Front Matter Variables

Common front matter variables:
```yaml
---
title: "My Post"
date: 2021-01-20
draft: false
tags: ["hugo", "theme"]
categories: ["docs"]
---
```

## Site Variables

Access site-wide variables in your templates:
```go
{{ .Site.Title }}
{{ .Site.BaseURL }}
{{ .Site.Language.Lang }}
```

## Page Variables

Access page-specific variables:
```go
{{ .Title }}
{{ .Date }}
{{ .Permalink }}
```

These variables help you customize your content and templates. 