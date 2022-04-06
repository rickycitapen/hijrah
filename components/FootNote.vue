<template>
  
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'

export default class FootNote extends Vue {}
</script>

<style lang="scss" scoped>
.footnote {
  text-align: center;
  margin-top: 1em;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: var(--link-author);
    font-weight: bold;
  }
}
</style>
