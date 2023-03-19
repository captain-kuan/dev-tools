<template>
  <div class="flex-1 bg-zinc-800 min-h-screen flex">
    <LineNumber :line-count="lines.length"></LineNumber>
    <div class="flex-1">
      <CodeLine
        v-for="(line, num) in lines"
        :key="num"
        :value="line"
        :line-num="num"
        @force="onForce"
      ></CodeLine>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CodePosition } from "@/types";
import CodeLine from "./CodeLine.vue";
import LineNumber from "./LineNumber.vue";
interface Props {
  modelValue?: string;
}
const props = withDefaults(defineProps<Props>(), { modelValue: "" });
const lines = computed<string[]>(() => {
  return props.modelValue.split("\n");
});
function onForce(position: CodePosition) {
  console.log(position);
}
</script>

<style scoped></style>
