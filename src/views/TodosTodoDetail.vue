<template>
  <backend-box>
    <todos-todo-breadcrumb
      :todo="todo"
      :todoListUrl="todoListUrl"
    ></todos-todo-breadcrumb>
    <detail-grid>
      <general-box
        v-if="todo"
        class="col-span-2 md:col-span-3 xl:col-span-3"
        :overflow="false"
      >
        <heading-one
          v-bind:text="todo.name"
          :subtitle="timeToDeadline"
          :subtitleClass="timeToDeadlineSeconds < 0 ? 'text-red-500' : ''"
        >
        </heading-one>
        <property-text property="Notes" :text="todo.notes"></property-text>
        <property-text
          property="Activate"
          :text="todo.activate"
        ></property-text>
        <property-text
          property="Deadline"
          :text="todo.deadline"
        ></property-text>
        <property-text
          v-if="todo.type === 'REPETITIVE' || todo.type === 'NEVER_ENDING'"
          property="Duration"
          :text="todo.duration"
        ></property-text>
        <property-text
          v-if="todo.type === 'REPETITIVE'"
          property="Repetitions"
          :text="todo.repetitions"
        ></property-text>
        <property-text
          v-if="todo.type === 'NEVER_ENDING'"
          property="Blocked"
          :text="todo.blocked"
        ></property-text>
        <hr />
        <property-short property="Status" :short="todo.status">
          <div>
            <form-button
              v-on:response="changed"
              v-bind:text="'Set Active'"
              v-bind:link="todo.url"
              v-bind:data="{ status: 'ACTIVE' }"
              v-bind:style="{
                visibility: todo.status === 'ACTIVE' ? 'hidden' : 'visible',
              }"
            ></form-button>
            <form-button
              class="ml-4"
              v-on:response="changed"
              v-bind:text="'Set Done'"
              v-bind:link="todo.url"
              v-bind:data="{ status: 'DONE' }"
              v-bind:style="{
                visibility: todo.status === 'DONE' ? 'hidden' : 'visible',
              }"
            ></form-button>
            <form-button
              class="ml-4"
              v-on:response="changed"
              v-bind:text="'Set Failed'"
              v-bind:link="todo.url"
              v-bind:data="{ status: 'FAILED' }"
              v-bind:style="{
                visibility: todo.status === 'FAILED' ? 'hidden' : 'visible',
              }"
            ></form-button>
          </div>
        </property-short>
        <property-short
          property="Completed"
          :short="todo.completed"
        ></property-short>
        <property-short
          v-if="
            todo.type === 'REPETITIVE' ||
              todo.type === 'NEVER_ENDING' ||
              todo.type === 'PIPELINE'
          "
          property="Previous"
          :short="todo.previous"
        ></property-short>
        <property-short
          v-if="todo.type === 'REPETITIVE' || todo.type === 'NEVER_ENDING'"
          property="Next"
          :short="todo.next"
        ></property-short>
        <hr />
        <property-short property="Archived" :short="todo.is_archived">
          <form-button
            v-on:response="changed"
            v-bind:text="'Toggle'"
            v-bind:link="todo.url"
            v-bind:data="{ is_archived: !todo.is_archived }"
          ></form-button>
        </property-short>
        <hr />
        <href-form-button text="Edit" link="edit/"></href-form-button>
        <href-form-button text="Delete" link="delete/"></href-form-button>
      </general-box>
    </detail-grid>
  </backend-box>
</template>

<script>
import HeadingOne from "@/components/HeadingOne.vue";
import FormButton from "@/components/FormButton.vue";
import PropertyText from "@/components/PropertyText.vue";
import PropertyShort from "@/components/PropertyShort.vue";
import HrefFormButton from "@/components/HrefFormButton.vue";
import TodosTodoBreadcrumb from "@/components/TodosTodoBreadcrumb.vue";
import TodosTodo from "@/mixins/TodosTodo.js";

export default {
  name: "TodosTodoDetail",
  mixins: [TodosTodo],
  components: {
    TodosTodoBreadcrumb,
    HeadingOne,
    PropertyText,
    PropertyShort,
    HrefFormButton,
    FormButton,
  },
  computed: {
    timeToDeadlineSeconds() {
      if (this.todo.deadline === null || this.todo.is_done) return 0;
      return (Date.parse(this.todo.deadline) - new Date()) / 1000;
    },
    timeToDeadline: function() {
      if (this.todo.deadline === null || this.todo.is_done) return "";
      let delta = this.timeToDeadlineSeconds;
      let timeToDeadline = delta < 0 ? "Overdue: " : "";
      // calculate (and subtract) whole days
      let days = Math.floor(delta / 86400);
      delta -= days * 86400;
      // calculate (and subtract) whole hours
      let hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      // calculate (and subtract) whole minutes
      let minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      // return human readable time to deadline
      timeToDeadline += days > 0 ? days + "d " : "";
      timeToDeadline += hours > 0 ? hours + "h " : "";
      timeToDeadline += minutes > 0 ? minutes + "min " : "";
      timeToDeadline = timeToDeadline.slice(0, -1);
      return timeToDeadline;
    },
  },
  methods: {
    changed: function(data) {
      this.todo = data;
    },
  },
};
</script>
