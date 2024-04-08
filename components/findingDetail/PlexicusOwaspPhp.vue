<template>
  <div
    class="flex justify-between sm:items-center gap-y-5 sm:flex-row flex-col"
  >
    <div class="ps-2.5">
      <h2
        class="font-roboto font-bold text-xl sm:text-2xl xl:text-3xl text-midnightBlue tracking-[-.62px] pb-[14px]"
      >
        Plexicus/-OWASPWebGoatPHP
      </h2>
      <span
        class="me-[14px] bg-lightGreen text-center w-[121px] py-1.5 rounded-full hover:bg-opacity-75 duration-300 text-white font-roboto font-normal text-[13px] inline-block"
        >Active</span
      >
      <span
        class="me-[14px] text-center bg-purple w-[121px] py-1.5 rounded-full hover:bg-opacity-75 duration-300 text-white font-roboto font-normal text-[13px] inline-block"
        >Git Repository</span
      >
    </div>
  </div>
  <div
    class="sm:p-10 p-5 bg-white flex justify-between md:flex-row flex-col mt-[22px] w-full mb-11"
  >
    <div class="md:w-1/2 md:max-w-[467px] xl:ms-1">
      <h2
        class="font-roboto text-midnightBlue font-bold md:text-[28px] text-xl !tracking-[-2%] pb-[15px]"
      >
        Observations
      </h2>
      <p
        class="font-roboto text-black text-sm font-normal !tracking-[-2%] leading-[19px]"
      >
        The repository is primarily created for educational purposes aimed at
        learning web application security. The project uses PHP as its main
        language and does not deal with any confidential data as per the
        available structure. However, files like .gitignore, .htaccess,
        Vagrantfile, webgoat.sql etc. require special attention from a security
        standpoint. The application, however, being deliberately vulnerable
        poses potential risks, and it's necessary for the users to be aware of
        insecurities and potential harm they could bring in a production
        environment.
      </p>
      <p class="font-bold font-roboto text-xl pt-2 text-lightGreen">
        No Confidential Data Treated
      </p>
    </div>
    <div class="sm:w-[250px] md:pt-0 pt-5">
      <UButton
        class="font-inter font-semibold text-[13px] text-white bg-purple py-2 px-3 sm:px-[17px] sm:py-[11px] rounded-md border border-purple hover:bg-white hover:text-purple transition-all ease-in-out duration-300 leading-[15px] flex w-full justify-center"
      >
        <span class="font-roboto font-normal text-xl tracking-[-.4px]"
          >Link</span
        >
      </UButton>
      <p
        class="text-center pt-2.5 tracking-[-.28px] font-roboto font-normal text-purple text-sm"
      >
        A deliberately vulnerable web application for learning web application
        security.
      </p>
    </div>
  </div>
</template>

<script lang="ts"></script>
