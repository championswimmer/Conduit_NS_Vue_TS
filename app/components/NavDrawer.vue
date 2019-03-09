<template>
  <StackLayout backgroundColor="#ffffff">
    <Label class="drawer-header" text="conduit"/>

    <StackLayout @tap="goToPage('/home')" class="drawer-item" orientation="horizontal">
      <Label class="mdi" :text="'mdi-home' | fonticon"/>
      <Label text="Home"/>
    </StackLayout>

    <StackLayout @tap="goToPage('/auth')" class="drawer-item" orientation="horizontal">
      <Label class="mdi" :text="'mdi-key' | fonticon"/>
      <Label text="Login / Register"/>
    </StackLayout>

    <StackLayout class="drawer-item" orientation="horizontal">
      <Label class="mdi" :text="'mdi-settings' | fonticon"/>
      <Label text="Settings"/>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavDrawer extends Vue {
  goToPage(pageName) {
    this.$router.replace(pageName)
    this.$emit('drawer-click')
  }
}

</script>

<style scoped>
.drawer-item .mdi {
  margin-right: 10;
}
</style>