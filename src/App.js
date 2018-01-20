import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
	
	componentWillMount() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyABQAVuyEcHkBCeD7jSy-I-X7MZ8aESZ5U",
			authDomain: "whatsapp-lone.firebaseapp.com",
			databaseURL: "https://whatsapp-lone.firebaseio.com",
			projectId: "whatsapp-lone",
			storageBucket: "whatsapp-lone.appspot.com",
			messagingSenderId: "202407415156"
		};
		firebase.initializeApp(config);
	}

	render() {
		return(
			<Provider store={createStore(reducers)} >
				<Routes/>
			</Provider>
		);
	}	
}

export default App;