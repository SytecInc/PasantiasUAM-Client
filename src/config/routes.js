import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notfound";
import Signin from "../components/MenuComponents/Login";
import GeneralLayout from "../layouts/GeneralLayout";

const routesAdmin = [
    //{ path: "/admin/contact", layout: GeneralLayout, component: Contact },
    //{ path: "/admin/login/", layout: GeneralLayout, component: AdminSignin},
];

const routesGeneral = [
    { path: "/login", layout: GeneralLayout, component: Signin },
    { path: "/contact", layout: GeneralLayout, component: Contact },
    { path: "/", layout: GeneralLayout, component: Home },
    { path: "*", layout: GeneralLayout, component: NotFound },
];

const projectRoutes = [...routesAdmin, ...routesGeneral];
export default projectRoutes;