/** @format */

import React from "react";
import Main from "../../components/main/Main";
import Movies from "../../components/movies/Movies";
import {
  upcome,
  latest,
  recommended,
} from "../../data/dummyData";
const HomePage = () => {
  return (
    <>
      <Main />
      <Movies
        data={upcome}
        title='Upcomming Movies'
        release={false}
      />
      <Movies
        data={latest}
        title='Latest Movies'
        release={true}
      />
      <Movies
        data={recommended}
        title='Recommended Movies'
        release={true}
      />
    </>
  );
};

export default HomePage;
