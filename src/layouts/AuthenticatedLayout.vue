<template>
  <q-layout>
    <SideBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import SideBar from "src/components/Main/SideBar.vue";
SideBar;
</script>
