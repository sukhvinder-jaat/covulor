<template>
    <UInput icon="i-heroicons-magnifying-glass" size="sm" color="#F4F2FF" :trailing="false" placeholder="Search"
        model-value="" class=" font-roboto text-base text-black min-h-[39px]" />
</template>
<style>
::placeholder {
    color: black !important;
    font-family: "Roboto", "sans-serif";
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    padding: 12px 0px !important;
    min-height: 35px;
}
@media (max-width:566.98px) {
    ::placeholder {
            color: black !important;
            font-family: "Roboto", "sans-serif";
            font-size: 12px;
            font-weight: 400;
            line-height: 13.75px;
            min-height: 35px;
        }
}
</style>