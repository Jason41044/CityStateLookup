"use strict"

let cityStates = [
    {
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    },
    {
        state: "New York",
        stateAbbr: "NY",
        cities: ["New York", "Hempstead", "Buffalo"]
    },
    {
        state: "Pennsylvania",
        stateAbbr: "PA",
        cities: ["Pittsburgh", "Philadelphia", "Allentown"]
    }
];


window.onload = function () {
    loadStatesDropdown();

    const statesDropdown = document.getElementById("statesDropdown")
    statesDropdown.onchange = statesDropdownChanged;

    const citiesDropdown = document.getElementById("citiesDropdown")
    citiesDropdown.onchange = citiesDropdownChanged;
}

function loadStatesDropdown() {
    const statesDropdown = document.getElementById("statesDropdown")


    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    statesDropdown.appendChild(selectOneOption);

    for (let i = 0; i < cityStates.length; i++) {

        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;        // add that option to the <select> element
        statesDropdown.appendChild(theOption);

    }

    const citiesDropdown = document.getElementById("citiesDropdown");

    // Add a "Select league first..." <option>
    selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select State first...";
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);

}


function statesDropdownChanged() {
    const statesDropdown = document.getElementById("statesDropdown")
    const citiesDropdown = document.getElementById("citiesDropdown")

    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";


    citiesDropdown.options.length = 0;

    let selectedStateAbbr = statesDropdown.value;

    if (selectedStateAbbr == "") {
        // Add a "Select league first..." <option>
        let selectOneOption = document.createElement("option");

        // creates <option> element
        selectOneOption.textContent = "Select State first...";
        selectOneOption.value = "";
        citiesDropdown.appendChild(selectOneOption);

        // if they don't pick a State, we can't load teams
        return;
    }

    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateAbbr);
    let selectOneOption = document.createElement("option");

    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);

    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        citiesDropdown.appendChild(theOption);
    }
}

function citiesDropdownChanged() {
    const statesDropdown = document.getElementById("statesDropdown")
    const citiesDropdown = document.getElementById("citiesDropdown")

    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    let selectedCity = citiesDropdown.value

    if (selectedCity == "") {
        return;
    }

    let selectedStateIndex = statesDropdown.selectedIndex;
    let selectedState = statesDropdown.options[selectedStateIndex].text;


    let message = "State: " + selectedState + "<br>" +
        "Cities: " + selectedCity;
    messagePara.innerHTML = message;

}

