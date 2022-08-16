import React from "react";
import axios from "axios";
import styled from "styled-components";

const Conteiner = styled.div`
  width: 100%;
  background: blueviolet;
  padding: 5px;
  border: 2px solid black;

  h2 {
    color: white;
  }

  p {
    color: white;
  }
`;

const MyApi_Movie = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=a83c5fa3bb074fe41c058b4210e22cd8&language=en-US&page=1"
});

export default class Movie extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.GetApi();
  }

  GetApi = async () => {
    const PegandoApi = await MyApi_Movie.get();

    const InfoFilmes = PegandoApi.data.results.map((item) => {
      return {
        nome: item.title,
        sinopse: item.overview
      };
    });

    this.setState({ movies: InfoFilmes });

    console.log(PegandoApi);
  };

  render() {
    return (
      <>
        {this.state.movies.map((item) => (
          <Conteiner>
            <h2>{item.nome}</h2>
            <p>{item.sinopse}</p>
          </Conteiner>
        ))}
      </>
    );
  }
}
