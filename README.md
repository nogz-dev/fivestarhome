# Five Star Home App

App PWA da Five Star Home Management (Orlando e Miami).
Versão de demonstração: os dados ficam só no navegador, o login aceita qualquer e-mail e o pagamento não cobra nada.

## O que tem no app
- Login de cliente e de equipe
- Planos (Essential Care US$ 249, Premium US$ 499, VIP US$ 999) e contratação em 3 passos
- Imóveis, relatório de inspeção, agenda de chegadas
- Chamados de manutenção
- Avisos (central de atualizações)
- Suporte em formato de conversa
- Conta: planos, faturas, notificações e indicação
- Área da equipe: roteiro do dia e inspeção em campo

## Estrutura
```
fivestar-app/
├── server.js              servidor que o Railway roda (sem dependências)
├── package.json           comando de início: npm start
├── .gitignore
├── README.md
└── public/
    ├── index.html         o app inteiro
    ├── manifest.webmanifest
    ├── sw.js              service worker (instalar no celular e abrir offline)
    └── icons/             ícones do app
```

## Subir no GitHub
1. Crie um repositório vazio em github.com/new (ex.: `fivestar-app`). Pode ser privado.
2. Na página do repositório, clique em **uploading an existing file**.
3. Arraste **todo o conteúdo** desta pasta (os arquivos e a pasta `public`), não a pasta `fivestar-app` em si.
4. Clique em **Commit changes**.

## Ligar no Railway
1. Em railway.com, **New Project → Deploy from GitHub repo** e escolha o repositório.
2. O Railway detecta o Node sozinho e roda `npm start`. Não precisa configurar variável nenhuma.
3. Depois do deploy, abra **Settings → Networking → Generate Domain** para ganhar o link público.
4. Para domínio próprio (ex.: app.fivestarhome.us), use **Custom Domain** na mesma tela e crie o CNAME que o Railway mostrar.

Cada novo commit no GitHub faz o Railway publicar a versão nova automaticamente.

## Testar no computador (opcional)
```
npm start
```
Abra http://localhost:3000

## Atualizar o app nos celulares
Ao publicar mudanças, troque `fivestar-v1` para `fivestar-v2` no arquivo `public/sw.js`. Assim os celulares que já instalaram baixam a versão nova.
