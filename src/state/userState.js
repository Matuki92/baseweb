import { reactive } from 'vue';

const userData = reactive({
  id: '',
  name: '',
  lastName: '',
  email: '',
});

const setUserData = (key, val) => {
  if (!userData[key]) return;

  userData[key] = val;
};

export default () => ({
  userData,
  setUserData,
});
