<template>
  <StackLayout backgroundColor="#ffffff">
    <Label class="drawer-header" text="conduit"/>

    <StackLayout class="drawer-item" orientation="horizontal">
      <Label class="mdi" :text="'mdi-home' | fonticon"/>
      <Label text="Home"/>
    </StackLayout>

    <Label class="drawer-item" text="Item 2"/>
    <Label class="drawer-item" text="Item 3"/>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavDrawer extends Vue {

}

</script>
