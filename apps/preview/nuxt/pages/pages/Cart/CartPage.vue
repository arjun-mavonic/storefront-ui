<template>
  <div>
    <NavbarTop />
    <div>Test product</div>
    <div class="my-20">
      <template v-for="index in 10" :key="index">
        <ReviewWithAvatar class="my-5" />
      </template>
    </div>
    <NavbarBottom />
  </div>
</template>

<script setup>
import { NavbarTop, NavbarBottom, WithAvatar as ReviewWithAvatar } from '@storefront-ui/vue-blocks';
</script>
