const CAMEL_CASE_REGEX = /[A-Z]+(?![a-z])|[A-Z]/g;
const STYLE_UNIT_PIXEL = 'px';

const VALID_ATTRIBUTE_VALUES = [
  'string',
  'number',
  'boolean'
]

const convertToKebabCase = str => str.replace(CAMEL_CASE_REGEX, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase());

const getValueWithPixelUnit = value => typeof value === 'number' ? `${value}${STYLE_UNIT_PIXEL}` : null;

const getContentBuilderBlockBindableAttributes = (contentBuilderBlockOptions = {}) => {
  const data = {};
  const contentBuilderBlockOptionsEntries = Object.entries(contentBuilderBlockOptions);

  for (const [key, value] of contentBuilderBlockOptionsEntries) {
    if (VALID_ATTRIBUTE_VALUES.includes(typeof value)) {
      const isBooleanValue = typeof value === 'boolean';
      let finalValue = null;

      if (!isBooleanValue) finalValue = value;
      else if (value) finalValue = '';


      data[convertToKebabCase(key)] = finalValue;
    }
  }

  return data;
};

export default {
  STYLE_UNIT_PIXEL,
  getContentBuilderBlockBindableAttributes,
  getValueWithPixelUnit
}

export {
  STYLE_UNIT_PIXEL,
  getContentBuilderBlockBindableAttributes,
  getValueWithPixelUnit
}
