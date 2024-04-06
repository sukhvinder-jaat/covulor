<template>
  <form class="pt-[42px]">
    <div class="pb-8">
      <UInput
        placeholder="Email"
        padded
        size="lg"
        v-model="email"
        required
        class="!rounded-xl"
      />
      <span v-if="emailError" class="error-text"
        >Please enter a valid email</span
      >
    </div>
    <div class="relative">
      <UInput
        placeholder="Password"
        padded
        size="lg"
        v-model="password"
        :type="passwordFieldType"
        rounded="xl"
        required
      >
      </UInput>
      <span
        v-if="!showPassword"
        class="absolute top-1/2 right-4 w-5 -translate-y-1/2 cursor-pointer"
        @click="togglePasswordVisibility"
      >
        <Icon name="i-heroicons:eye-slash" color="black" />
      </span>
      <span
        v-else
        class="absolute top-1/2 right-4 w-5 -translate-y-1/2 cursor-pointer"
        @click="togglePasswordVisibility"
      >
        <Icon name="i-heroicons:eye" color="black" />
      </span>
    </div>
    <span v-if="passwordError" class="error-text leading-none"
      >Password must contain 1 digit, 1 lowercase, 1 uppercase, and be 6-20
      characters long.</span
    >
    <div class="pt-[25px] pb-[72px]">
      <URadio>
        <template #label>
          <span
            class="font-roboto font-normal text-sm text-darkBlack cursor-pointer"
            >Remember Me</span
          >
        </template>
      </URadio>
    </div>
    <UButton block size="lg" @click="login"
      ><span class="text-base">Login</span></UButton
    >
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const emailError = ref(false);
const passwordError = ref(false);
const showPassword = ref(false);

const login = () => {
  // Reset error flags
  emailError.value = false;
  passwordError.value = false;

  // Check for empty fields
  if (!email.value.trim()) {
    emailError.value = true;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = true;
  }

  // Check for password format
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!passwordRegex.test(password.value)) {
    passwordError.value = true;
  }

  // If any input is empty or email format is invalid, return without attempting login
  if (emailError.value || passwordError.value) {
    return;
  }

  // Logging input data to the console
  console.log("Email:", email.value);
  console.log("Password:", password.value);
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const passwordFieldType = computed(() =>
  showPassword.value ? "text" : "password"
);
</script>

<style scoped>
.error-text {
  color: red;
  font-size: 12px;
  line-height: 10px;
}

.error-container {
  margin-top: 10px;
}
</style>
