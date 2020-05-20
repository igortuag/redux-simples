import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    const { min, max } = props

    return (
        <Card title="Sorteio de um Números" purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{parseInt(Math.random()*(max-min)+min+1)}</strong>
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

export default connect(mapStateToProps)(Sorteio)