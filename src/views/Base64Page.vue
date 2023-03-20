<template>
  <div class="flex-1 flex h-full">
    <div class="flex-1 flex flex-col">
      <button @click="encode">编码</button>
      <code-editor v-model="origin"></code-editor>
    </div>
    <div class="flex-1 flex flex-col">
      <button @click="decode">解码</button>
      <code-editor v-model="base64"></code-editor>
    </div>
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
 const res= (await invoke("decode", { input: base64.value }).catch((e) => {
    console.log(e);
  })) as string;
  console.log(res);
  origin.value =res  
}
</script>

<style scoped></style>
