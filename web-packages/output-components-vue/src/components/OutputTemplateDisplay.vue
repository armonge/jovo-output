<template>
  <div class="output-template-display">
    <template v-if="output.card || output.carousel">
      <p v-if="output.card && output.carousel" class="text-red-600">
        Can not display card and carousel in a single output.
      </p>
      <card-display
        v-else-if="output.card"
        :card="output.card"
        @image-loaded="$emit('image-loaded')"
      />
      <carousel-display
        v-else-if="output.carousel"
        :carousel="output.carousel"
        @image-loaded="$emit('image-loaded')"
      />
    </template>
    <message-display v-if="output.message" :message="output.message" />
    <div v-if="output.quickReplies" class="space-x-2">
      <quick-reply-display
        v-for="(quickReply, index) in output.quickReplies"
        :key="index"
        :quick-reply="quickReply"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CardDisplay from '@/components/CardDisplay.vue';
import CarouselDisplay from '@/components/CarouselDisplay.vue';
import MessageDisplay from '@/components/MessageDisplay.vue';
import QuickReplyDisplay from '@/components/QuickReplyDisplay.vue';
import { OutputTemplate } from '@jovotech/output';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'output-template-display',
  components: {
    CarouselDisplay,
    CardDisplay,
    QuickReplyDisplay,
    MessageDisplay,
  },
})
export default class OutputTemplateDisplay extends Vue {
  @Prop({ required: true, type: Object })
  readonly output!: OutputTemplate;
}
</script>

<style>
.output-template-display {
  @apply space-y-2 inline-flex flex-col;
}
</style>
