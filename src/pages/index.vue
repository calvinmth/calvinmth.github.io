<template>
  <v-app style="background: #fafafa;">
    <v-app-bar app flat elevation="0" color="#fafafa">
      <v-img src="@/assets/calvinmth.jpg" alt="Logo" width="36" height="36" inline class="ml-3" />
      CALVINMTH
      <v-spacer />
      <v-btn icon @click="toggleTheme" size="small">
        <v-icon :color="isDark ? 'yellow' : 'purple'">
          {{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <LinkTree />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
  isDark.value = !isDark.value
}
</script>

<style lang="css" scoped>
.glassmorphism-bar {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  /* border-radius: 12px; */
  /* box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08); */
  /* border: 1px solid */
}
</style>