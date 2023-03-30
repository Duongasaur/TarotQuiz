import React, { ReactNode } from "react";
import styled from "styled-components";
import Advert from "./advertisement/index";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Landing from "./Landing";
import Results from "./Results";

const router = createBrowserRouter([
  {
    path: "/quiz",
    element: <Landing />
  },
  {
    path: "/quiz/results/:cards",
    element: <Results />
  },
  {
    path: "/",
    element: <Navigate to="/quiz" />
  }
]);

const MainLanding = styled.main`
  position: relative;
  z-index: 1;
`;

interface Props {
  children?: ReactNode;
}
const Page: React.FC<Props> = ({ children }: Props) => {
  return (
    <MainLanding>
      <Advert />
      <RouterProvider router={router} />
    </MainLanding>
  );
};

export default Page;
