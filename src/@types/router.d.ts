import { Component, HTMLAttributes } from "vue";

declare module 'vue-router' {
    export interface RouteMeta {
        title?: string
        icon?: Component
        useOutScroll?: boolean
        ignoreTab?: boolean
    }
}

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        RouterLink: typeof import('vue-router')['RouterLink']
        RouterView: typeof import('vue-router')['RouterView']
        component: {
            $props: HTMLAttributes;
            $slots: {
                default: (arg: any) => VNode[];
            };
        };
    }
}