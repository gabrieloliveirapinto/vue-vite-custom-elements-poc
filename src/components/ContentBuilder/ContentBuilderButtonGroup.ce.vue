<script setup>
import { computed } from 'vue';

import { getValueWithPixelUnit } from '@/utils/contentBuilder';
import { 
  DEFAULT_CONTENT_BUILDER_BUTTON_GROUP_BUTTONS_AMOUNT,
  DEFAULT_CONTENT_BUILDER_BUTTON_GROUP_POSITION,
  DEFAULT_CONTENT_BUILDER_BUTTON_GROUP_SPACE_BETWEEN
} from '@/utils/contentBuilder/button-group';


// Props

const props = defineProps({
  buttonsAmount: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_GROUP_BUTTONS_AMOUNT,
    type: Number
  },

  position: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_GROUP_POSITION,
    type: String
  },

  spaceBetween: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_GROUP_SPACE_BETWEEN,
    type: Number
  }
});


// Computed

const classes = computed(() => {
  const { position } = props || {};

  return {
    [`cly-content-builder-button-group--${position}`]: true
  }
});

const styles = computed(() => {
  const { spaceBetween } = props || {};

  return {
    gap: getValueWithPixelUnit(spaceBetween)
  }
})
</script>

<template>
  <div
    class="cly-content-builder-button-group"
    :class="classes"
    :style="styles"
  >
    <slot
      v-for="button in buttonsAmount"
      :key="`content-builder-button-group-button-${button}`"
      :name="`button-${button}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.cly-content-builder-button-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  

  // .cly-content-builder-button-group--full-width
  &--full-width {
    align-items: stretch;
    flex-direction: column;
  }

  // .cly-content-builder-button-group--side-by-side
  &--side-by-side {
    align-items: center;
    flex-direction: row;
  }

  // .cly-content-builder-button-group slot::slotted(*)
  & slot::slotted(*) {
    flex-grow: 1;
  }
}
</style>
