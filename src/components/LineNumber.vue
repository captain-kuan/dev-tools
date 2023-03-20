<template>
  <div class="h-full bg-zinc-700" :style="numStyle">
    <div v-for="i in lineCount" :key="i" class="w-12 text-center">
      {{ i }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  lineCount: number;
  fontSize?: number;
  lineHeight?: number;
}
const props = withDefaults(defineProps<Props>(), {
  lineCount: 1,
  fontSize: 16,
  lineHeight: 20,
});
const numStyle = computed(() => {
  return {
    fontSize: `${props.fontSize}px`,
    lineHeight: `${props.lineHeight}px`,
  };
});
</script>

<style scoped></style>
