import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLandingPage from "./pages/MainLandingPage";
import StudentLandingPage from "./pages/StudentLandingPage";
import StudentJoinClassPage from "./pages/StudentJoinClassPage";

import LecturerLandingPage from "./pages/LecturerLandingPage";
import LecturerAddClassPage from "./pages/LecturerAddClassPage";
import LecturerViewAttendancePage from "./pages/LecturerViewAttendancePage";
import LecturerChooseClass from "./pages/LecturerChooseClass";
import StudentViewAttendance from "./pages/StudentViewAttendance";
import StudentChooseName from "./pages/StudentChooseName";

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
  {
    path: "/student/view-attendance",
    element: <StudentChooseName />,
  },
  {
    path: "/student/view-attendance/:name",
    element: <StudentViewAttendance />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
