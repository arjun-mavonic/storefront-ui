<template>
  <div class="custom-block border bg-white mt-4" :class="{ generate: !showcasePath }">
    <iframe :src="exampleUrl" :allow="allow" class="w-full h-full" />
  </div>
</template>

<script>
import components from '../../utils/components.json';

export default {
  props: {
    showcasePath: {
      type: String,
      default: undefined,
    },
    allow: {
      type: String,
      default: undefined,
    },
    reactBasePath: {
      type: String,
      default: undefined,
    },
    vueBasePath: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    frameworkName() {
      return this.$route.path.split('/')[1];
    },
    componentName() {
      return this.$route.path.split('/').pop()?.split('.')[0];
    },
    basePath() {
      console.log(this.reactBasePath);
      const reactPath = this.reactBasePath || this.$themeConfig.DOCS_EXAMPLES_REACT_PATH;
      const vuePath = this.vueBasePath || this.$themeConfig.DOCS_EXAMPLES_VUE_PATH;

      return this.frameworkName === 'react' ? reactPath : vuePath;
    },
    exampleUrl() {
      const componentNameFull = components[this.frameworkName].find((component) =>
        component.toLowerCase().includes('sf' + this.componentName),
      );

      const x = `${this.basePath}/${
        this.showcasePath ? `showcases/${this.showcasePath}` : `examples/${componentNameFull}`
      }?docs=true`;

      console.log(x);

      return x;
    },
  },
};
</script>

<style scoped>
.generate {
  height: 500px;
}
</style>
