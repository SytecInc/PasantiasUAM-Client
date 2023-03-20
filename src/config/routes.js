//Page layouts
import { GeneralLayout } from "../Layouts/GeneralLayout/GeneralLayout";
import { LoginLayout } from "../Layouts/LoginLayout/LoginLayout";

//Pages
import { AdminHome } from "../pages/admin/AdminHome";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { SignIn } from "../pages/SignIn/SignIn";

const GeneralRoutes = [
    { path: "/signin", component: SignIn, layout: LoginLayout },
    { path: "*", component: NotFound, layout: LoginLayout},
    { path: "/contact", component: Contact, layout: GeneralLayout },
];

const StudentRoutes = [
    { path: "/", component: Home, layout: GeneralLayout },
]

const AdminRoutes = [
    { path: "/admin", component: AdminHome, layout: GeneralLayout }
];

const AuthRoutes = [...AdminRoutes, ...StudentRoutes];

export {
    GeneralRoutes,
    AuthRoutes,
};
