export class AppRouter{
    #appRoutes = [];
    #currentPage = null;

    constructor(routes){
        try{
            if(Array.isArray(routes) && routes.length > 0){
                this.#appRoutes = routes;
                this.#currentPage = this.#appRoutes[0];
            }
        }catch(err){
            console.error(`[ System - Error ] : No routes specified`);
        }
    }

    changePage(id){
        if(!this.#appRoutes[id]){
            console.error(`[ System - Error ] : Invaild route`)
            return;
        }

        this.#currentPage = this.#appRoutes[id];
    }

    //#region ### GETTERS ###
    get appRoutes(){
        return this.#appRoutes;
    }

    get currentPage(){
        return this.#currentPage;
    }
    //#endregion
}