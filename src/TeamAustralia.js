
import React from 'react';


class TeamAustralia extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                { name: "Matthew Hayden", image: "https://static.toiimg.com/thumb/msid-77866060,width-400,resizemode-4/77866060.jpg" },
                { name: "Devid Warner", image: "https://www.cricketwa.com/Images/PlayerImages/44-David%20Warner.jpg" },
                { name: "Shubman Gill", image: "path_to_shubman_image" },
                { name: "Virat Kohli", image: "path_to_virat_image" },
                { name: "Rishabh Pant", image: "path_to_rishabh_image" },
                { name: "Sarfaraz Khan", image: "path_to_sarfaraz_image" },
                { name: "Dhruv Jurel", image: "path_to_dhruv_image" },
                { name: "Ravindra Jadeja", image: "path_to_ravindra_image" },
                { name: "Akash Deep", image: "path_to_akash_image" },
                { name: "Jasprit Bumrah", image: "path_to_jasprit_image" },
                { name: "Mohammed Siraj", image: "path_to_siraj_image" },
            ],
            counterone: 0, // Count of selected players
        };
    }

    // Remove a player when their button is clicked
    removePlayer = (index) => {
        const updatedPlayers = this.state.players.filter((_, i) => i !== index);

        this.setState({
            players: updatedPlayers,
            counterone: this.state.counterone + 1, // Increment the count of removed players
        });
    };

    renderScore = () => {
        return <h3>Players Removed: {this.state.counterone}</h3>;
    };

    render() {
        const styles = {
            container: { textAlign: "center", padding: "20px" },
            heading: { fontSize: "2rem", marginBottom: "10px" },
            subHeading: { fontSize: "1.5rem", marginBottom: "20px" },
            grid: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "20px",
            },
            card: {
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            },
            image: { width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" },
            name: { marginTop: "10px", fontSize: "1rem", fontWeight: "bold" },
            button: {
                backgroundColor: "lightblue",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
            },
        };

        return (
            <div className="team">
                <div style={styles.container}>
                    <h1 style={styles.heading}>India vs Australia 2024</h1>
                    <h2 style={styles.subHeading}>Test Series Strongest Playing XI</h2>
                    <div style={styles.grid}>
                        {this.state.players.map((player, index) => (
                            <div key={index} style={styles.card}>
                                <img src={player.image} alt={player.name} style={styles.image} />
                                <p style={styles.name}>{player.name}</p>
                                <button
                                    style={styles.button}
                                    onClick={() => this.removePlayer(index)}
                                >
                                    Remove Player
                                </button>
                            </div>
                        ))}
                    </div>
                    {this.renderScore()}
                </div>
            </div>
        );
    }
}

export default TeamAustralia;
