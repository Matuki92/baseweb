import { ref, computed } from 'vue';

const view = ref('login');
const showLogin = computed(() => view.value === 'login');
const showSignUp = computed(() => view.value === 'signup');

const setView = (val) => {
  view.value = val;
};

export default () => ({
  setView,
  view,
  showLogin,
  showSignUp,
});
