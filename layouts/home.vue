<template>
  <div class="flex justify-center">
    <SideBar
      :isSidebarVisible="isSidebarVisible"
      :sidebarHandler="toggleSidebarVisibility"
      @closeClicked="toggleSidebarVisibility"
    />
    <div class="w-full overflow-hidden">
      <Header @menuClicked="toggleSidebarVisibility" />
      <Content>
        <slot />
      </Content>
    </div>
    <div
      @click="toggleSidebarVisibility"
      v-if="isSidebarVisible"
      class="fixed inset-0 bg-black opacity-50 z-50 lg:hidden"
    ></div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// Define reactive variable for sidebar visibility
const isSidebarVisible = ref(false);

// Function to toggle sidebar visibility
const toggleSidebarVisibility = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

// Watch for changes in sidebar visibility to control body overflow
watch(isSidebarVisible, (newValue) => {
  if (newValue) {
    document.body.classList.add("lg_overflow_hidden");
  } else {
    document.body.classList.remove("lg_overflow_hidden");
  }
});
</script>
<style>
@media (max-width: 1024px) {
  .lg_overflow_hidden {
    overflow-y: hidden;
  }
}
</style>
