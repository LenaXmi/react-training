import React from 'react'
import s from './Counter.module.css'

const Value = ({value}) => 
    <span className={s.Counter__value}>{value}</span>


    export default Value