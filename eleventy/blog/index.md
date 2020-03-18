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

<div class="flex flex-col">
{%- for blog in blogs %}
<div class="flex flex-col">
<time class="text-lg font-semibold text-gray-700">{{blog.date | readableDate}}</time>
<a href="{{blog.url}}" class="text-2xl font-bold text-gray-800 hover:text-blue-700">{{blog.data.title}}</a><br>
</div>
{% endfor %}
</div>

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
</nav>