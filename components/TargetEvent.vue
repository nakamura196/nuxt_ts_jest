<template>
  <div>
    <p data-cy="countCheck">Count is: {{ count }}</p>
    <button @click="increment">増える</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Index extends Vue {
  count: number = 0;

  increment() {
    this.count += 1;
  }
}
</script>