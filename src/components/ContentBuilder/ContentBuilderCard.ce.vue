<script setup>
import { computed } from 'vue';
import { getValueWithPixelUnit } from '@/utils/contentBuilder';
import { 
  DEFAULT_CONTENT_BUILDER_CARD_BACKGROUND_COLOR,
  DEFAULT_CONTENT_BUILDER_CARD_BORDER_RADIUS,
  DEFAULT_CONTENT_BUILDER_CARD_SHADOW,
  DEFAULT_CONTENT_BUILDER_CARD_SHADOW_COLOR,
  DEFAULT_CONTENT_BUILDER_CARD_TYPE,
  CONTENT_BUILDER_CARD_SHADOW_COLORS
} from '@/utils/contentBuilder/card';


// Props

const props = defineProps({
  backgroundColor: {
    default: DEFAULT_CONTENT_BUILDER_CARD_BACKGROUND_COLOR,
    type: String
  },

  borderRadius: {
    default: DEFAULT_CONTENT_BUILDER_CARD_BORDER_RADIUS,
    type: Number
  },

  shadow: {
    default: DEFAULT_CONTENT_BUILDER_CARD_SHADOW,
    type: Boolean
  },

  shadowColor: {
    default: DEFAULT_CONTENT_BUILDER_CARD_SHADOW_COLOR,
    type: String
  },

  type: {
    default: DEFAULT_CONTENT_BUILDER_CARD_TYPE,
    type: String
  }
});


// Computed

const classes = computed(() => {
  const { shadow, shadowColor, type } = props || {};
  const isValidShadow = shadow && CONTENT_BUILDER_CARD_SHADOW_COLORS.includes(shadowColor);

  return {
    [`cly-content-builder-card--${type}`]: true,
    [`cly-content-builder-card--with-${shadowColor}-shadow`]: isValidShadow
  }
})

const styles = computed(() => {
  const {
    backgroundColor,
    borderRadius
  } = props || {};

  return {
    backgroundColor,
    borderRadius: getValueWithPixelUnit(borderRadius)
  }
});
</script>

<template>
  <div
    class="cly-content-builder-card"
    :class="classes"
    :style="styles"
  >
    <slot name="header" />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<style lang="scss" scoped>
.cly-content-builder-card {
  padding: 8px;
  border: none;

  display: flex;
  flex-direction: column;
  gap: 16px;

  // .cly-content-builder-card slot[body]::slotted(*)
  & slot[name=body]::slotted(*) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 8px;
  }

  // .cly-content-builder-card--fullscreen
  &--fullscreen {
    height: 100vh;
  }

  // .cly-content-builder-card--half-modal
  &--half-modal {
    height: 200px;
  }

  // .cly-content-builder-card--modal
  &--modal {
    height: 400px;
  }

  // .cly-content-builder-card--sticky
  &--sticky {
    height: auto;
  }

  // .cly-content-builder-card--with-dark-shadow
  &--with-dark-shadow {
    box-shadow: 0px 2px 3px 0px #7878781A,
    0px 6px 6px 0px #78787817,
    0px 14px 8px 0px #7878780D,
    0px 24px 10px 0px #78787803,
    0px 38px 11px 0px #78787800,
    0px 6px 6px 0px #78787817;
  }

  // .cly-content-builder-card--with-light-shadow
  &--with-light-shadow {
    box-shadow: 0px 2px 3px 0px #7878781A,
    0px 6px 6px 0px #78787817,
    0px 14px 8px 0px #7878780D,
    0px 24px 10px 0px #78787803,
    0px 38px 11px 0px #78787800,
    0px 6px 6px 0px #78787817;
  }
}
</style>
