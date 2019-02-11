<template>
  <Page xmlns="http://schemas.nativescript.org/tns.xsd">
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!" col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <NavDrawer ~drawerContent ></NavDrawer>

      <StackLayout ~mainContent>
        <router-view></router-view>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import NavDrawer from '@/components/NavDrawer.vue'

  @Component({
    components: { NavDrawer }
  })
  export default class App extends Vue {
  }
</script>