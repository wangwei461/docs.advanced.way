<template>
  <aside class="tocSidebar">
    <div class="tocTitle">当前页</div>
    <TocSidebarLink :sidebar-depth="4" :item="tocItems" />
  </aside>
</template>

<script>
import TocSidebarLink from "@theme/components/TocSidebarLink.vue";

export default {
  name: "PageToc",
  components: { TocSidebarLink },
  props: ["tocItems"],
};
</script>

<style lang="stylus">
.tocTitle {
  margin-left: 28px;
  padding-bottom: 10px;
  margin-right: 50px;
  color: #969EA7;
  border-bottom: 1px dashed #eaecef;
}

.tocSidebar {
  font-size: 16px;
  background-color: #fff;
  width: $tocSidebarWidth;
  position: fixed;
  z-index: 1;
  margin: 0;
  top: $tocTitleHeight + $navbarHeight;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border-left: 0px solid $borderColor;
  overflow-y: auto;
}

.tocSidebar {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a {
    display: inline-block;
  }

  .nav-links {
    display: none;
    border-bottom: 1px solid $borderColor;
    padding: 0.5rem 0 0.75rem 0;

    a {
      font-weight: 600;
    }

    .nav-item, .repo-link {
      display: block;
      line-height: 1.25rem;
      font-size: 1.1em;
      padding: 0.5rem 0 0.5rem 1.5rem;
    }
  }

  & > .tocSidebar-links {
    padding: 1.5rem 0;

    & > li > a.tocSidebar-link {
      font-size: 1.1em;
      line-height: 1.7;
      font-weight: bold;
    }

    & > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
}
</style>
