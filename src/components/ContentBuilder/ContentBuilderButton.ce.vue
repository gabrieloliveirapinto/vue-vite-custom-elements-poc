<script setup>
import { computed } from 'vue';

import { getValueWithPixelUnit } from '@/utils/contentBuilder';
import {
  CONTENT_BUILDER_BUTTON_ACTION_TYPES,
  CONTENT_BUILDER_BUTTON_ACTION_VALUE_BY_ACTION_TYPE,
  DEFAULT_CONTENT_BUILDER_BUTTON_ACTION,
  DEFAULT_CONTENT_BUILDER_BUTTON_BACKGROUND_COLOR,
  DEFAULT_CONTENT_BUILDER_BUTTON_BORDER_RADIUS,
  DEFAULT_CONTENT_BUILDER_BUTTON_COLOR,
  DEFAULT_CONTENT_BUILDER_BUTTON_FONT_FAMILY,
  DEFAULT_CONTENT_BUILDER_BUTTON_HORIZONTAL_PADDING,
  DEFAULT_CONTENT_BUILDER_BUTTON_HOVER_BACKGROUND_COLOR,
  DEFAULT_CONTENT_BUILDER_BUTTON_HOVER_COLOR,
  DEFAULT_CONTENT_BUILDER_BUTTON_TEXT,
  DEFAULT_CONTENT_BUILDER_BUTTON_VERTICAL_PADDING
} from '@/utils/contentBuilder/button';


// Props

const props = defineProps({
  action: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_ACTION,
    type: String
  },

  backgroundColor: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_BACKGROUND_COLOR,
    type: String
  },

  borderRadius: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_BORDER_RADIUS,
    type: Number
  },

  color: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_COLOR,
    type: String
  },

  fontFamily: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_FONT_FAMILY,
    type: String
  },

  horizontalPadding: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_HORIZONTAL_PADDING,
    type: Number
  },

  hoverBackgroundColor: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_HOVER_BACKGROUND_COLOR,
    type: String
  },

  hoverColor: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_HOVER_COLOR,
    type: String
  },

  text: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_TEXT,
    type: String
  },

  verticalPadding: {
    default: DEFAULT_CONTENT_BUILDER_BUTTON_VERTICAL_PADDING,
    type: Number
  }
});


// Computed

const cssVariables = computed(() => {
  const {
    backgroundColor,
    color,
    hoverBackgroundColor,
    hoverColor
  } = props || {};

  return {
    '--background-color': backgroundColor,
    '--color': color,
    '--hover-background-color': hoverBackgroundColor,
    '--hover-color': hoverColor,
  };
});

const styles = computed(() => {
  const {
    borderRadius,
    fontFamily,
    horizontalPadding,
    verticalPadding
  } = props || {};

  return {
    ...cssVariables.value,
    borderRadius: getValueWithPixelUnit(borderRadius),
    fontFamily,
    padding: `${getValueWithPixelUnit(verticalPadding)} ${getValueWithPixelUnit(horizontalPadding)}`
  }
});

// Methods

const onButtonClick = () => {
  const { action } = props;

  if (CONTENT_BUILDER_BUTTON_ACTION_TYPES.includes(action)) {
    const value = CONTENT_BUILDER_BUTTON_ACTION_VALUE_BY_ACTION_TYPE[action];

    window.location.href += value;
  }
}
</script>

<template>
  <button
    class="cly-content-builder-button"
    :style="styles"
    @click="onButtonClick"
  >
    {{ text }}
  </button>
</template>

<style lang="scss" scoped>
.cly-content-builder-button {
  display: block;
  width: 100%;

  cursor: pointer;
  outline: none;
  margin: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  border: none;
  background: var(--background-color);
  color: var(--color);

  // .cly-content-builder-button:hover
  &:hover {
    background: var(--hover-background-color);
    color: var(--hover-color);
  }
}
</style>
