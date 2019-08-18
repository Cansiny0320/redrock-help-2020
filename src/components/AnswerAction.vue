<template>
  <div class="v-answer-action">
    <div
      class="item"
      :class="{ active: item.isApproval }"
      @click="handelApprovalClick(item.id, item.isOppose)"
    >
      <AnswerApprovalSvg />
      {{ item.approvalNum }}
    </div>
    <div
      class="item"
      :class="{ active: item.isOppose }"
      @click="handelOpposeClick(item.id, item.isApproval)"
    >
      <AnswerOpposeSvg />
      {{ item.opposeNum }}
    </div>
    <VPopup
      v-if="isShowPopup"
      :massage="approvalOpposeTipsMassage"
    />
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
  data () {
    return {
      isShowPopup: false,
      approvalOpposeTipsMassage: '',
      timer: null,
    }
  },
  components: {
    AnswerApprovalSvg,
    AnswerOpposeSvg,
  },
  methods: {
    handelApprovalClick (answerId, isOppose) {
      if (isOppose !== undefined) {
        if (!isOppose) {
          this.$store.dispatch(FETCH_ANSWER_APPROVAL, answerId)
        } else {
          this.autoHidePopup()
          this.approvalOpposeTipsMassage = '请在点赞之前先取消反对'
        }
      }
    },
    handelOpposeClick (answerId, isApproval) {
      if (isApproval !== undefined) {
        if (!isApproval) {
          this.$store.dispatch(FETCH_ANSWER_OPPOSE, answerId)
        } else {
          this.autoHidePopup()
          this.approvalOpposeTipsMassage = '请在反对之前先取消点赞'
        }
      }
    },
    autoHidePopup () {
      this.isShowPopup = true
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.isShowPopup = false
      }, 1500)
    }
  }
}
</script>

<style lang="less" scoped>
.v-answer-action {
  display: flex;
  align-items: center;
  color: @fontColor;
  margin-right: 10px;
  .item {
    display: flex;
    align-items: center;
    margin-left: 47px;
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


