

export  default {
    name: 'Laboratorios',
    component: () => import(/* webpackChunkName: "Laboratorios" */ '../layouts/laboratoriosLayout.vue'),
    children: [
    //    {
    //        path: '',   //Este path vacío es para buscar rutas
    //        name: 'Institucion',
    //        component: () => import(/* webpackChunkName: "Laboratorios-no-entry" */ '../views/Institución.vue')
    //    },
    //    {
    //        path: ':id',   
    //        name: 'entry',
    //        component: () => import(/* webpackChunkName: "Prueba1-entry" */ '../views/Entry.vue'),
    //        props: (route) => {
    //            return {
    //                id: route.params.id
    //            }
    //        }
    //    },
    ]
}