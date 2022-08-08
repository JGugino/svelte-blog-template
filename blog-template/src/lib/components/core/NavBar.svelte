<script>
    import { createEventDispatcher } from 'svelte';

    export let navBarItems = [
        {id: 0, navIcon: 'home', navName: 'Home'}
    ];

    let navBarOpen = false;

    const dispatch = createEventDispatcher();

    function toggleNavBar(){
        navBarOpen = !navBarOpen;
    }
</script>

<section id="nav-bar-container" class="flex flex-col flex-center">
    <button class='nav-bar-toggle-button' on:click|preventDefault|stopPropagation={toggleNavBar}>
        {#if !navBarOpen}
        <div class="toggle-icon">
            <span class="material-symbols-rounded"> arrow_drop_up </span>
        </div>
        {:else}
        <div class="toggle-icon">
            <span class="material-symbols-rounded"> arrow_drop_down </span>
        </div>
        {/if}
    </button>

    {#if navBarOpen}
    <nav class='flex'>
        {#each navBarItems as item}
            <button class="nav-bar-item">
                <span class="material-symbols-rounded"> {item.navIcon} </span>
            </button>
        {/each}
    </nav>
    {/if}
</section>

<style>
    #nav-bar-container{
        --nav-bar-light-toggle-background-color: #9C9C9C;
        --nav-bar-light-toggle-icon-color: #1C1B1F;
        --nav-bar-light-toggle-border-color: #000000;

        --nav-bar-dark-toggle-background-color: #3A3A3A;
        --nav-bar-dark-toggle-icon-color: #ffffff;
        --nav-bar-dark-toggle-border-color: #ffffff;

        --nav-bar-light-background-color: #9C9C9C;
        --nav-bar-light-border-color: #000000;
        --nav-bar-light-nav-item-background-color: #D9D9D9;
        --nav-bar-light-nav-item-icon-color: #1C1B1F;
        
        --nav-bar-dark-background-color: #3A3A3A;
        --nav-bar-dark-border-color: #ffffff;
        --nav-bar-dark-nav-item-background-color: #8E8E8E;
        --nav-bar-dark-nav-item-icon-color: #ffffff;

        --nav-bar-toggle-width: 80px;
        --nav-bar-toggle-height: 30px;

        --nav-bar-width: 80%;
        --nav-bar-height: 60px;

        --nav-bar-nav-item-size: 40px;

        --nav-bar-toggle-border-radius: 10px 10px 0 0;
        --nav-bar-border-radius: 10px 10px 0 0;
        --nav-bar-nav-item-border-radius: 10px;

        --nav-bar-toggle-icon-width: 27px;
        --nav-bar-toggle-icon-height: 12px;

        --nav-bar-nav-item-icon-size: 32px;


        width: 100%;
        position: fixed;
        bottom: 0;
    }

    .nav-bar-toggle-button{
        width: var(--nav-bar-toggle-width);
        height: var(--nav-bar-toggle-height);
        border: var(--nav-bar-light-toggle-border-color) solid 1px;
        border-radius: var(--nav-bar-toggle-border-radius);
        border-bottom-color: transparent;
        background-color: var(--nav-bar-light-toggle-background-color);
    }

    .toggle-icon > span{
        width: var(--nav-bar-toggle-icon-width);
        height: var(--nav-bar-toggle-icon-height);
        color: var(--nav-bar-light-toggle-icon-color);
    }

    nav{
        justify-content: space-around;
        align-items: center;

        width: var(--nav-bar-width);
        height: var(--nav-bar-height);
        border: var(--nav-bar-light-border-color) solid 1px;
        border-radius: var(--nav-bar-border-radius);
        border-bottom-color: transparent;
        background-color: var(--nav-bar-light-background-color);
    }

    .nav-bar-item{
        width: var(--nav-bar-nav-item-size);
        height: var(--nav-bar-nav-item-size);
        background-color: var(--nav-bar-light-nav-item-background-color); 
        border: var(--nav-bar-light-nav-item-background-color) solid 1px;
        border-radius: var(--nav-bar-nav-item-border-radius);
    }
</style>