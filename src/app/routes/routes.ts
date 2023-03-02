import { Route } from "@angular/router";

export const defaultRoute: Route = {
    path: "",
    loadComponent: ()=> import("../components/c1/c1.component").then(c=> c.C1Component)
}

export const c1Route: Route = {
    path: "c1",
    loadComponent: ()=> import("../components/c1/c1.component").then(c=> c.C1Component)
}

export const c2Route: Route = {
    path: "c2",
    loadComponent: ()=> import("../components/c2/c2.component").then(c=> c.C2Component)
}

export const c3Route: Route = {
    path: "c3",
    loadComponent: ()=> import("../components/c3/c3.component").then(c=> c.C3Component)
}