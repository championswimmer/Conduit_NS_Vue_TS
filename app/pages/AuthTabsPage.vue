<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <TabView :selectedIndex="0">
      <TabViewItem title="Login">
        <Login/>
      </TabViewItem>
      <TabViewItem title="Register">
        <Label text="Register Placeholder"/>
      </TabViewItem>
    </TabView>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/pages/auth/Login.vue'

@Component({
  components: {
    Login,
  },
})
export default class AuthTabsPage extends Vue {

}
</script>

<style scoped>

</style>