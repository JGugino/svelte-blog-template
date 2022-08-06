<script>
    import Header from "./lib/components/core/Header.svelte";
    import ContentHolder from "./lib/components/core/ContentHolder.svelte";
    import Footer from "./lib/components/core/Footer.svelte";

    import { AppRouter } from "./lib/scripts/app_router";

    const possibleAppMainRoutes = ['home', 'blog-index', 'blog-page', 'user-account'];
    const appRouter = new AppRouter(possibleAppMainRoutes);

    let currentPage = appRouter.currentPage;

    function changeCurrentPage(id){
        appRouter.changePage(id);
        currentPage = appRouter.currentPage;
    }

    /*
    * TODO: Create header and footer
    */

</script>

<Header />

<main>
    <ContentHolder bind:currentPage={currentPage}>
    </ContentHolder>
</main>

<Footer />

<style>

</style>
