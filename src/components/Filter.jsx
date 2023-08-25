import Logo from '../components/Logo'
import Button from '../components/Button'

const Filter = () => {
    return (
        <div className="filter-body d-flex">
            <Logo />
            <Button icon="search" path="/"/>
        </div>
    )
}

export default Filter