import { useState } from 'react';
import style from './App.module.css';
import { Selectel } from './Select';
import Select from 'react-select/base';

export const App = () => {


  return (
      <div className={style.app}>
          <Selectel/>
      </div>
  )
};
