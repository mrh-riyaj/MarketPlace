import SidePopUp from './common/SidePopUp'
import Button from '../components/Button'
import Logo from '../components/Logo'
import { useState } from 'react'

const Filter = () => {
    const [filterPopUp, setFilterPopUp] = useState(false)
    
    return (
        <div className="filter-body d-flex">
            <Logo />
            <Button icon="search" onClick={() => setFilterPopUp(true)}/>

            {filterPopUp && <SidePopUp 
                title="More"
                content={
                    <div>C</div>
                }
                SidePopUpFilter
                onClose={() => setFilterPopUp(false)}
            />}
        </div>
    )
}

export default Filter