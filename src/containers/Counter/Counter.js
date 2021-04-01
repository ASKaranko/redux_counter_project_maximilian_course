import React, { Component } from 'react';
import * as actionTypes from '../../store/actions';

// Импорт Connect - функция, которая ВОЗВРАЩАЕТ HOC,
// позволяющая связать store контейнера
// с импортированным из redux store в App компоненте
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                {/*<CounterOutput value={this.state.counter} />*/}
                {/*<CounterControl label="Increment" */}
                {/*                clicked={() => this.counterChangedHandler( 'inc' )} />*/}
                {/*<CounterControl label="Decrement" */}
                {/*                clicked={() => this.counterChangedHandler( 'dec' )}  />*/}
                {/*<CounterControl label="Add 5" */}
                {/*                clicked={() => this.counterChangedHandler( 'add', 5 )}  />*/}
                {/*<CounterControl label="Subtract 5" */}
                {/*                clicked={() => this.counterChangedHandler( 'sub', 5 )}  />*/}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment"
                                clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement"
                                clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5"
                                clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5"
                                clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResult => (
                      <li
                          onClick={() => this.props.onDeleteResult(strResult.id)}
                          key={strResult.id}
                      >{strResult.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

// Параметрами connect будут mapStateToProps - какая часть state
// должна быть передана контейнеру, а также
// mapDispatchToProps - какие actions нужно передать контейнеру
// Записываются ПОСЛЕ КЛАССА

// Чтобы избежать конфликтов при объединении reducers, мы указываем
// state - ключ rootReducer - ключ state каждого отдельного reducer
const mapStateToProps = state => {
    return {
      ctr: state.ctr.counter,
      storedResults: state.res.results,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
      onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
      onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
      onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
      onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
      onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);