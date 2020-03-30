<template>
  <div>Logout</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("logout");
    this.$snotify.success("Sucesso ao deslogar", "logout...");
    this.$router.push({ name: "auth" });
  }

};
</script>
