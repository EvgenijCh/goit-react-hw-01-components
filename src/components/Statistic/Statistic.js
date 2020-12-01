import React from 'react'
import PropTypes from "prop-types";
import s from './Statistic.module.css'


const Statistics = ({stats}) => {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>Upload stats</h2>
        <StatList stats = {stats} />
        </section>
    )
}

const StatList = ({ stats }) => {
    return <ul className={s.statList}>{stats.map(StatListItem)
    }</ul>
}
const StatListItem = ({ id, label, percentage }) => {
    
     return (<li key={id} className={s.item} >
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
            </li>

    )
}

Statistics.propTypes = {
 title: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
export default Statistics

