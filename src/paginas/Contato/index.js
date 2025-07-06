import React, { useState } from 'react';
import styles from './Contato.module.css';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert("Preencha todos os campos!");
      return;
    }

    // Salvar no localStorage
    const contatosSalvos = JSON.parse(localStorage.getItem('contatos') || '[]');
    contatosSalvos.push(formData);
    localStorage.setItem('contatos', JSON.stringify(contatosSalvos));

    alert("Contato salvo com sucesso!");

    // Resetar o formulário
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <main className={styles.contato}>
      <h2>📬 Deixe seu Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>Mensagem:
          <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
