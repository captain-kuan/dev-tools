<template>
  <div class="flex-1 bg-zinc-800 flex">
    <LineNumber
      :font-size="fontSize"
      :line-height="lineHeight"
      :line-count="lines.length"
    ></LineNumber>
    <div class="flex-1 relative">
      <CodeLine
        v-for="(line, num) in lines"
        :key="num"
        :value="line"
        :line-num="num"
        :font-size="fontSize"
        :line-height="lineHeight"
        @force="onForce"
        @click="onClick"
      ></CodeLine>
      <textarea
        ref="inputRef"
        v-model="inputValue"
        class="d-input"
        :style="inputStyle"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CodePosition } from "@/types";
import CodeLine from "./CodeLine.vue";
import LineNumber from "./LineNumber.vue";
interface Props {
  modelValue?: string;
  lineHeight?: number;
  fontSize?: number;
}
interface Event {
  (event: "update:modelValue", value: string): void;
}
const emit = defineEmits<Event>();

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  lineHeight: 20,
  fontSize: 16,
});

const lines = computed<string[]>(() => {
  return props.modelValue.split("\n");
});
const inputRef = ref<HTMLTextAreaElement>();
const inputValue = ref("");
const position = reactive({
  left: 0,
  top: 0,
});
const inputStyle = computed(() => {
  return {
    left: position.left + "px",
    top: position.top + "px",
    height: props.fontSize + "px",
  };
});
const isForce = ref(false);
const editRows = ref<number[]>();
const forceRow = ref(0);
function onForce(pos: CodePosition) { 
  console.log(pos);
   
  position.top = pos.row * props.lineHeight;
  editRows.value = [pos.row];
  inputRef.value?.focus();
  forceRow.value = pos.row;
  inputRef.value?.setSelectionRange(pos.column, pos.column);
  inputValue.value = lines.value[pos.row];
  isForce.value = true;
}
watch([isForce, inputValue], () => {
  if (isForce.value) {
    const _lines = lines.value;
    _lines[forceRow.value] = inputValue.value;
    emit("update:modelValue", _lines.join("\n"));
  }
});

function onClick(e: MouseEvent) {
  const { offsetY, offsetX } = e;
  position.left = offsetX;
}
</script>

<style scoped>
.d-input {
  position: absolute;
  border: 1px solid red;
  width: 1px;
  outline: none;
}
</style>
