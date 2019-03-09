<template>
  <StackLayout orientation="vertical" xmlns="http://schemas.nativescript.org/tns.xsd">
    <StackLayout class="login-form" verticalAlignment="center">
      <TextField
          autocapitalizationType="none"
          textAlignment="center"
          v-model="email"
          hint="email">
      </TextField>
      <TextField
          autocapitalizationType="none"
          secure="true"
          textAlignment="center"
          v-model="password"
          hint="password">
      </TextField>
      <Button @tap="loginSubmit()" text="Submit">
      </Button>
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import userModule from '@/store/modules/user'

@Component
export default class Login extends Vue {
  email = ''
  password = ''

  async loginSubmit() {
    await userModule.loginUser({
      user: {
        email: this.email,
        password: this.password
      }
    })
    this.$router.replace('/home')
  }
}
</script>

<style scoped>
.login-form {
  padding: 20;
  margin: 20;
}

.login-form Button {
  margin: 30;
  width: 60;
  height: 30;
  border-radius: 4;
  background-color: #5CB85C;
  color: white;
}
</style>