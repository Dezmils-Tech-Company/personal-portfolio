const StatsSection = ({ stats }) => {   
    return (
        <section className="stats-section">
            <div className="stats-grid">
                <div className="stat-card">
                    <h3 className="stat-title">Followers</h3>
                    <p className="stat-value">{stats.followers}</p> 
                </div>
                <div className="stat-card">
                    <h3 className="stat-title">Following</h3>   
                    <p className="stat-value">{stats.following}</p>
                </div>
                <div className="stat-card">
                    <h3 className="stat-title">Public Repos</h3>
                    <p className="stat-value">{stats.public_repos}</p>
                </div>
                <div className="stat-card">
                    <h3 className="stat-title">Public Gists</h3>            
                    <p className="stat-value">{stats.public_gists}</p>
                </div>
            </div>
        </section>
    );
}

export default StatsSection;