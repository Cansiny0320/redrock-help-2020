<template>
  <div class="v-answer-action">
    <div
      :class="{ active: item.isApproval }"
      @click="handelApprovalClick(item.id, item.isOppose)"
    >
      <AnswerApprovalSvg />
      {{ item.approvalNum }}
    </div>
    <div
      :class="{ active: item.isOppose }"
      @click="handelOpposeClick(item.id, item.isApproval)"
    >
      <AnswerOpposeSvg />
      {{ item.opposeNum }}
    </div>
  </div>
</template>

<script>
import {
  FETCH_ANSWER_APPROVAL,
  FETCH_ANSWER_OPPOSE,
} from '@/store/type/actions'

import AnswerApprovalSvg from '@/assets/svg/AnswerApproval.svg'
import AnswerOpposeSvg from '@/assets/svg/AnswerOppose.svg'

export default {
  name: 'answerAction',
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  components: {
    AnswerApprovalSvg,
    AnswerOpposeSvg,
  },
  methods: {
    handelApprovalClick (answerId, isOppose) {
      if (!isOppose) this.$store.dispatch(FETCH_ANSWER_APPROVAL, answerId)
    },
    handelOpposeClick (answerId, isApproval) {
      if (!isApproval) this.$store.dispatch(FETCH_ANSWER_OPPOSE, answerId)
    }
  }
}
</script>

<style lang="less" scoped>
.v-answer-action {
  display: flex;
  align-items: center;
  color: @fontColor;
  div {
    display: flex;
    align-items: center;
    margin: 0 10px;
    svg {
      margin: 0 4px;
      height: 30px;
      width: 30px;
    }
    fill: @fontColor;
    &.active {
      fill: @mainColor;
      color: @mainColor;
    }
  }
}
</style>


