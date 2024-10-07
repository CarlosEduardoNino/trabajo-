
import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"
import Actividad from "../components/Actividad.vue"
import Contacto from "../components/Contacto.vue"
import Inicio from "../components/Inicio.vue"
import Servicios from "../components/Servicios.vue"
import Habitaciones from "../components/Habitaciones.vue"


const routes = [
    {path:"/Actividad", component:Actividad},
    {path:"/Contacto", component:Contacto},
    {path:"/", component:Inicio},
    {path:"/servicios", component:Servicios},
    {path:"/Habitaciones", component:Habitaciones}
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes
})