<template>
  <AppModal>
    <div>
      <div class="w-full flex justify-around">
        <div
          v-for="option in selectorOptions"
          :key="option.value"
          @click="setView(option.value)"
          :class="[
            'auth-option',
            { selected: option.value === view },
          ]"
        >
          {{ option.text }}
        </div>
      </div>

      <div class="p-6">
        <AppLogin
          v-if="showLogin"
        />
        <AppSignUp
          v-if="showSignUp"
        />
      </div>
    </div>
  </AppModal>
</template>

<script>
import AppModal from '../Modal/Modal';
import AppLogin from './Login/Login';
import AppSignUp from './SignUp/SignUp';
import authComponentState from './authComponentState';

export default {
  components: {
    AppModal,
    AppLogin,
    AppSignUp,
  },
  name: 'Auth',
  setup() {
    const {
      view,
      setView,
      showLogin,
      showSignUp,
    } = authComponentState();

    const selectorOptions = [
      {
        text: 'Login',
        value: 'login',
      },
      {
        text: 'Sign Up',
        value: 'signup',
      },
    ];

    return {
      view,
      selectorOptions,
      showLogin,
      showSignUp,
      setView,
    };
  },
};
</script>

<style scoped>
.auth-option {
  @apply w-full p-6 text-center cursor-pointer bg-gray-100 border-gray-200 border-solid border-b;
}
.auth-option:not(:first-of-type) {
  @apply border-l;
}
.auth-option:not(:last-of-type) {
  @apply border-r;
}
.auth-option.selected {
  @apply bg-white border-white cursor-default;
}
.auth-option:not(.selected):hover {
}
</style>
