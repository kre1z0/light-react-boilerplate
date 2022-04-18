import React from "react";

import { LoadingIndicator } from "ui";
import { LoadingWrapper } from "./styled";

import { lazyLoad } from "utils/loadable";

export const IndexPage = lazyLoad(
  () => import("./Page"),
  (module) => module.IndexPage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
