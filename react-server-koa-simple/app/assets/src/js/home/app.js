/**!
 * react-server-koa-simple /app/assets/src/js/home/app.js
 * clientRender entry for home page
 *
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * Authors:
 *   谋士 <qingliang.hql@alibaba-inc.com>
 */
'use strict';

import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import Content from '../home/components/Content.js';

const appEle = document.getElementById('demoApp');
let microdata = JSON.parse(appEle.getAttribute('data-microdata'));
let myData = JSON.parse(appEle.getAttribute('data-mydata'));
myData.nick += ', then client reRender ';

render(<Content myData={myData} microdata={microdata} /> , appEle);
