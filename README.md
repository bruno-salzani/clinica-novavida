# 🏥 Clínica Nova Vida - Website Institucional
![Status](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Stack](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Deploy](https://img.shields.io/badge/Deploy-Netlify-orange)
![Responsive](https://img.shields.io/badge/Layout-Responsivo-blueviolet)

Website institucional desenvolvido para a **Clínica Nova Vida**, especializada no tratamento e reabilitação de dependência química e alcoolismo em Limeira - SP. O projeto visa apresentar a metodologia de tratamento, a equipe multidisciplinar e facilitar o contato com pacientes e familiares.

---

# 🎯 Objetivo do Projeto

Garantir a presença digital da clínica e fornecer informações essenciais:
- **Apresentação Institucional:** História, missão e valores.
- **Detalhes do Tratamento:** Fases, duração e metodologia (12 passos, TCC, etc.).
- **Estrutura e Equipe:** Apresentação da equipe técnica e instalações físicas.
- **Informações Práticas:** Lista de enxoval, documentos necessários e contato.
- **Acessibilidade:** Design responsivo e navegação intuitiva.

Foco em:
- **Clareza e Acolhimento:** Design limpo e informações diretas.
- **Performance:** Carregamento rápido e otimização de recursos.
- **SEO:** Estruturação semântica e meta tags (Schema.org).

---

# 🧠 Estratégia e Arquitetura

O projeto foi construído como um site estático (Single Page Application conceitual) para garantir alta performance e facilidade de hospedagem.

Camadas principais:
1.  **Estrutura (HTML5):** Semântica e acessibilidade.
2.  **Estilo (CSS3 + Bootstrap):** Layout responsivo, grid system e customizações visuais (`src/css`).
3.  **Interatividade (JavaScript + jQuery):** Manipulação de DOM, modais e carrosséis.
4.  **Assets:** Otimização de imagens e ícones (FontAwesome).
5.  **SEO:** Meta tags configuradas para redes sociais e buscadores.

Diretrizes técnicas:
- Mobile-First Design.
- Uso de classes utilitárias do Bootstrap.
- Ícones vetoriais para nitidez em qualquer resolução.

---

# 🔄 Seções e Fluxos

1.  **Home / Início**
    - Banner principal e apresentação rápida.
2.  **Sobre / Resumo**
    - Explicação do tratamento (6 meses, 3 fases).
    - Metodologia multidisciplinar.
3.  **Rotina e Equipe**
    - Timeline interativa com as atividades diárias.
    - Descrição das funções (Médico, Psicóloga, Terapeutas).
4.  **Galeria**
    - Visualização da estrutura física (Quartos, Lazer, Refeitório).
5.  **Contato e Localização**
    - Endereço, telefones e links para WhatsApp.

---

# 📁 Estrutura do Projeto

```
/
├── index.html              # Página principal (Single Page)
├── README.md               # Documentação do projeto
├── src/
│   ├── assets/             # Recursos estáticos de terceiros
│   │   ├── css/            # Bootstrap, FontAwesome
│   │   ├── js/             # jQuery, Bootstrap JS
│   │   ├── img/            # Imagens do layout e galeria
│   │   └── fonts/          # Fontes personalizadas
│   └── css/                # Estilos personalizados
│       ├── style.css       # Estilos gerais
│       ├── timeline.css    # Estilo da linha do tempo
│       └── carousel.css    # Estilo do carrossel
```

Arquivos de destaque:
- [index.html](file:///d:/Projects/clinica-novavida/index.html)
- [src/css/style.css](file:///d:/Projects/clinica-novavida/src/css/style.css)
- [src/css/timeline.css](file:///d:/Projects/clinica-novavida/src/css/timeline.css)

---

# ⚙️ Funcionalidades

## Interface do Usuário
- **Menu Responsivo:** Colapsável em dispositivos móveis.
- **Modal de Imagens:** Visualização expandida ao clicar nas fotos da galeria.
- **Timeline Vertical:** Apresentação visual da rotina da clínica.

## Integrações
- **Schema.org:** Dados estruturados para "MedicalClinic".
- **Open Graph:** Cards ricos para compartilhamento em redes sociais.
- **Botão WhatsApp:** Link direto para contato rápido.

---

# 🧪 Boas Práticas

- **Semântica HTML:** Uso correto de tags (`header`, `main`, `section`, `nav`).
- **Organização de CSS:** Separação de estilos por componentes (timeline, carousel).
- **Assets Locais:** Dependências (Bootstrap, jQuery) incluídas no projeto para garantir disponibilidade offline/local.
- **Acessibilidade:** Textos alternativos (`alt`) em imagens.

---

# ℹ️ Informações do Tratamento (Negócio)

### 📅 Fases (6 Meses)
1.  **Desintoxicação (0-2 meses):** Limpeza física e mental.
2.  **Conscientização (2-4 meses):** Terapia intensiva e reestruturação.
3.  **Ressocialização (4-6 meses):** Preparação para o retorno social.

### 📋 Admissão (Checklist)
- **Documentos:** RG, CPF/CNH, Cartão SUS, Comprovante de Residência.
- **Enxoval:** Roupas confortáveis (ver lista completa no contrato), itens de higiene pessoal, roupa de cama.

---

# 🛠️ Tecnologias

- **HTML5** (Estrutura)
- **CSS3** (Estilo)
- **Bootstrap 4** (Framework CSS)
- **JavaScript / jQuery** (Interatividade)
- **FontAwesome** (Ícones)
- **Netlify** (Hospedagem)

---

# ▶️ Como Executar

1) **Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/clinica-novavida.git
```

2) **Abrir o projeto**
Basta abrir o arquivo `index.html` em qualquer navegador moderno.

3) **Ambiente de Desenvolvimento (Opcional)**
Para editar e ver alterações em tempo real, recomenda-se usar o **Live Server** (extensão do VS Code).

---

# 🤝 Conclusão

Este projeto cumpre o papel fundamental de ser a porta de entrada digital para a Clínica Nova Vida, combinando informações técnicas precisas com um design acolhedor para auxiliar famílias e pacientes no momento da busca por tratamento.

**Link de Demonstração:** [https://clinica-novavida.netlify.app/](https://clinica-novavida.netlify.app/)
