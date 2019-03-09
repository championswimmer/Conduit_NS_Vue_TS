<template>
  <Page xmlns="http://schemas.nativescript.org/tns.xsd">
    <ActionBar android.systemIcon="ic_menu_back" title="Conduit">
      <NavigationButton
          v-if="$isAndroid"
          text="Menu"
          icon="res://ic_menu"
          @tap="toggleDrawer()">
      </NavigationButton>
      <ActionItem
          v-else
          text="Menu"
          ios.position="left"
          icon="res://ic_menu"
          @tap="toggleDrawer()">
      </ActionItem>
      <ActionItem
          v-show="$isIOS && showBack"
          @tap="goBack"
          ios.position="right"
          text="Back">
      </ActionItem>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <NavDrawer ~drawerContent v-on:drawer-click="toggleDrawer()"></NavDrawer>

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
    get showBack() {
      return (this.$store.state.route.fullPath.split('/').length > 2)
    }

    toggleDrawer() {
      try {
        (this.$refs.drawer as any).nativeView.toggleDrawerState()
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>
