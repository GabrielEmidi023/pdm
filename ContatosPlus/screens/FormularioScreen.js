// screens/FormularioScreen.js
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

export default function FormularioScreen({ route, navigation }) {
  // Estado dos campos
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  // Validar se campo obrigatório está vazio
  const hasErrors = () => {
    return !nome || !telefone || !email || !cpf || !dataNascimento;
  };

  // Simples validação de email
  const isEmailValid = () => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  // Máscara simples para telefone (só números)
  const formatTelefone = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 10) cleaned = cleaned.slice(0, 11);
    // Formatar como (99) 99999-9999
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
    } else {
      return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
    }
  };

  const onSalvar = () => {
    if (hasErrors()) {
      alert('Preencha todos os campos!');
      return;
    }
    if (!isEmailValid()) {
      alert('Email inválido!');
      return;
    }
    alert('Contato salvo com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={{ marginBottom: 12 }}
        error={!nome}
      />
      <TextInput
        label="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(formatTelefone(text))}
        keyboardType="phone-pad"
        mode="outlined"
        style={{ marginBottom: 12 }}
        error={!telefone}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        mode="outlined"
        style={{ marginBottom: 12 }}
        error={email !== '' && !isEmailValid()}
      />
      <TextInput
        label="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
        mode="outlined"
        style={{ marginBottom: 12 }}
        error={!cpf}
      />
      <TextInput
        label="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="DD/MM/AAAA"
        keyboardType="numeric"
        mode="outlined"
        style={{ marginBottom: 12 }}
        error={!dataNascimento}
      />

      <Button mode="contained" onPress={onSalvar} disabled={hasErrors()}>
        Salvar
      </Button>
    </ScrollView>
  );
}
