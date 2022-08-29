import * as React from "react";
import { Workspace } from "./Workspace";
import logo from './logo.png';

import s from './app.scss';


const App = () => {

  return (
    <div className={s.app}>
      <header>
        <img src={logo} alt="" style={{ width: 250 }} />
      </header>

      <main>
        <Workspace />
      </main>
    </div>
  );
};

export default App;
