<template>
  <div class="flex relative min-h-full overflow-x-hidden">
    <transition name="login" >
    <LoginComponent v-if="authState === 'login'" class="z-50"/>
    </transition>
    <div class="flex absolute bottom-1/4 left-1/2 z-50 justify-between mx-auto w-60 bg-gray-300 rounded">
      <div class="flex-1 bg-transparent rounded transition-colors duration-300" :class="authState === 'login'? 'text-white bg-indigo-600' : 'bg-transparent'">
        <button class="p-4" @click="authState = 'login'">Login</button>
      </div>
      <div class="flex-1 bg-transparent rounded transition-colors duration-300" :class="authState === 'signup'? 'text-white bg-indigo-600' : 'bg-transparent'">
      <button class="p-4" @click="authState = 'signup'">Sign up</button>
    </div>
    </div>
    <div class="hidden flex-1 w-0 lg:block">
      <img class="object-cover absolute inset-0 w-full h-full" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="background">
    </div>
    <transition name="signup" >
      <SignupComponent v-if="authState === 'signup'" @signed-up="authState = 'login'" class="z-50"/>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginComponent from '@/pages/LoginOrSignUp/components/LoginComponent.vue'
import SignupComponent from '@/pages/LoginOrSignUp/components/SignupComponent.vue'
@Component({
  components: {
    SignupComponent,
    LoginComponent
  }
})
export default class LoginOrSignup extends Vue {
  public authState: 'login' | 'signup' = 'login';
}
</script>

<style scoped>

.login-enter-active,
.login-leave-active {
  transform: translateX(-100%);
  transition: all 150ms ease-in;
}

.login-enter-from,
.login-leave-to {
  transition: transform 0.2s ease;

}

.signup-enter-active,
.signup-leave-active {
  transition: transform 0.2s ease;
}

.signup-enter-from,
.signup-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in;
}
</style>
