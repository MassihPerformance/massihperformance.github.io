<template>
    <NuxtLink :to="dest" class="text-lg font-semibold">
        <slot></slot>
    </NuxtLink>
</template>

<script setup>
defineProps(["dest"])
</script>