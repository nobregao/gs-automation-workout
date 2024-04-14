# Workout Scheduler Calendar

Este é um script para agendar e gerenciar treinos de academia no calendário. Utiliza scripts em Google Apps Script para interagir com o Google Calendar.

## Estrutura de Arquivos

* **env.js:** Arquivo de configuração que contém constantes relacionadas ao ambiente.

* **utils.js:** Arquivo que contém utilitários e configurações gerais, como definições de treinos, dias da semana e funções relacionadas ao calendário.

* **main.js:** O script principal que executa a lógica principal do agendamento de treinos.


## Configuração Inicial

Antes de executar o projeto, certifique-se de configurar corretamente o arquivo `env.js` com o ID do calendário do Google e link para página de treinos.

Em seguida, conceda as permissões de manipulação de eventos.

## Funcionalidades

- **Agendamento Automático:** O script automatiza o agendamento de treinos na próxima semana com base em uma lista predefinida.

- **Tratamento de Eventos Cancelados:** Caso um treino seja cancelado, o sistema atualiza o evento no calendário, alterando a cor para cinza e removendo descrição e lembretes. Para isso é preciso criar um evento na mesma agenda com o título `workout cancelled`

## Execução

Para executar o projeto no Google Apps Script, basta colar o código no Editor de Scripts e chamar a função `main()`. Certifique-se de ter as permissões necessárias para acessar e modificar o calendário do Google associado.

**Exemplo de Execução:**

Para facilitar a execução, utilize a tecla de atalho:

- No Windows/Linux: Pressione `Ctrl + R`.
- No macOS: Pressione `Cmd + R`.

Lembre-se de verificar regularmente as atualizações da API ou ajustar os parâmetros conforme necessário para garantir a precisão do calendário.

## Build
Localmente, execute o comando abaixo para baixar as dependências.
```bash
npm install
```

## Testes

Execute os testes local com o comando:
```bash
npm test
```

## Automatizando a Execução

Você pode configurar uma trigger no Google Apps Script. Isso permitirá que o script seja executado automaticamente. Siga os passos abaixo para configurar uma trigger:


1. No Editor de Scripts do Google, vá até o menu "Editar" e selecione "Configurações do Projeto".

2. Na guia "Configurações do Projeto", clique na seção "Triggers".

3. No canto inferior direito, clique no botão "+ Adicionar Trigger".

4. Selecione a função a ser executada, que neste caso é `main`.

5. Escolha o tipo de evento, como "Temporizador" ou "Agendado".

6. Configure a frequência desejada, por exemplo, a cada 4 horas.

7. Clique em "Salvar".

Agora, o script será executado automaticamente de acordo com a configuração da trigger. Certifique-se de ajustar as permissões necessárias para que a trigger possa acessar e modificar o calendário do Google associado.