<template>
    <!-- 更多按钮 -->
    <a :class="`buttonMore ${type}`" :href="path" :target="target">
        <span>
            <slot />
        </span>
        <img :src="arrow[type]">
    </a>
</template>

<script>
import arrow1 from '@/assets/arrow1.png';
import arrow2 from '@/assets/arrow2.png';

export default {
    name: 'ButtonMore',

    props: {
        type: {
            type: String,
            default: 'style01'
        },
        path: {
            type: [Boolean, String],
            default: false
        },
        target: {
            type: String,
            default: '_self'
        }
    },

    data() {
        return {
            arrow: {
                'style01': arrow1,
                'style02': arrow1,
                'style03': arrow2
            }
        }
    },

    methods: {
        jump() {
            const { path, href } = this;

            if (path) {
                this.$router.push(path);
            } else {
                window.location.href = href;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: $__mobile__size) {
    .buttonMore {
        text-decoration: unset;
        user-select: none;

        // 有背景色
        &.style01, &.style02 {
            position: relative;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            background: #111111;
            color: #FFFFFF;
            overflow: hidden;
            cursor: pointer;
            @include vw((
                margin-top: 50,
                padding-left: 40,
                padding-right: 52,
                height: 52,
                line-height: 52
            ));
            @include fontsize(16);

            >span {
                z-index: 1;
            }

            >img {
                position: relative;
                left: 12px;
                transition: all 300ms;
                @include vw((height: 12));
            }

            &:before {
                content: '';
                position: absolute;
                top: -15vw;
                left: -35vw;
                width: 30vw;
                height: 30vw;
                background: #333333;
                transform: rotate(30deg);
                transition: all 100ms;
            }

            &:hover {
                >img {
                    left: 17px;
                }

                &:before {
                    left: 0;
                }
            }
        }

        &.style02 {
            background: #D90000;

            &:before {
                background: #DE3939;
            }
        }

        // 无背景色
        &.style03 {
            display: flex;
            align-items: center;
            color: #D90000;
            cursor: pointer;
            font-weight: bold;
            @include vw((margin-top: 40));
            @include fontsize(16);

            >img {
                position: relative;
                left: 12px;
                transition: all 250ms ease-in-out;
                @include vw((height: 12));
            }

            &:hover>img {
                left: 17px;
            }
        }
    }
}
@media screen and (min-width:851px) and (max-width:1400px){
    .buttonMore.style01, .buttonMore.style02{width: 190px; height: 52px; box-sizing: border-box; line-height: 52px;}
}
@media screen and (max-width: $__mobile__size) {
    @import './styles/ButtonMore/smallScreen.scss';
}
</style>