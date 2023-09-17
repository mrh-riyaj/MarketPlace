import ForFilter from './hidden-components/ForFilter'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { useState } from 'react'

const Filter = () => {
    const [filter, setFilter] = useState(false)
    
    return (
        <div className="filter-body d-flex position-r">
            <Logo path="/"/>
            <Button
                text="Filter" type="primary" iconRight="search"
                onClick={() => setFilter(!filter)}
            />
            {filter && <ForFilter onClose={() => setFilter(false)} />}
        </div>
    )
}

export default Filter