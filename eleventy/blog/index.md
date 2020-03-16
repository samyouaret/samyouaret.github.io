---
tags: no
title: Welcome to Samy Ouaret blog
layout: layout.liquid
page_title: Samy Ouaret Blog
pagination:
  data: collections.blog
  size: 2
  alias: blogs
---

{%- for blog in blogs %}
- [{{blog.data.title}}]({{blog.url}})
{% endfor %}

<nav aria-labelledby="my-pagination">
<h2 id="my-pagination">This is my Pagination</h2>
<ol>
<li>
{% if pagination.href.previous %}
 <a href="{{ pagination.href.previous }}">Previous</a>
{% else %}Previous{% endif %}
</li>
<li>
{% if pagination.href.next %}
 <a href="{{ pagination.href.next }}">Next</a>
{% else %}Next{% endif %}
</li>
</ol>