<script>
    import { createEventDispatcher } from 'svelte';

    import HomeView from "../blog/views/HomeView.svelte";
    import BlogIndexView from "../blog/views/BlogIndexView.svelte";
    import BlogPageView from "../blog/views/BlogPageView.svelte";
    import AccountView from "../blog/views/AccountView.svelte";

    export let currentPage = '';

    //const dispatch = createEventDispatcher();
</script>

<section id="content-holder">
    <slot name="content-holder-above-content-slot"></slot>

    {#if currentPage === 'home'}
    <HomeView />
    {:else if currentPage === 'blog-index'}
    <BlogIndexView />
    {:else if currentPage === 'blog-page'}
    <BlogPageView />
    {:else if currentPage === 'user-account'}
    <AccountView />
    {/if}

    <slot name="content-holder-below-content-slot"></slot>
</section>

<style>

</style>