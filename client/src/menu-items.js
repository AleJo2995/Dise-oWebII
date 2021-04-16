export default {
    items: [
        {
            id: 'navigation',
            title: 'Navegación Principal',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Inicio',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'MODULOS',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'basic',
                    title: 'Clientes',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'Ver Clientes',
                            type: 'item',
                            url: '/clientes'
                        },
                        {
                            id: 'badges',
                            title: 'Crear Cliente',
                            type: 'item',
                            url: '/clientes/create'
                        },
                        {
                            id: 'breadcrumb-pagination',
                            title: 'Editar Cliente',
                            type: 'item',
                            url: '/clientes/edit'
                        },
                        {
                            id: 'collapse',
                            title: 'Eliminar Cliente',
                            type: 'item',
                            url: '/clientes/delete'
                        },
                        {
                            id: 'collapse',
                            title: 'Reservar Espacio en Buseta',
                            type: 'item',
                            url: '/reservar'
                        }
                    ]
                },
                {
                    id: 'basic1',
                    title: 'Busetas',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'button',
                            title: 'Ver Busetas',
                            type: 'item',
                            url: '/busetas'
                        },
                        {
                            id: 'badges',
                            title: 'Crear Busetas',
                            type: 'item',
                            url: '/create/busetas'
                        },
                        {
                            id: 'breadcrumb-pagination',
                            title: 'Editar Busetas',
                            type: 'item',
                            url: '/edit/busetas'
                        },
                        {
                            id: 'collapse',
                            title: 'Eliminar Buseta',
                            type: 'item',
                            url: '/delete/busetas'
                        }
                    ]
                }

            ]
        }
    ]
}