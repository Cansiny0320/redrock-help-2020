<template>
  <div class="v-carousel">
    <carousel>
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'v-carousel',
  props: {
    imagesUrl: {
      type: Array,
      required: true
    } 
  }
}
</script>

