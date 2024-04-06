<template>
  <form class="pt-[42px]">
    <div class="pb-8 input_custom_login">
      <UInput placeholder="Email" padded size="lg" v-model="email" required class="!rounded-xl" />
      <span v-if="emailError" class="error-text">{{ getEmailErrorMessage }}</span>
    </div>
    <div class="relative input_custom_login">
      <UInput placeholder="Password" padded size="lg" v-model="password" :type="passwordFieldType" rounded="xl"
        required>
      </UInput>
      <span v-if="!showPassword" class="absolute top-1/2 right-4 w-5 -translate-y-1/2 cursor-pointer"
        @click="togglePasswordVisibility">
        <Icon name="i-heroicons:eye-slash" color="black" /> 
      </span>
      <span v-else class="absolute top-1/2 right-4 w-5 -translate-y-1/2 cursor-pointer"
        @click="togglePasswordVisibility">
        <Icon name="i-heroicons:eye" color="black" />
      </span>
    </div>
    <span v-if="passwordError" class="error-text leading-none">{{ getPasswordErrorMessage }}</span>
    <div class="pt-[25px] pb-[72px]">
      <URadio modelValue>
        <template #label>
          <span class="font-roboto font-normal text-sm text-darkBlack cursor-pointer">Remember Me</span>
        </template>
      </URadio>
    </div>
    <UButton block size="lg" @click="login"><span class="text-base">Login</span></UButton>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Variables
const email = ref("");
const password = ref("");
const emailError = ref(false);
const passwordError = ref(false);
const showPassword = ref(false);

// Function to handle login
const login = async () => {
  // Reset error flags
  emailError.value = false;
  passwordError.value = false;

  // Validate email
  if (!email.value || !validateEmail(email.value)) {
    emailError.value = true;
    return
  }

  // Validate password
  if (!password.value || !validatePassword(password.value)) {
    passwordError.value = true;
    return
  }

  // Prepare data for API request
  const data = {
    email: email.value,
    password: password.value,
  }

  // Fetch API
  await fetchRequestHandler(post, LOGIN, { data });
};

// Function to toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Computed properties for error messages and password field type
const getEmailErrorMessage = computed(() => email.value === '' ? 'Enter an email address' : 'Please Enter a valid Email');
const getPasswordErrorMessage = computed(() => password.value === '' ? 'Enter a password' : 'Please enter correct password');
const passwordFieldType = computed(() => showPassword.value ? "text" : "password");
</script>


<style>
.error-text {
  color: red;
  font-size: 12px;
  line-height: 10px;
}

.input_custom_login input {
  @apply !ring-0 border border-mediumlightgray !rounded-xl;
}

.input_custom_login input:focus {
  @apply !ring border-transparent !rounded-xl;
}

.error-container {
  margin-top: 10px;
}
</style>
