<template>
    <NuxtLink class="hover:cursor-pointer text-lg text-yellow-300 font-medium underline underline-offset-2" :to="dest">
        <slot></slot>
    </NuxtLink>
</template>

<script setup>
defineProps(["dest"])
</script>