<script>
    export let copyrightName = 'John Doe';
    export let copyrightYear = '2022';
</script>

<footer class="flex flex-center">
    <p>&copy; Copyright {copyrightName} {copyrightYear}, All rights reserved.</p>
</footer>

<style>
    footer{
        --footer-light-background-color: #ADADAD;
        --footer-light-text-color: #000000;

        --footer-dark-background-color: #434343;
        --footer-dark-text-color: #D9D9D9;

        --footer-width: 100%;
        --footer-height: 2rem;
        --footer-font-size: 10pt;
        --footer-font-weight: bold;
        --footer-border-radius: 10px;

        width: var(--footer-width);
        height: var(--footer-height);
        background-color: var(--footer-light-background-color);
        color: var(--footer-light-text-color);
        font-size: var(--footer-font-size);
        font-weight: var(--footer-font-weight);
        border-radius: var(--footer-border-radius);
        margin: 0 auto;
        user-select: none;
    }

    @media (prefers-color-scheme: dark){
        footer{
            background-color: var(--footer-dark-background-color);
            color: var(--footer-dark-text-color);
        }
    }

    @media screen and (min-width: 500px){
        footer{
            --footer-width: 26rem;
        }
    }
</style>