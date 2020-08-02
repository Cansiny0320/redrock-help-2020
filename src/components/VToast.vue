<template>
    <VMask>
        <div class="tipBox">
            <div class="require">
                <p>{{ massage }}</p>
            </div>
            <div class="button">
                <p class="cancel" @touchstart="handelCancelClick">取消</p>
                <p class="confirm" @touchstart="handelConfirmClick">确认</p>
            </div>
        </div>
    </VMask>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "vToast",
    props: {
        massage: {
            type: String,
            required: true,
        },
    },
    methods: {
        handelCancelClick() {
            this.$emit('cancel')
        },
        handelConfirmClick() {
            this.$emit('confirm')
        }
    }
};
</script>

<style lang="less" scoped>
.tipBox {
    border-radius: 10px;
    width: 540px;
    background: #ffffff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    box-sizing: border-box;
    .require {
        padding: 55px 57px;
        color: #454545;
        p {
            font-size: 30px;
            line-height: 44px;
        }
    }
    .button {
        border-top: 1px solid #e5e5e5;
        box-sizing: border-box;
        display: flex;
        .cancel,
        .confirm {
            width: 50%;
            text-align: center;
            padding: 30px 0;
            font-size: 36px;
        }
        .cancel {
            color: #454545;
            box-sizing: border-box;
            border-right: 1px solid #e5e5e5;
        }
        .confirm {
            color: @mainColor;
        }
    }
}
</style>
