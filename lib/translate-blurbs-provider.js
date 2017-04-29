'use babel';

import TranslateBaseProvider from './translate-base-provider';

export default class TranslateBlurbsProvider extends TranslateBaseProvider {
  constructor() {
    super();
    this.filterSuggestions = true;

    this.translations = [];
  }

  setTranslations(translations) {
    this.translations = translations;
  }

  getTranslateSuggestions() {
    return new Promise((resolve) => {
      const suggestions = Object.keys(this.translations).map((key) => {
        const value = this.translations[key];
        return {
          text: key,
          type: 'keyword',
          rightLabel: value,
          description: value,
        };
      });
      resolve(suggestions);
    });
  }
}