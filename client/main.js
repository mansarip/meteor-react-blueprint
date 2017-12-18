import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from '/imports/App';

import '/public/antd.min.css';

Meteor.startup(() => {
	render(<App />, document.getElementById('app'));
});