<script>
    export let currentPage = '';
</script>

<div id="content-holder">
    <slot name="content-holder-above-content-slot"></slot>
    {#if currentPage === 'home'}
    <h1>Home</h1>
    {:else if currentPage === 'blog-index'}
    <h1>Blog Main</h1>
    {:else if currentPage === 'blog-page'}
    <h1>Blog Page</h1>
    {:else if currentPage === 'user-account'}
    <h1>Account</h1>
    {/if}
    <slot name="content-holder-below-content-slot"></slot>
</div>

<style>

</style>