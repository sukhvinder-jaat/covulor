<template>
  <div
    class="min-h-screen w-full md:bg-center bg-left bg-login-bg bg-cover lg:px-[76px] px-8 lg:py-[116px] py-14 flex justify-between md:flex-row flex-col"
  >
    <div
      class="lg:max-w-[465px] max-w-[320px] flex flex-col items-center md:items-start mx-auto md:mx-0"
    >
      <a href="/">
        <img
          class="lg:w-[323px] w-[220px]"
          src="/public/assets/images/logo-light-theme.png"
          width="323"
          height="103"
          alt="logo"
      /></a>
      <p
        class="font-poppins font-normal lg:text-[21px] text-base text-white pt-5 text-center md:text-start"
      >
        Advanced AI to accurately assess and prioritize cybersecurity
        vulnerabilities
      </p>
    </div>
    <div
      class="w-[460px] mx-auto md:mx-0 px-8 pt-[47px] pb-[34px] shadow-login-form bg-white rounded-lg md:mt-0 mt-8"
    >
      <h2
        class="text-center font-roboto font-semibold text-2xl text-darkBlack pb-[38px]"
      >
        Login To Your Account
      </h2>
      <div
        class="p-3 w-full border border-mediumlightgray rounded-xl relative mb-10"
      >
        <h3
          class="font-roboto font-normal text-sm text-darkBlack text-center w-full"
        >
          Login With Google
          <span class="absolute top-1/2 left-[14px] -translate-y-1/2"
            ><IconsGoogle
          /></span>
        </h3>
      </div>
      <div class="flex items-center">
        <p
          class="text-center font-roboto text-xs text-darkBlack font-normal px-[14px] bg-white relative z-10 inline-block mx-auto"
        >
          Or Login With Email
        </p>
      </div>
      <hr class="-mt-[9px] mb-[9px]" />
      <LoginForm />
      <p
        class="text-center font-roboto text-xs text-darkBlack font-normal px-[14px] bg-white mb-12 mt-[13px]"
      >
        Forgot Your Password?
      </p>
      <p class="text-center font-roboto text-xs font-normal px-[14px] bg-white">
        <span class="text-darkBlack">Don't Have An Account?</span>
        <a class="!text-purpleBlue" href="/">Sign Up</a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
