
import React from 'react';


class TeamIndia extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                { name: "Rohit Sharma", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg" },
                { name: "Yashasvi Jaisval", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Yashasvi_Jaiswal_in_PMO_New_Delhi.jpg" },
                { name: "Shubman Gill", image: "https://www.robinage.com/wp-content/uploads/2023/10/SHUBMAN-GILL2-800x534.jpg" },
                { name: "Virat Kohli", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/198px-Virat_Kohli_in_PMO_New_Delhi.jpg" },
                { name: "Rishabh Pant", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg" },
                { name: "Sarfaraz Khan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9MA-_CYooR290TCndB-neWgx5EEOnHRHGQ&s" },
                { name: "Dhruv Jurel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-uZ4qu1a325rPacO5JCq4W2IPxWRoOSsBff3v5UJ6YM3fGxhobLaJpwUedN1TMENAsA&usqp=CAU" },
                { name: "Ravindra Jadeja", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ2bfQpQD_zHpzocuH-lboucPfBILhb3QMQ&s" },
                { name: "Akash Deep", image: "https://static.toiimg.com/thumb/msid-107920876,width-400,resizemode-4/107920876.jpg" },
                { name: "Jasprit Bumrah", image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Jasprit_Bumrah_in_PMO_New_Delhi.jpg" },
                { name: "Mohammed Siraj", image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Mohammad_Siraj_%28cropped%29.jpg" },
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

export default TeamIndia;
