import { Component } from 'react';
import PokemonErrorView from './PokemonErrorView.js';
import PokemonDataView from './PokemonDataView.js';
import PokemonPendingView from './PokemonPendingView.js';
import pokemonAPI from '../services/pokemon-api.js';

class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });
      pokemonAPI(this.props.pokemonName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { status, error, pokemon } = this.state;
    if (status === 'idle') {
      return <div>Type pokemon name</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingView />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

export default PokemonInfo;
