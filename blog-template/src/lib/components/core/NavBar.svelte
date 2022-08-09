<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let navBarItems = [
        {navId: 0, navIcon: 'home', navName: 'Home'}
    ];

    export let closeAfterNav = true;

    let navBarOpen = false;

    const dispatch = createEventDispatcher();

    const navMenuIconSrc = './icons/nav_menu_icon.svg';

    function toggleNavBar(){
        navBarOpen = !navBarOpen;
    }

    function navButtonClicked(id){
        dispatch('nav-button-clicked', id);
        if(closeAfterNav) toggleNavBar();
    }
</script>

<section id="nav-bar-container" class="flex flex-col flex-center flex-gap-1">
    <button class='nav-bar-toggle-button' on:click|preventDefault|stopPropagation={toggleNavBar}>
        <div class="toggle-icon flex flex-col flex-center">
            <img src={navMenuIconSrc} alt={`Nav Menu Icon`}>
        </div>
    </button>

    {#if navBarOpen}
    <nav class='flex flex-col' transition:fly={{x: -20, delay: 210, duration: 200}}>
        {#each navBarItems as item}
            <button class="nav-bar-item flex flex-col flex-center" on:click={()=>{navButtonClicked(item.navId);}}>
                <img src={item.navIcon} alt={`${item.navName} Icon`}>
            </button>
        {/each}
    </nav>
    {/if}
</section>

<style>
    #nav-bar-container{
        --nav-bar-light-toggle-background-color: #9C9C9C;
        --nav-bar-light-toggle-icon-color: invert(6%) sepia(2%) saturate(4675%) hue-rotate(214deg) brightness(93%) contrast(89%);;
        --nav-bar-light-toggle-border-color: #000000;
        --nav-bar-light-toggle-hover-border-color: #44e2f4;
        --nav-bar-light-toggle-hover-icon-color: invert(81%) sepia(64%) saturate(929%) hue-rotate(152deg) brightness(94%) contrast(105%);

        --nav-bar-dark-toggle-background-color: #3A3A3A;
        --nav-bar-dark-toggle-icon-color: invert(100%) sepia(100%) saturate(2%) hue-rotate(32deg) brightness(107%) contrast(100%);
        --nav-bar-dark-toggle-border-color: #ffffff;
        --nav-bar-dark-toggle-hover-border-color: #44e2f4;
        --nav-bar-dark-toggle-hover-icon-color: invert(81%) sepia(64%) saturate(929%) hue-rotate(152deg) brightness(94%) contrast(105%);

        --nav-bar-light-background-color: #9C9C9C;
        --nav-bar-light-border-color: #000000;
        --nav-bar-light-nav-item-background-color: #D9D9D9;
        --nav-bar-light-nav-item-icon-color: invert(6%) sepia(2%) saturate(4675%) hue-rotate(214deg) brightness(93%) contrast(89%);;
        --nav-bar-light-nav-item-hover-border-color: #44e2f4;
        --nav-bar-light-nav-item-hover-icon-color: invert(81%) sepia(64%) saturate(929%) hue-rotate(152deg) brightness(94%) contrast(105%);


        --nav-bar-dark-background-color: #3A3A3A;
        --nav-bar-dark-border-color: #ffffff;
        --nav-bar-dark-nav-item-background-color: #8E8E8E;
        --nav-bar-dark-nav-item-icon-color: invert(100%) sepia(100%) saturate(2%) hue-rotate(32deg) brightness(107%) contrast(100%);
        --nav-bar-dark-nav-item-hover-border-color: #44e2f4;
        --nav-bar-dark-nav-item-hover-icon-color: invert(81%) sepia(64%) saturate(929%) hue-rotate(152deg) brightness(94%) contrast(105%);

        --nav-bar-toggle-width: 3rem;
        --nav-bar-toggle-height: 3rem;

        --nav-bar-toggle-icon-width: 2rem;
        --nav-bar-toggle-icon-height: 2rem;

        --nav-bar-width: 60px;
        --nav-bar-height: 20rem;

        --nav-bar-nav-item-size: 40px;

        --nav-bar-nav-item-icon-size: 32px;

        --nav-bar-toggle-border-radius: 10px;
        --nav-bar-border-radius: 0 10px 10px 0;
        --nav-bar-nav-item-border-radius: 10px;

        --nav-bar-transition-duration: 200ms;

        width: var(--nav-bar-width);
        position: fixed;
        top: 10rem;
        left: 0;
    }

    .nav-bar-toggle-button{
        width: var(--nav-bar-toggle-width);
        height: var(--nav-bar-toggle-height);
        border: var(--nav-bar-light-toggle-border-color) solid 1px;
        border-radius: var(--nav-bar-toggle-border-radius);
        background-color: var(--nav-bar-light-toggle-background-color);
        transition: border-color ease-in-out var(--nav-bar-transition-duration);
    }

    .toggle-icon{
        user-select: none;
        cursor: pointer;
    }

    .toggle-icon > img{
        width: var(--nav-bar-toggle-icon-width);
        height: var(--nav-bar-toggle-icon-height);
        filter: var(--nav-bar-light-toggle-icon-color);
        transition: filter ease-in-out var(--nav-bar-transition-duration);
    }

    .nav-bar-toggle-button:hover{
        border-color: var(--nav-bar-light-toggle-hover-border-color);
    }

    .nav-bar-toggle-button:hover > .toggle-icon > img{
        filter: var(--nav-bar-light-toggle-hover-icon-color);
    }

    nav{
        justify-content: space-around;
        align-items: center;

        width: var(--nav-bar-width);
        height: var(--nav-bar-height);
        border: var(--nav-bar-light-border-color) solid 1px;
        border-radius: var(--nav-bar-border-radius);
        border-left-color: transparent;
        background-color: var(--nav-bar-light-background-color);
    }

    .nav-bar-item{
        width: var(--nav-bar-nav-item-size);
        height: var(--nav-bar-nav-item-size);
        background-color: var(--nav-bar-light-nav-item-background-color); 
        border: var(--nav-bar-light-border-color) solid 1px;
        border-radius: var(--nav-bar-nav-item-border-radius);
        cursor: pointer;
        transition: border-color ease-in-out var(--nav-bar-transition-duration);
    }

    .nav-bar-item > img{
        width: var(--nav-bar-nav-item-icon-size);
        height: var(--nav-bar-nav-item-icon-size);
        filter: var(--nav-bar-light-nav-item-icon-color);
        transition: filter ease-in-out var(--nav-bar-transition-duration);
    }

    .nav-bar-item:hover{
        border-color: var(--nav-bar-light-nav-item-hover-border-color);
    }

    .nav-bar-item:hover > img{
        filter: var(--nav-bar-light-nav-item-hover-icon-color);
    }

    @media (prefers-color-scheme: dark){
        .nav-bar-toggle-button{
            background-color: var(--nav-bar-dark-background-color);
            border-color: var(--nav-bar-dark-border-color);
        }

        .toggle-icon > img{
            filter: var(--nav-bar-dark-toggle-icon-color);
        }

        nav{
            border-color: var(--nav-bar-dark-border-color);
            border-left-color: transparent;
            background-color: var(--nav-bar-dark-background-color);
        }

        .nav-bar-item{
            background-color: var(--nav-bar-dark-nav-item-background-color); 
            border-color: var(--nav-bar-dark-border-color);
        }

        .nav-bar-item > img{
            filter: var(--nav-bar-dark-nav-item-icon-color);
        }

        .nav-bar-item:hover{
            border-color: var(--nav-bar-dark-nav-item-hover-border-color);
        }

        .nav-bar-item:hover > img{
            filter: var(--nav-bar-dark-nav-item-hover-icon-color);
        }
    }
</style>