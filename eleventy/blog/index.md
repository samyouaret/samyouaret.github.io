---
tags: no
title: Articles
layout: blog_layout.njk
page_title: Samy Ouaret Blog
style : /build/css/tailwind.css
templateClass : flex flex-col
pagination:
  data: collections.blog
  size: 2
  alias: blogs
---

<div class="flex flex-col md:flex-row">
{%- for blog in blogs %}
   <div class="flex flex-col my-1 border-b border-dashed border-b-gray-300 p-2 md:w-1/2">
   <a href="{{blog.url}}" class="text-2xl font-bold text-gray-800 hover:text-blue-700">
   <time class="text-sm font-semibold text-gray-700">{{blog.date | readableDate}}</time><br>
   {{blog.data.title}}
   <img src="{{ blog.data.image }}"  class="w-full max-h-xs my-2 rounded-lg">
   </a><br>
   <a href="{{blog.url}}" class="text-lg my-2 text-gray-800 underline hover:text-gray-900">
   read</a><br>
   </div>
{% endfor %}
</div>

<nav aria-labelledby="my-pagination">
  <ol class="my-8 flex flex-row justify-between">
   <li>
   {% if pagination.href.previous %}
   <a href="{{ pagination.href.previous }}" class="block rounded-sm py-1 px-2 bg-gray-100 border border-gray-300 text-gray-900 text-lg hover:bg-white">Previous page</a>
   {% endif %}
   </li>
   {% if pagination.href.next %}
   <a href="{{ pagination.href.next }}" class="block rounded-sm py-1 px-2 bg-gray-100 border border-gray-300 text-gray-900 text-lg hover:bg-white">Next page</a>
   {% endif %}
   </li>
  </ol>
</nav>