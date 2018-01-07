import React from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const formCadastro = props => (
	<Image style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
		<View style={{ flex: 1, padding: 10 }}>
			<View style={{ flex: 4, justifyContent: 'center' }}>
				<TextInput
					value={props.nome}
					placeholder="Nome"
					placeholderTextColor='#FFF'
					style={{ fontSize: 20, height: 45 }}
					onChangeText={texto => props.modificaNome(texto)}
				/>
				<TextInput
					value={props.email}
					placeholder="E-mail"
					placeholderTextColor='#FFF'
					style={{ fontSize: 20, height: 45 }}
					onChangeText={texto => props.modificaEmail(texto)}	
				/>
				<TextInput
					secureTextEntry
					value={props.senha}
					placeholder="Senha"
					placeholderTextColor='#FFF'
					style={{ fontSize: 20, height: 45 }}
					onChangeText={texto => props.modificaSenha(texto)}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<Button title="Cadastrar" color="#115E54" onPress={() => false} />
			</View>
		</View>
	</Image>
);

const mapStateToProps = state => (
	{
		nome: state.AutenticacaoReducer.nome,
		email: state.AutenticacaoReducer.email,
		senha: state.AutenticacaoReducer.senha
	}
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome})(formCadastro);