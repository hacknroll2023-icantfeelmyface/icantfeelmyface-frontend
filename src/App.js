import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLandingPage from "./pages/MainLandingPage";
import StudentLandingPage from "./pages/StudentLandingPage";
import StudentJoinClassPage from "./pages/StudentJoinClassPage";

import LecturerLandingPage from "./pages/LecturerLandingPage";
import LecturerAddClassPage from "./pages/LecturerAddClassPage";
import LecturerViewAttendancePage from "./pages/LecturerViewAttendancePage";
import LecturerChooseClass from "./pages/LecturerChooseClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLandingPage />,
  },
  {
    path: "/student",
    element: <StudentLandingPage />,
  },
  {
    path: "/student/join-class",
    element: <StudentJoinClassPage />,
  },
  {
    path: "/lecturer",
    element: <LecturerLandingPage />,
  },
  {
    path: "/lecturer/add-class",
    element: <LecturerAddClassPage />,
  },
  {
    path: "/lecturer/view-attendance/:classCode",
    element: <LecturerViewAttendancePage />,
  },
  {
    path: "/lecturer/view-attendance",
    element: <LecturerChooseClass />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
