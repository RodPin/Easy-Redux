# Easy-Redux
Simplest Redux example for beginners

----------------PORTUGUES

1-Criar o store

2-Envolver o App com o Provider passando store pra ele:

3-Criar os Reducers e combina-los no index.js da pasta reducers

4-Usar this.context.store.dispatch({}) para atualizar o estado no store

5- Usar o this.context.store.subscribe({})  no componentWillMount(){} para ler o estado da store e depois passa-lo por props

6- declarar o static propstyles onde for usar o this.context.store

----------------ENGLISH

1-Create the store

2-Envolve App with passing store:

3-Create the Reducers and combine them at index.js of reducers folder

4-Use this.context.store.dispatch({}) to update the store state

5- Use this.context.store.subscribe({}) at componentWillMount(){} (at <App/>)to read the store state and pass to other components
through props

6- declare static propstyles when using this.context.store




WITH MAPSTATETOPROPS:

1-CREATE A CONTAINER THAT WILL RECEIVE THE COMPONENT AND THE STATE FROM THE STORE.
