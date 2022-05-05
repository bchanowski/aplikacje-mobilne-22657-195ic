import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles/styles";
import SelectComp from "./SelectComponent";

export default function SelectingOptions() {
    const [teams, setTeam] = useState([
        { label: "none", value: null },
        { label: "Ferrari", value: "Ferrari" },
        { label: "RedBull", value: "RedBull" },
        { label: "Mercedes", value: "Mercedes" },
        { label: "McLaren", value: "McLaren" },
        { label: "Alpine", value: "Alpine" }
    ]);
    const [drivers, setDriver] = useState([
        { label: "none", value: null, teams: ["Ferrari","RedBull", "McLaren","Mercedes","Alpine"] },
        { label: "C. LeClerc", value: 1, teams: ["Ferrari"] },
        { label: "C. Sainz", value: 5, teams: ["Ferrari"] },
        { label: "M. Verstappen", value: 2, teams: ["RedBull"] },
        { label: "S. Perez", value: 3, teams: ["RedBull"] },
        { label: "L. Hamilton", value: 7, teams: ["Mercedes"] },
        { label: "G. Russell", value: 4, teams: ["Mercedes"] },
        { label: "L. Norris", value: 6, teams: ["McLaren"] },
        { label: "E. Ocon", value: 9, teams: ["Alpine"] }
    ]);
    const [driversList, setDriversList] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [selection, setSelection] = useState("");

    return (
        <View style={styles.sortFiltr.sortFiltrContainer}>
            <SelectComp
                label="Team"
                items={teams}
                selectedValue={selectedTeam}
                onValueChange={name => {
                    setSelectedTeam(name);
                    setSelectedDriver(null);
                    setDriversList(drivers.filter(i => i.teams.includes(name)));
                }}
            />
            <SelectComp
                label="Car"
                items={driversList}
                selectedValue={selectedDriver}
                onValueChange={driver => {
                    setSelectedDriver(driver);
                    setSelection(
                        `${drivers.find(i => i.value === driver).value}` + ' in standings!'
                    );
                }}
            />
            <Text style={styles.sortFiltr.sortFiltrText}>{selection}</Text>
        </View>
    );
}