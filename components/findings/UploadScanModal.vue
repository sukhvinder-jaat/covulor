<template>
  <div>
    <div class="flex gap-2 w-full justify-end sm:pr-4">
      <p class="font-roboto text-base sm:text-xl sm:leading-[30px] font-normal text-darkSlateGray">
        Upload Scan
      </p>
      <div @click="openModal"
        class="flex items-center gap-x-2 max-h-[25px] h-full max-w-[50px] rounded-[10px] w-full cursor-pointer">
        <IconsPopupPlus />
      </div>
    </div>
    <UModal v-model="isOpen" :overlay="true" class="relative">
      <Icon @click="closeModal" name="i-heroicons-x-mark-20-solid"
        class="text-black opacity-50 w-6 h-6 cursor-pointer absolute end-0 top-0 mt-2 mr-3" />
      <div class="p-[37px_47px_41px_28px]">
        <form @submit.prevent="handleSubmit">
          <p class="font-roboto font-bold text-xl text-purple mb-[23px] pr-[18px]">UPLOAD SCAN</p>
          <hr class="bg-[F2F0F9]" />
          <div class="mt-4 sm:flex gap-6 items-center justify-between">
            <div class="sm:w-6/12 flex items-center sm:mb-0 mb-2 radio_input">
              <URadio modelValue color="indigo" size="lg">
                <template #label>
                  <span class="font-roboto font-normal text-sm text-darkBlack cursor-pointer">Select Repository</span>
                </template>
              </URadio>
            </div>
            <div class="sm:max-w-[557px] w-full">
              <USelect color="white" variant="outline" :options="repositoryID" v-model="selectedRepository" />
              <span v-if="uploadError" class="text-red-500 text-sm leading-none">{{
                getErrorMessage
              }}</span>
            </div>
          </div>
          <div class="flex justify-end mt-[28px]">
            <UButton type="submit" class="w-[142px] text-center rounded-none py-3 justify-center"
              :class="uploadError ? 'cursor-not-allowed' : 'cursor-pointer'">Upload</UButton>
          </div>
        </form>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const repositoryID = ['1', '2', '3'];
const isOpen = ref(false);
const selectedRepository = ref('');
const uploadError = ref(false);
const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
const getErrorMessage = computed(() =>
  selectedRepository.value === "" ? "Select a repo" : ""
);
const handleSubmit = () => {
  if (!selectedRepository.value) {
    uploadError.value = true;
    console.error('Please select a repository');
    return;
  }

  console.log('Submitting form with repository:', selectedRepository.value);
  closeModal();
};
</script>

<style>
.radio_input div {
  align-items: center !important;
}

.radio_input .form-radio:checked {
  background-color: #8220FF !important;
}
</style>