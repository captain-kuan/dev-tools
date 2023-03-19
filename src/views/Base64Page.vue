<template>
  <button @click="encode">编码</button>
  <button @click="decode">解码</button>
  <div class="flex-1 flex">
    <code-editor v-model="origin"></code-editor>
    <code-editor v-model="base64"></code-editor>
  </div>
</template>

<script setup lang="ts">
import CodeEditor from "@/components/CodeEditor.vue";
import { invoke } from "@tauri-apps/api/tauri";

const origin = ref(`hello
world`);
const base64 = ref("");
async function encode() {
  base64.value = (await invoke("encode", { input: origin.value })) as string;
}
async function decode() {
  origin.value = (await invoke("decode", { input: base64.value })) as string;
}
</script>

<style scoped></style>
