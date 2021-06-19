<template>
  <div class="fixed top-0 left-0 flex items-center w-screen h-screen overflow-y-auto z-modal">
    <!-- Modal BG -->
    <div class="modal-bg">
        <div class="w-full h-full bg-black bg-opacity-50" />
    </div>
    <!-- Modal -->
    <div class="modal-box">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style scoped>
.modal-box {
  @apply m-auto bg-white overflow-hidden z-10 w-full;
}

@screen sm {
  .modal-bg {
    @apply hidden;
  }
}

@screen md {
  .modal-bg {
    @apply block fixed w-full h-full;
  }

  .modal-box {
    @apply rounded-md border border-gray-500 w-96;
  }
}
</style>
