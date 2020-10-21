<template>
    <div class="tab">
        <ul>
            <li
                v-for="(i, iIndex) in tabList"
                :key="iIndex"
                class="item"
                :class="{
                    active: isActive === iIndex,
                }"
                @click="openPage(i.path, iIndex)"
            >
                <span>{{ i }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Tab",
    props: {
        tabList: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {
            isActive: 0, // 选中
        };
    },

    created() {},

    methods: {
        openPage(path, index) {
            this.isActive = index;
            this.$emit("changTab", index);
        },
        changeActive(index) {
            this.isActive = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.tab {
    width: 100%;
    overflow: visible;
    line-height: 56px;
    border-bottom: 1px solid #e5eaf1;

    li {
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        color: #5d749f;
        margin-right: 40px;
        cursor: pointer;
        transition: color 0.3s;
        position: relative;
        &::after {
            content: "";
            height: 3px;
            position: absolute;
            background: #1e8cff;
            border-radius: 3px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0%;
            transition: width 0.3s;
        }

        &.active {
            color: #1e8cff;
            position: relative;
            &::after {
                width: 100%;
            }
        }
    }
}
</style>
