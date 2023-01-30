import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesContainerComponent } from "../movies-container/movies.container";


const appRoutes:Routes = [
    {path:'movies', component:MoviesContainerComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(appRoutes)
    ]
})

export class MoviesRoutes{

}