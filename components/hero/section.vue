<template>
    <section class="bg-neutral-50 flex justify-center items-center py-48 px-24">
        <div class="w-full flex flex-col items-center text-center gap-4">
            <Eyebrow class="-mb-2">{{ eyebrow }}</Eyebrow>
            <Heading class="text-5xl">{{ heading }}</Heading>
            <slot></slot>
            <div class="flex gap-2">
                <WidgetButton>
                    <span>Jetzt anfangen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </WidgetButton>

                <WidgetLink>
                    <span>Informationen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </WidgetLink>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps(["heading", "eyebrow"])
</script>