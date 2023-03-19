<template>
  <div class="flex">
    <div class="flex-1" @click="onClick">{{ value }}</div>
  </div>
</template>
<script lang="ts" setup>
import {CodePosition} from "@/types"
interface Props {
  lineNum?: number;
  value?: string;
}

interface Emit {
  (event: "force", position: CodePosition): void;
}
defineProps<Props>();

const emit = defineEmits<Emit>();
function onClick() {
  emit("force", { row: 1, column: 2 });
}
</script>
<style lang="postcss" scoped>
.editable {
  background-color: #eee;
}
</style>
