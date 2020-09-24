<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
.page {
  padding-bottom: 2rem;
  display: block;
  padding-left: $sidebarWidth;
  padding-right: $tocSidebarWidth;
}

@media (max-width: $MQMobile) {
  .page {
    padding-bottom: 2rem;
    display: block;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>