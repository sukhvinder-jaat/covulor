<template>
  <div
    class="min-h-screen w-full md:bg-center bg-left bg-login-bg bg-cover lg:px-[76px] sm:px-8 px-4 lg:py-[116px] py-14 flex justify-between md:flex-row flex-col">
    <div class="lg:max-w-[465px] max-w-[320px] flex flex-col items-center md:items-start mx-auto md:mx-0">
      <NuxtLink to="/">
        <img class="lg:w-[323px] w-[220px]" src="/public/assets/images/logo-light-theme.png" width="323" height="103"
          alt="logo" />
      </NuxtLink>
      <p class="font-poppins font-normal lg:text-[21px] text-base text-white pt-5 text-center md:text-start">
        Advanced AI to accurately assess and prioritize cybersecurity
        vulnerabilities
      </p>
    </div>
    <div
      class="sm:w-[460px] max-w-[460px] h-full w-4/5 max-[550px]:w-full min-w-[292px] mx-auto md:mx-0 px-8 pt-[47px] pb-[34px] shadow-login-form bg-white rounded-lg md:mt-0 mt-8 2xl:mx-40">
      <h2 class="text-center font-roboto font-semibold md:text-2xl text-xl text-darkBlack pb-[38px]">
        Login To Your Account
      </h2>
      <NuxtLink to="/" class="p-3 w-full border border-mediumlightgray rounded-xl relative mb-10 block">
        <p class="font-roboto font-normal text-sm text-darkBlack text-center w-full">
          Login With Google
        </p>
        <span class="absolute top-1/2 left-[14px] -translate-y-1/2">
          <IconsGoogle />
        </span>
      </NuxtLink>
      <div class="flex items-center">
        <p
          class="text-center font-roboto text-xs text-darkBlack font-normal px-[14px] bg-white relative z-10 inline-block mx-auto">
          Or Login With Email
        </p>
      </div>
      <hr class="-mt-[9px] mb-[9px]" />
      <LoginForm />
      <p class="text-center font-roboto text-xs text-darkBlack font-normal px-[14px] bg-white md:mb-12 mb-7 mt-[13px]">
        Forgot Your Password?
      </p>
      <p class="text-center font-roboto text-xs font-normal px-[14px] bg-white">
        <span class="text-darkBlack">Don't Have An Account?</span>
        <NuxtLink class="!text-purpleBlue" to="/">Sign Up</NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
