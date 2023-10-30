<template>
  <div>
    <h2 class="h2" id="form_elements">Media and Form Elements</h2>

    <p>This last section contains elements that don't render well in markdown. Please consult the final section in <a href="https://github.com/bryanbraun/poor-mans-styleguide/blob/gh-pages/index.html">index.html</a>, to see the rest of the
      styleguide.
    </p>

    <h2 class="h2">Media</h2>

    <h3 class="h3">The Audio Element:</h3>
    <audio controls>
      <source src="http://www.w3schools.com/tags/horse.ogg" type="audio/ogg" />
      <source src="http://www.w3schools.com/tags/horse.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>

    <h3 class="h3">The Video Element:</h3>
    <video width="320" height="240" controls>
      <source src="http://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
      <source src="http://www.w3schools.com/tags/movie.ogg" type="video/ogg" />
      Your browser does not support the video tag.
    </video>

    <h3 class="h3">Embedded content:</h3>

    <p>YouTube video (iframe):</p>

    <iframe width="560" height="315" src="http://www.youtube.com/embed/l4f9QF0SGuQ" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>