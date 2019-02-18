<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <TabView :selectedIndex="1">
      <TabViewItem title="Your Feed">
        <Label text="Content for Tab 2"/>
      </TabViewItem>
      <TabViewItem title="Global Feed">
        <Label text="Content for Tab 1"/>
      </TabViewItem>
    </TabView>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

  created() {
    console.log('Home created')
  }

  data = 'OMG'
}
</script>
