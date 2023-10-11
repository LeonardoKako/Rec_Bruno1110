import React, { startTransition, useState } from 'react';
import { styles } from './styles';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const TelaCadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacio, setNacio] = useState('');
  const [exp, setExp] = useState('');
  const [vulgo, setVulgo] = useState('');

  const salvarDados = () => {
    navigation.navigate('TelaVisualizacao');
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
      <Text style={styles.titulo}>Técnico sem clube? Cadastre-se!</Text>
        <TextInput
          placeholder="Nome Completo:"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Idade:"
          value={idade}
          onChangeText={setIdade}
          style={styles.input}
        />
        <TextInput
          placeholder="Nacionalidade:"
          value={nacio}
          onChangeText={setNacio}
          style={styles.input}
        />
        <TextInput
          placeholder="Experiência:"
          value={exp}
          onChangeText={setExp}
          style={styles.input}
        />
        <TextInput
          placeholder="Conhecido como:"
          value={vulgo}
          onChangeText={setVulgo}
          style={styles.input}
        />
       <TouchableOpacity style={styles.btn} onPress={salvarDados}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <Text style={styles.titulo}>Seus dados:</Text>
        <Text style={styles.dado}>Nome: {nome}</Text>
        <Text style={styles.dado}>Idade: {idade}</Text>
        <Text style={styles.dado}>Nacionalidade: {nacio}</Text>
        <Text style={styles.dado}>Experiência: {exp}</Text>
        <Text style={styles.dado}>Conhecido como: {vulgo}</Text>
        </View>
        </View>
  );
}

export default TelaCadastro;
