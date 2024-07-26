<script setup>
import { computed } from 'vue';

import { getValueWithPixelUnit } from '@/utils/contentBuilder';
import {
  CONTENT_BUILDER_IMAGE_RESOLUTIONS,
  CONTENT_BUILDER_IMAGE_SIZES,
  DEFAULT_CONTENT_BUILDER_IMAGE_POSITION,
  DEFAULT_CONTENT_BUILDER_IMAGE_REPEAT,
  DEFAULT_CONTENT_BUILDER_IMAGE_RESOLUTION,
  DEFAULT_CONTENT_BUILDER_IMAGE_SIZE,
  DEFAULT_CONTENT_BUILDER_IMAGE_SPACING,
  DEFAULT_CONTENT_BUILDER_IMAGE_SRC
} from '@/utils/contentBuilder/image';


// Props

const props = defineProps({
  position: {
    default: DEFAULT_CONTENT_BUILDER_IMAGE_POSITION,
    type: String
  },

  repeat: {
    default: DEFAULT_CONTENT_BUILDER_IMAGE_REPEAT,
    type: String
  },

  resolution: {
    default: DEFAULT_CONTENT_BUILDER_IMAGE_RESOLUTION,
    type: String
  },

  size: {
    default: DEFAULT_CONTENT_BUILDER_IMAGE_SIZE,
    type: String
  },

  spacing: {
    default: DEFAULT_CONTENT_BUILDER_IMAGE_SPACING,
    type: Number
  },

  src: {
    default: DEFAULT_CONTENT_BUILDER_IMAGE_SRC,
    type: String,
  }
})


// Computed

const classes = computed(() => {
  const {
    resolution,
    size
  } = props || {};

  const isValidResolution = resolution && CONTENT_BUILDER_IMAGE_RESOLUTIONS.includes(resolution);
  const finalResolution = isValidResolution ? resolution : DEFAULT_CONTENT_BUILDER_IMAGE_RESOLUTION;
  const isValidSize = size && CONTENT_BUILDER_IMAGE_SIZES.includes(size);
  const finalSize = isValidSize ? size : DEFAULT_CONTENT_BUILDER_IMAGE_SIZE;

  return {
    [`cly-content-builder-image--resolution-${finalResolution}`]: true,
    [`cly-content-builder-image--size-${finalSize}`]: true
  }
});

const styles = computed(() => {
  const { spacing } = props || {};

  return {
    marginRight: getValueWithPixelUnit(spacing)
  }
})
</script>

<template>
  <div
    v-if="src"
    class="cly-content-builder-image"
    :class="classes"
    :style="styles"
  >
    <img :src="src">
  </div>
</template>

<style lang="scss" scoped>
.cly-content-builder-image {

  // .cly-content-builder-image img
  & img {
    object-fit: cover;
  }

  // .cly-content-builder-image--size-full img
  &--size-full img {
    width: 100%;
    height: 100%;
  }

  // .cly-content-builder-image--size-large img
  &--size-large img {
    width: 152px;
    height: 152px;
  }

  // .cly-content-builder-image--size-medium img
  &--size-medium img {
    width: 76px;
    height: 76px;
  }

  // .cly-content-builder-image--size-small img
  &--size-small img {
    width: 38px;
    height: 38px;
  }
}
</style>
