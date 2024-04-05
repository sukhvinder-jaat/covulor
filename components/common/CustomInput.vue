<template>
  <!-- Input field wrapper -->
    <!-- Label for the input -->
    <label class="block font-Poppins font-normal md:text-lg text-base text-lightBlack">
      {{ label }}
    </label>
    <!-- Input field -->
    <div class="relative">
      <UInput icon="i-heroicons-magnifying-glass-20-solid" size="sm" color="white" :type="type"
        :placeholder="placeholder" :trailing="false" :id="id" :name="name" :model-value="value"
        :class="['input-parent']" />
    </div>

</template>

<script lang="ts">
// Exporting the component
export default {
  // Props definition
  props: {
    // Label text for the input
    label: String,
    // Function to handle input change
    onChange: Function,
    // Value of the input field
    value: String,
    // Placeholder text for the input field
    placeholder: String,
    // ID attribute of the input field
    id: String,
    // Name attribute of the input field
    name: String,
    // Flag indicating if there's an error in the input
    error: Boolean,
    // Type of the input field (e.g., text, password)
    type: String,
    searchUrl: String,
  },
};
</script>

<style>
div.input-parent input.relative.block {
  box-shadow: none;
  @apply !border border-gainsBor bg-ghostWhite py-[11px] ps-8 pr-4 !outline-none rounded-[20px] font-roboto text-comet text-sm leading-4 w-full duration-300;
}

.input-parent input:hover,
.input-parent input:focus,
.input-parent input:active {
  @apply !border-purple
}
</style>