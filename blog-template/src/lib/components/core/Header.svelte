<script>
    export let headerText = 'Header Text';
</script>

<header>
    <h1>{headerText}</h1>
</header>

<style>
    header{
        --header-light-background: #9AC3C8;
        --header-light-text-color: #09353A;

        --header-dark-background: #9AC3C8;
        --header-dark-text-color: #09353A;

        --header-font-size: 24pt;
        --header-font-weight: 800;
        --header-vertical-padding: 0.2em;
        --header-horizontal-padding: 0.2em;
        --header-border-radius: 0 0 10px 10px;

        background-color: var(--header-light-background);
        color: var(--header-light-text-color);
        font-size: var(--header-font-size);
        font-weight: var(--header-font-weight);
        padding: var(--header-vertical-padding) var(--header-horizontal-padding);
        text-align: center;
        border-radius: var(--header-border-radius);
        user-select: none;
    }

    @media (prefers-color-scheme: dark){
        header{
            background-color: var(--header-dark-background);
            color: var(--header-dark-text-color);
        }
    }
</style>