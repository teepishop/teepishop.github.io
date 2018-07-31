---
layout: default
---

<!-- <h3>Danh muc {{ site.data.categories }} </h3> -->
<hr />
<div class="columns is-multiline is-centered">
{% for category in site.data.categories %}
  <div class="column is-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd ">
    {% include category_thumb.html %}
  </div>
{% endfor %}
</div>
<hr />
