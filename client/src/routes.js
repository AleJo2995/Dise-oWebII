import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const Clientes = React.lazy(() => import('./Demo/Clientes/Clientes'));
const Busetas = React.lazy(() => import('./Demo/Busetas/Busetas'));
const CreateBusetas = React.lazy(() => import('./Demo/Busetas/CreateBuseta'));
const Reservar = React.lazy(() => import('./Demo/Reservas/Reservar'));
const CreateClientes = React.lazy(() => import('./Demo/Clientes/CreateCliente'));
const EditClientes = React.lazy(() => import('./Demo/Clientes/EditCliente'));
const DeleteClientes = React.lazy(() => import('./Demo/Clientes/DeleteCliente'));
const EditBusetas = React.lazy(() => import('./Demo/Busetas/EditBuseta'));
const DeleteBusetas = React.lazy(() => import('./Demo/Busetas/DeleteBuseta'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
    { path: '/clientes', exact: true, name: 'Users', component: Clientes },
    { path: '/busetas', exact: true, name: 'Busetas', component: Busetas },
    { path: '/create/busetas', exact: true, name: 'Busetas', component: CreateBusetas },
    { path: '/edit/busetas', exact: true, name: 'Busetas', component: EditBusetas },
    { path: '/delete/busetas', exact: true, name: 'Busetas', component: DeleteBusetas },
    { path: '/clientes/create', exact: true, name: 'Users', component: CreateClientes },
    { path: '/clientes/edit', exact: true, name: 'Users', component: EditClientes },
    { path: '/clientes/delete', exact: true, name: 'Users', component: DeleteClientes },
    { path: '/reservar', exact: true, name: 'Users', component: Reservar },
];

export default routes;