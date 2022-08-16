import React from 'react'


export default class App extends React.Component{

  state = {
    nome : 'Marcus',
    num: 0
  }

componentDidMount(){
 document.title = this.state.nome
}

componentDidUpdate(){
  document.title = this.state.nome

  if(this.state.num % 2 === 0){
    document.body.style.backgroundColor = 'red'
  }else{
    document.body.style.backgroundColor = ''
  }


}


changeName = () =>{

  this.setState({nome: this.state.nome === 'Marcus' ? 'Cosme' : 'Marcus'})
  // if(this.state.nome === 'Marcus'){
  //   this.setState({nome: 'Cosme'})
  // }else{
  //   this.setState({nome: 'Marcus'})
  // }
}

add = () =>{
  this.setState({num: this.state.num +1})
}

  render(){
    return(
      <>
      <h1>{this.state.num}</h1>
      <button onClick={()=>{this.add()}}>Add</button>
      <button onClick={()=>{this.changeName()}}>MUDAR NOME</button>
      </>
    )
  }
}