<script>
    export let welcomeHeader = 'Welcome Header';
    export let welcomeMotto = 'This is the welcome motto';
</script>

<section id="welcome-section" class='flex flex-col'>
    <h2>{welcomeHeader}</h2>
    <p>{welcomeMotto}</p>
</section>

<style>
    #welcome-section{
        --welcome-light-header-text-color: #45CBDA;
        --welcome-light-motto-text-color: #000000;

        --welcome-header-font-size: 24pt;
        --welcome-header-font-weight: 600;

        --welcome-motto-font-size: 14pt;
        --welcome-motto-font-weight: 400;

        --welcome-texts-gap: 0.6rem;
        --welcome-texts-vertical-margin: 1rem;

        text-align: center;
        
        margin: var(--welcome-texts-vertical-margin) 0;
        gap: var(--welcome-texts-gap);
    }

    /*Welcome section header text*/
    #welcome-section > h2{
        color: var(--welcome-light-header-text-color);
        font-size: var(--welcome-header-font-size);
        font-weight: var(--welcome-header-font-weight);
    }

    /*Welcome section motto text*/
    #welcome-section > p{
        color: var(--welcome-light-motto-text-color);
        font-size: var(--welcome-motto-font-size);
        font-weight: var(--welcome-motto-font-weight);
    }
</style>