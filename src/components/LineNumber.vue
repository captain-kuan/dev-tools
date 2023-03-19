<template>
  <div class="h-full bg-zinc-700">
    <div v-for="i in lineCount" :key="i" class="w-12 text-center">
      {{ i }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  lineCount: number;
}
withDefaults(defineProps<Props>(), { lineCount: 1 });
</script>

<style scoped></style>
