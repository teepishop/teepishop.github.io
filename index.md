---
layout: default
---

<section class="hero is-light has-text-centered">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Primary title
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
    </div>
  </div>
</section>

<div class="columns is-multiline is-centered">
{% for category in site.data.categories %}
  <div class="column is-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd ">
    {% include category_thumb.html %}
  </div>
{% endfor %}
</div>
