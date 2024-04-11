<template>
    <tr class="hover:bg-white bg-[#F5F7FB] transition-all ease-in-out duration-150">
        <td class="px-5 py-4 whitespace-nowrap">
            <p class="font-roboto font-medium text-lg text-lightToBlack">
                {{ content.repository_id }}
            </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
            <p class="text-sm font-roboto font-bold text-midnightBlue">
                {{ content.source_control }}
            </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
            <p class="text-sm font-roboto font-medium text-lightToBlack">
                {{ content.repo }}
            </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
            <p class="flex items-center gap-x-[3px] text-sm font-roboto font-medium text-lightGreen" :class="content.priority < 50
                ? '!text-turquoiseBlue'
                : content.priority < 80
                    ? '!text-lawnGreen'
                    : content.priority > 80 && 'text-lightGreen'
                ">
                <UProgress :value="content.priority" :color="content.priority < 50
                    ? 'turquoiseBlue'
                    : content.priority < 80
                        ? 'lawnGreen'
                        : content.priority > 80 && 'lightGreen'
                    " />
                {{ content.priority }}
            </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
            <!-- popup -->
            <UPopover class="table_popup" :class="content.tags.length < 1 ? 'hidden' : 'block'">
                <div label="Open"
                    class="bg-[#F3D8A6] flex gap-x-2 pe-2 max-h-[25px] h-full max-w-[119px] rounded-[10px] items-center w-full">
                    <p
                        class="text-white bg-lawnGreen font-medium font-roboto text-xs px-2 h-full rounded-[10px] w-full text-ellipsis overflow-hidden">
                        {{ content.tags[0] }}
                    </p>
                    <IconsPlus />
                </div>

                <template #panel="{ close }">
                    <div class="relative">
                        <span label="Close" @click="close" class="top-[-12px] end-[-7px] absolute cursor-pointer">
                            <IconsPopupCross />
                        </span>
                        <div class="bg-lawnGreen p-[14px] ps-7 min-w-[154px] rounded-md">
                            <ul class="list-disc flex flex-col gap-y-2 items-start justify-start">
                                <li class="font-roboto text-white font-medium text-sm"
                                    v-for="(tagOption, i) in content.tags" :key="i">
                                    {{ tagOption }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </UPopover>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
            <p class="text-sm font-roboto font-bold text-midnightBlue">
                {{ content.branch }}
            </p>
        </td>
        <td class="px-5 py-4 whitespace-nowrap">
            <a target="_blank"
                class="text-lightToBlack font-roboto font-medium text-xs py-[2px] px-2 bg-hawkasBlue group transition-all ease-in-out duration-300 hover:bg-[#8220FF] rounded-xl flex items-center gap-x-1 justify-center hover:text-white"
                :href="content.link">View
                <IconsViewArrow />
            </a>
        </td>
    </tr>
</template>

<script setup lang="ts">

const props = defineProps({
    content: {
        type: Object,
        required: true,
    },
});
const priorityClass = computed(() => {
    const priority = props.content.value.attributes.data.priority;
    if (priority < 50) return 'text-turquoiseBlue';
    else if (priority < 80) return 'text-lawnGreen';
    else return 'text-lightGreen';
});
</script>