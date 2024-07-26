<script setup>
import { computed, ref } from 'vue';
import { getContentBuilderBlockBindableAttributes } from '@/utils/contentBuilder';

const content = ref({
  backgroundColor: 'aqua',
  shadow: true,
  buttonGroup: {
    buttons: [{
      text: 'This is button 1'
    },{}]
  },
  image: {
    src: 'https://placehold.co/600x400/EEE/31343C'
  },
  textBox: {
    text: "<h1>Save 20% on your next purchase with this coupon code!</h1>"
  }
});

const contentOptionsByBlock = computed(() => {
  const {
    buttonGroup,
    image: imageOptions,
    textBox: textBoxOptions,
    ...cardOptions
  } = content.value || {};
  const { buttons: buttonsOptions, ...buttonGroupOptions } = buttonGroup || {};

  return {
    buttonsOptions,
    buttonGroupOptions,
    imageOptions,
    cardOptions,
    textBoxOptions
  };
});

const cardAttributes = computed(() => getContentBuilderBlockBindableAttributes(contentOptionsByBlock.value.cardOptions));

const buttonGroupAttributes = computed(() => {
  const { buttonGroupOptions, buttonsOptions } = contentOptionsByBlock.value || {};

  return getContentBuilderBlockBindableAttributes({
    ...buttonGroupOptions,
    buttonsAmount: Array.isArray(buttonsOptions) ? buttonsOptions.length : 0
  });
});

const buttonAttributesList = computed(
  () => contentOptionsByBlock.value.buttonsOptions.map(button => getContentBuilderBlockBindableAttributes(button))
);

const imageAttributes = computed(
  () => getContentBuilderBlockBindableAttributes(contentOptionsByBlock.value.imageOptions)
);

const textBoxAttributes = computed(
  () => getContentBuilderBlockBindableAttributes(contentOptionsByBlock.value.textBoxOptions)
);
</script>

<template>
  <main>
    <div class="device">
      <!-- eslint-disable vue/no-deprecated-slot-attribute -->
      <cly-content-builder-card v-bind="cardAttributes">
        <div slot="body">
          <cly-content-builder-image v-bind="imageAttributes" />
          <cly-content-builder-text-box v-bind="textBoxAttributes" />
        </div>
        <cly-content-builder-button-group
          slot="footer"
          v-bind="buttonGroupAttributes"
        >
          <cly-content-builder-button
            v-for="buttonAttributes, index in buttonAttributesList"
            :key="`content-builder-generated-button-${index}`"
            :slot="`button-${index+1}`"
            v-bind="buttonAttributes"
          />
        </cly-content-builder-button-group>
      </cly-content-builder-card>
      <!-- eslint-enable vue/no-deprecated-slot-attribute -->
    </div>
  </main>
</template>

<style scoped lang="scss">
#app {
  width: 100%;
}

main {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.device {
  width: 320px;
  height: calc(100vh - 32px);
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
}
</style>
