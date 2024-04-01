## 🚀 Como executar

Clone o repositório e acesse a pasta.

```bash
$ git clone https://github.com/DorivalJunior23/hisnek-react-native-aws/tree/main

Para iniciar o projeto:

```bash

# Instalar as dependências
$ npm install


# Iniciar o projeto
$ expo start

# Iniciar no android
$ a
```




# ✨ Estrutura base de código

O projeto é codificado utilizando uma estrutura simples e intuitiva apresentada a seguir:

```bash
📦app
┣ 📂assets
  ┣ 📂data                                       #Arquivos json consumidos na aplicação
  ┣ 📂fonts                           
  ┗ 📂images                                       #Imagens para o carregamento da aplicação
┣ 📂src
  ┣ 📂components
    ┣ 📂_tests_                                    #Testes unitários da aplicação
    ┣ 📂ui
      ┗ 📂card
        ┣ 📜CardProductCard.tsx                      #Retorna um card de produto para o carrinho
        ┗ 📜ProductCard.tsx                         #Retorna um card do produto
    ┗ 📜ProfileAuth.tsx                             #Retorna o componente de autenticação do usuário
  ┣ 📂 constants                           
  ┣ 📂router
    ┣ 📜bottomTabNav.tsx                            #Define o layout da aplicaçao em tabs
    ┣ 📜HomeStack.tsx	                              #Define as rotas da Home
    ┣ 📜index.tsx	                                     
    ┗ 📜ShoppingCartStack.tsx		                    #Define as rotas do Cart
  ┣ 📂screens
    ┣ 📜Cart.tsx		                                 #Pagina do carrinho de compras
    ┣ 📜Home.tsx                                     #Exibe uma lista de produtos com imagem, título e preço.
    ┣ 📜Product.tsx                                 #Retorna a descrição do produto    
    ┗ 📜Profile.tsx		                              #Pagina do perfil de usuario 
┣ 📜App.tsx                                              
┗ 📜index.js                                     #Arquivo inicial da aplicação

```
