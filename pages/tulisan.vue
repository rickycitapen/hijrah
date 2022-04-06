<template>
  <div class="container about center">
    <div class="wrapper" style="line-height: 1.5;">
      <h3>Content Masih Kosong</h3>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'

import { AppConstant, META_DESC } from '~/constant/index'

@Component
export default class PageAbout extends Vue {
  appTitle = AppConstant.TITLE;

  @State settingActiveTheme;
  @Mutation setHeaderTitle;

  get metaHead () {
    const title = `${AppConstant.ABOUT} | ${AppConstant.TITLE}`
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: META_DESC },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: this.settingActiveTheme.bgColor
        }
      ]
    }
  }

  data () {
    return {
      copyrightYear: new Date().getFullYear()
    }
  }

  head () {
    return this.metaHead
  }

  beforeMount () {
    this.setHeaderTitle('Tentang')
  }
}
</script>

<style lang="scss" scoped>
.bug {
  margin-top: 2em;
}
.footer {
  margin-top: 100px;
}
</style>
