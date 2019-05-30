/*----------------------------------------*\
  Nav
\*----------------------------------------*/

import { addEventListenerList } from 'helpers/utils';

export default class Nav {
  constructor(navList) {
    this._navList = navList;

    this._addEventListener();
  }

  _addEventListener() {
    console.log(this._navList)
  }
}
