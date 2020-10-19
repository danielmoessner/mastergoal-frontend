<template>
  <breadcrumb-navigation>
    <breadcrumb-link text="Dasboard" link="/n/dashboard"></breadcrumb-link>
    <breadcrumb-divider></breadcrumb-divider>
    <breadcrumb-link
      v-if="note"
      :text="note.name"
      :link="'/n/' + $route.params.id + '/'"
    ></breadcrumb-link>
    <slot></slot>
  </breadcrumb-navigation>
</template>

<script>
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";

export default {
  name: "NotesNoteBreadcrumb",
  components: {
    BreadcrumbDivider,
    BreadcrumbNavigation,
    BreadcrumbLink,
  },
  props: {
    note: {
      type: [Boolean, Object],
      required: true,
    },
  },
};
</script>
