<template>
  <div id="main">
    <Header title="我的喵喵"></Header>
    <Login></Login>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar/index.vue'
import Login from '@/components/Login/index.vue'
export default {
  name: 'Mine',
  components: {
    Header,
    TabBar,
    Login,
  },
}
</script>
<style></style>
