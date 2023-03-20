<template>
  <div class="flex" :style="lineStyle">
    <div class="flex-1" @click="onClick">{{ value }}</div>
  </div>
</template>
<script lang="ts" setup>
import { CodePosition } from "@/types";
interface Props {
  lineNum?: number;
  value?: string;
  fontSize?: number;
  lineHeight?: number;
}

interface Emit {
  (event: "force", position: CodePosition): void;
}
const props = withDefaults(defineProps<Props>(), {
  lineNum: 1,
  value: "",
  fontSize: 16,
  lineHeight: 20,
});
const lineStyle = computed(() => {
  return {
    fontSize: `${props.fontSize}px`,
    lineHeight: `${props.lineHeight}px`,
  };
});

const emit = defineEmits<Emit>();
function onClick(e: MouseEvent) {
  emit("force", {
    row: props.lineNum,
    column: Math.round(e.offsetX / 8.2),
  });
}
</script>
<style lang="postcss" scoped>
.editable {
  background-color: #eee;
}
</style>
