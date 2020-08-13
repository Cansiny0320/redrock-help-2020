<template>
  <div class="refresh">
    <h1>清除缓存成功！</h1>
  </div>
</template>

<script>
export default {
    created() {
        localStorage.clear();
    }
}
</script>

<style>
.refresh {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>