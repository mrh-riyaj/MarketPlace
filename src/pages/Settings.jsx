import MenuItem from "../components/MenuItem"

const Settings = (props) => { 

    return(
        <section className="setting-section">
            <div className="setting-body">
                <div className="setting-tittle">Settings</div>
                <div className="setting-wrapper d-flex">
                    <div className="settings">
                        <MenuItem text="Show notifications" icon="sun" />
                        <MenuItem text="Keyboard shortcuts" icon="sun" />
                        <MenuItem text="Switch appearance" icon ="sun"/>
                        <MenuItem text="Set a custom buyer message" icon ="sun"/>
                    </div>
                    <div className="settings">
                        <span className="tittle">Buying</span>
                        <MenuItem text="Messages for sellers" icon="cog" />
                        <MenuItem text="Updates" icon="cog" />
                        <MenuItem text="Recommended for you" icon="cog" />
                        <span className="tittle">Selling</span>
                        <MenuItem text="Messages for buyers" icon="cog" />
                        <MenuItem text="Tips for sellers" icon="cog" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings