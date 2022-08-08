<script>
    import WelcomeSection from "../WelcomeSection.svelte";

    const welcomeSectionInfo = {
        welcomeHeader: 'Welcome to The Example',
        welcomeMotto: 'The number one place to learn all the stuff'
    }
</script>

<section id="home-view" class="flex flex-col flex-gap-1">
    <WelcomeSection {...welcomeSectionInfo}/>
</section>

<style>

</style>