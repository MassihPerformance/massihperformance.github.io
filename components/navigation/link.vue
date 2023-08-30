<template>
    <NuxtLink :to="dest" class="text-neutral-900 font-medium">
        <slot></slot>
    </NuxtLink>
</template>

<script setup>
defineProps(["dest"])
</script>