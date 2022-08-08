<script>
    import Header from "./lib/components/core/Header.svelte";
    import ContentHolder from "./lib/components/core/ContentHolder.svelte";
    import Footer from "./lib/components/core/Footer.svelte";

    import NavBar from './lib/components/core/NavBar.svelte';

    import { AppRouter } from "./lib/scripts/app_router";

    const possibleAppMainRoutes = ['home', 'blog-index', 'blog-page', 'user-account'];
    const appRouter = new AppRouter(possibleAppMainRoutes);

    let currentPage = appRouter.currentPage;

    const headerText = 'The Example';

    const footerInfo = {
        copyrightName: 'Jane Doe',
        copyrightYear: '2024'
    }

    const navBarItems = [
        {id: 0, navIcon: 'home', navName: 'Home'},
        {id: 1, navIcon: 'article', navName: 'Posts'},
        {id: 2, navIcon: 'account_box', navName: 'Account'}
    ];

    function changeCurrentPage(id){
        appRouter.changePage(id);
        currentPage = appRouter.currentPage;
    }
</script>

<Header headerText={headerText}/>

<NavBar navBarItems={navBarItems} />

<main>
    <ContentHolder bind:currentPage={currentPage}>
        <div slot='content-holder-above-content-slot'>
            <!-- Content to be displayed above the main page content -->
        </div>
        <div slot='content-holder-below-content-slot'>
            <!-- Content to be displayed below the main page content -->
        </div>
    </ContentHolder>
</main>

<Footer {...footerInfo} />

<style>

</style>
