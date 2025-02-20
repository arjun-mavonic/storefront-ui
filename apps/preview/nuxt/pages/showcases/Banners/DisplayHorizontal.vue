<template>
  <div class="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1540px]">
    <div
      v-for="{
        image,
        title,
        subtitle,
        description,
        buttonText,
        backgroundColor,
        reverse,
        titleClass,
        subtitleClass,
      } in displayDetails"
      :key="title"
      :class="[
        'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
        backgroundColor,
      ]"
    >
      <a
        class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
        :aria-label="title"
        href="#"
      />
      <div :class="['flex justify-between overflow-hidden grow', { 'flex-row-reverse': reverse }]">
        <div class="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
          <p :class="['uppercase typography-text-xs block font-bold tracking-widest', subtitleClass]">
            {{ subtitle }}
          </p>
          <h2 :class="['mb-4 mt-2 font-bold typography-headline-3', titleClass]">
            {{ title }}
          </h2>
          <p class="typography-text-base block mb-4">
            {{ description }}
          </p>
          <SfButton class="!bg-black">{{ buttonText }}</SfButton>
        </div>
        <img :src="image" :alt="title" class="w-1/2 self-end object-contain" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const displayDetails = [
  {
    image: 'http://localhost:3100/@assets/display.png',
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-negative-200',
    titleClass: 'md:typography-headline-2',
    subtitleClass: 'md:typography-headline-6',
    descriptionClass: 'md:typography-text-lg',
  },
  {
    image: 'http://localhost:3100/@assets/display-2.png',
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
  },
  {
    image: 'http://localhost:3100/@assets/display-3.png',
    title: 'Fresh and Bold',
    subtitle: 'New collection',
    description: 'Add a pop up color to your outfit',
    buttonText: 'Discover now',
    reverse: false,
    backgroundColor: 'bg-secondary-200',
  },
];
</script>
