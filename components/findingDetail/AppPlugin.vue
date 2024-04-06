<template>
  <div
    class="flex justify-between sm:items-center gap-y-5 sm:flex-row flex-col"
  >
    <h2
      class="font-roboto font-bold text-xl sm:text-2xl xl:text-3xl text-midnightBlue tracking-[-.62px] ps-2.5"
    >
      App/plugin/lastrss.php: 71
    </h2>
    <p
      class="font-roboto font-normal lg:text-[25px] sm:text-lg text-base text-midnightBlue tracking-[-2%] md:ps-0 ps-2.5"
    >
      Scan Report
    </p>
  </div>
  <div
    class="px-10 py-10 bg-white flex justify-between md:flex-row flex-col mt-[22px] w-full mb-11 md:items-center gap-5"
  >
    <div class="md:w-1/2 md:max-w-[467px] xl:ms-1">
      <h2
        class="font-roboto text-midnightBlue font-bold text-[28px] !tracking-[-2%] pb-[15px]"
      >
        Observations
      </h2>
      <p
        class="font-roboto text-black text-sm font-normal !tracking-[-2%] leading-[19px]"
      >
        The function unserialize() used in the 'lastrss.php' script on Line 71
        is building a command from untrusted data. Potentially leading to
        command injection vulnerability. This could occur when the application
        pulls data from an unverified source and integrates it into the command
        string that is then executed. If an attacker is able to control the
        command, they could gain privileges or capabilities that they would not
        usually have, leading to malicious activities such as data leakage,
        unauthorized access or system takeover.
      </p>
      <p class="font-bold font-roboto text-xl pt-2 text-purple">More Details</p>
    </div>
    <div class="sm:max-w-[435px] py-7 lg:pe-7 px-5 lg:ps-[46px] bg-[#F4F4F4]">
      <p>
        if ( $timedif < $this->cache_time) { <br />
        // cached file is fresh enough, return cached array <br />
        $result = unserialize(join('', file($cache_file))); <br />
        // set 'cached' to 1 only if cached file is correct <br />
        if ($result) $result['cached'] = 1;
      </p>
    </div>
  </div>
</template>
<script lang="ts"></script>
