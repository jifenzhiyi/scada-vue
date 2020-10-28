<template>
  <div id="app">
    <a-config-provider :locale="antLocale">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getLocaleMessage, defaultLanguage } from '@/locale';

export default {
  name: 'App',
  data() {
    return {
      locale: {},
    };
  },
  computed: {
    ...mapState(['language']),
    antLocale() {
      return getLocaleMessage(this.language).antLocale || defaultLanguage;
    },
  },
};
</script>
