<template>
    <section class="bg-neutral-50 flex justify-center items-center py-48 px-24">
        <div class="w-full flex flex-col items-center text-center gap-4">
            <Eyebrow class="-mb-2">{{ eyebrow }}</Eyebrow>
            <Heading class="text-5xl">{{ heading }}</Heading>
            <slot></slot>
        </div>
    </section>
</template>

<script setup>
defineProps(["heading", "eyebrow"])
</script>