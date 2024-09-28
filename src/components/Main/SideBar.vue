<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
          background: #e7d2f9;
        "
      >
        <q-list padding>
          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://imgs.search.brave.com/413jWxaDTpG1P7XxSu401LjuQQrE-8Mz-Kjoo8LB1Bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/dXJwbGUtd2FsbHBh/cGVyLXdpdGgtY29s/b3JmdWwtYmFja2dy/b3VuZC1wdXJwbGUt/YmFja2dyb3VuZF8x/MzQwLTI3NTE3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img
              src="https://imgs.search.brave.com/J6EpmyoiWfrtyXEweDM7goGMcPI_ZrLAtVEs4TYuxDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTIw/MHg4MDAvNGU1NGI5/MjhlZi9yZW1vdmVf/YmFja2dyb3VuZC53/ZWJw"
            />
          </q-avatar>
          <div class="text-weight-bold">Luíza Barbosa</div>
          <div>@iamluizabsr</div>
        </div>
      </q-img>
    </q-drawer>
  </q-layout>
</template>
<script setup>
import { ref } from "vue";
import EssentialLink from "components/Main/EssentialLink.vue";

const linksList = [
  {
    title: "Perfil",
    caption: "quasar.dev",
    icon: "school",
    link: "#/account",
  },
  {
    title: "Temas",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Redações",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Suporte",
    caption: "forum.quasar.dev",
    icon: "support_agent",
    link: "https://forum.quasar.dev",
  },
];
</script>
