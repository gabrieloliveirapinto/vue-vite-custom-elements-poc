<script setup>
import { getValueWithPixelUnit } from '@/utils/contentBuilder';
import {
  DEFAULT_CONTENT_BUILDER_TEXT_BOX_COLOR,
  DEFAULT_CONTENT_BUILDER_TEXT_BOX_FONT_FAMILY,
  DEFAULT_CONTENT_BUILDER_TEXT_BOX_FONT_SIZE,
  DEFAULT_CONTENT_BUILDER_TEXT_BOX_FONT_WEIGHT,
  DEFAULT_CONTENT_BUILDER_TEXT_BOX_TEXT,
  HTML_REGEX
} from '@/utils/contentBuilder/text-box';
import { computed } from 'vue';


// Props

const props = defineProps({
  color: {
    default: DEFAULT_CONTENT_BUILDER_TEXT_BOX_COLOR,
    type: String
  },

  fontFamily: {
    default: DEFAULT_CONTENT_BUILDER_TEXT_BOX_FONT_FAMILY,
    type: String
  },

  fontSize: {
    default: DEFAULT_CONTENT_BUILDER_TEXT_BOX_FONT_SIZE,
    type: Number
  },

  fontWeight: {
    default: DEFAULT_CONTENT_BUILDER_TEXT_BOX_FONT_WEIGHT,
    type: Number
  },

  text: {
    default: DEFAULT_CONTENT_BUILDER_TEXT_BOX_TEXT,
    type: String
  }
});


// Computed

const isHTMLContent = computed(() => HTML_REGEX.test(props.text));

const styles = computed(() => {
  const {
    color,
    fontFamily,
    fontSize,
    fontWeight
  } = props || {};

  return {
    color,
    fontFamily,
    fontSize: getValueWithPixelUnit(fontSize),
    fontWeight
  }
});
</script>

<template>
  <div
    v-if="isHTMLContent"
    class="cly-content-builder-text-box"
    v-html="text"
  />
  <p
    v-else
    class="cly-content-builder-text-box"
    :style="styles"
  >
    {{ text }}
  </p>
</template>

<style lang="scss" scoped>
.cly-content-builder-text-box {
  margin: 0;

  // .cly-content-builder-text-box *
  & * {
    margin: 0;
  }
}
</style>
