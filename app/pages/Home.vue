<template>
  <StackLayout xmlns="http://schemas.nativescript.org/tns.xsd">
    <Label :text="data"></Label>
  </StackLayout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  created() {
    console.log('Home created')
  }
  data = "OMG";
}
</script>
