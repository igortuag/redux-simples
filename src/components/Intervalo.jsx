import './Intervalo.css'

import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo } from '../store/actions/numeros'
import { alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = props => {
    const { min, max } = props
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo ">
                <span>
                    <strong>Minimo: </strong>
                    <input type="number" value={props.min}
                        onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={props.max}
                        onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            // action creator => action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            // action creator => action
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionDispatchToProp)(Intervalo)
