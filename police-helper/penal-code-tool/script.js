// Comprehensive Penal Code charges data
const charges = [
    { number: '(1) A', description: 'General Traffic Violation', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 1', description: 'Driving at the wrong lane of the road', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 2', description: 'Illegal U-turn, performing a U-turn which crosses lanes of traffic', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 3', description: 'Blocking/cutting off intersection, it may cause a lot of dangerous accident', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 4', description: 'Driving on pedestrian walk, which is taking their rights', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 5', description: 'Excessive use of horn, it may disturbing other drivers', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 6', description: 'Driving through a safety zone (any safety zone secured by traffic devices, and others)', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 7', description: 'Violating safety requirements (motorcycle: helmet), (car: belt), and lights', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 8', description: 'Violating safety requirements on heavy vehicles/big trucks', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) A. 9', description: 'Failure to Obey a Traffic Control Device (signs, roadblocks, hand signals, or other equipment used by law enforcement)', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) B', description: 'Failure to pay any issued ticket', fine: '$65.00', jailtime: '15', bail: '$195.00' },
    { number: '(1) C', description: 'Driving any motorized vehicle without an official driving license', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(1) D', description: 'Maneuver any sea vehicles without official sailing licenses', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(1) E. 1', description: 'Driving any truck without official trucking licenses', fine: '$1,500.00', jailtime: '0', bail: '$9,000.00' },
    { number: '(1) E. 2', description: 'Driving any lorry without official trucking licenses', fine: '$500.00', jailtime: '30', bail: '$3,000.00' },
    { number: '(1) F. 1', description: 'Truck driving in any inappropriate path, without any permission from officers before', fine: '$2,000.00', jailtime: '30', bail: '$10,000.00' },
    { number: '(1) F. 2', description: 'Lorry driving in any inappropriate path, without any permission from officers before', fine: '$200.00', jailtime: '30', bail: '$1,200.00' },
    { number: '(1) G', description: 'Flying any air vehicles without official flying licenses as a pilot', fine: '$2,250.00', jailtime: '35', bail: '$10,000.00' },
    { number: '(1) H', description: 'Speeding', fine: '$1,000.00', jailtime: '-', bail: '-' },
    { number: '(1) I', description: 'Vehicle Parking Violation', fine: '$150.00', jailtime: '-', bail: '-' },
    { number: '(1) J', description: 'Illegal Modifications On Vehicles', fine: '$200.00', jailtime: '-', bail: '-' },
    { number: '(1) K', description: 'Unregistered Vehicles', fine: '$150.00', jailtime: '-', bail: '-' },
    { number: '(1) L', description: 'Vehicular Endangerment', fine: '$2,500.00', jailtime: '30', bail: '$8,000.00' },
    { number: '(1) M', description: 'Vehicular Manslaughter', fine: '$250.00', jailtime: '40', bail: '$2,000.00' },
    { number: '(1) N', description: 'DWI or DUI', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(1) O', description: 'Illegal Street Racing', fine: '$150.00', jailtime: '25', bail: '$750.00' },
    { number: '(1) P', description: 'Evading From Police', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(1) Q', description: 'Flight Regulations', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) R', description: 'Misbehavely Maneuvering / Operating an Aircraft / Aircraft Endangerment', fine: '$450.00', jailtime: '30', bail: '$2,700.00' },
    { number: '(1) S', description: 'Emergency Landing', fine: '$400.00', jailtime: '-', bail: '-' },
    { number: '(1) T', description: 'Failure to Yield to Emergency Vehicles', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(1) U', description: 'Failure to Yield to A Roadblock', fine: '$200.00', jailtime: '-', bail: '-' },
    { number: '(1) V', description: 'Following An Emergency Vehicle', fine: '$300.00', jailtime: '-', bail: '-' },
    { number: '(1) W', description: 'Altering or Changing a Vehicle Identification Number', fine: '$100.00', jailtime: '20', bail: '$400.00' },
    { number: '(2) A', description: 'Firearms License', fine: '-', jailtime: '-', bail: '-' },
    { number: '(2) B', description: 'Flying License', fine: '-', jailtime: '-', bail: '-' },
    { number: '(2) C', description: 'Trucking License', fine: '-', jailtime: '-', bail: '-' },
    { number: '(2) D', description: 'Lumberjack License', fine: '$2,000.00', jailtime: '25', bail: '$10,000.00' },
    { number: '(2) E', description: 'Event Permit', fine: '-', jailtime: '-', bail: '-' },
    { number: '(2) F', description: 'Organizing a Small Illegal Event', fine: '$5,000.00', jailtime: '25', bail: '$10,000.00' },
    { number: '(2) G', description: 'Organizing a Big Illegal Event', fine: '$7,500.00', jailtime: '35', bail: '$10,000.00' },
    { number: '(2) H', description: 'Hunting Permit', fine: '$2,000.00', jailtime: '30', bail: '$6,000.00' },
    { number: '(3) A', description: 'Possessing of Marijuana / Pots (Small Amount)', fine: '$200.00', jailtime: '10', bail: '$400.00' },
    { number: '(3) B', description: 'Possessing of Marijuana / Pots (Large Amount)', fine: '$400.00', jailtime: '15', bail: '$1,200.00' },
    { number: '(3) C', description: 'Possessing of Cocaine / Crack (Small Amount)', fine: '$375.00', jailtime: '20', bail: '$1,500.00' },
    { number: '(3) D', description: 'Possessing of Cocaine / Crack (Large Amount)', fine: '$750.00', jailtime: '25', bail: '$3,750.00' },
    { number: '(3) E', description: 'IUI or IWI', fine: '$150.00', jailtime: '15', bail: '$450.00' },
    { number: '(3) F', description: 'Selling or distributing of illegal drugs', fine: '$500.00', jailtime: '25', bail: '$2,500.00' },
    { number: '(3) G', description: 'Drug Manufacturing', fine: '$500.00', jailtime: '35', bail: '$3,500.00' },
    { number: '(3) H', description: 'Being Present for Illegal Drug Use', fine: '$100.00', jailtime: '10', bail: '$200.00' },
    { number: '(4) A', description: 'Possessing, Showing, And Display Any Usages of Sharp / Blunt Weapons', fine: '$150.00', jailtime: '15', bail: '$450.00' },
    { number: '(4) B', description: 'Possessing of Illegal Firearms', fine: '$500.00', jailtime: '40', bail: '$4,000.00' },
    { number: '(4) C', description: 'Possessing of Legal Firearms Without Official Firearms License', fine: '$50.00', jailtime: '20', bail: '$200.00' },
    { number: '(4) D', description: 'Possessing Any Kind of Weapon Materials or Schematics', fine: '$500.00', jailtime: '25', bail: '$2,500.00' },
    { number: '(4) E', description: 'Firearms License Violation', fine: '-', jailtime: '-', bail: '-' },
    { number: '(4) E. 2', description: 'GCU (Gun Control Unit) Weapon Target', fine: '-', jailtime: '-', bail: '-' },
    { number: '(4) F', description: 'Brandishing a Firearm or Weapon', fine: '$200.00', jailtime: '20', bail: '$800.00' },
    { number: '(4) G', description: 'Unlawful Discharge of a Firearm or Weapon', fine: '$200.00', jailtime: '25', bail: '$1,000.00' },
    { number: '(4) H', description: 'Possession of a Body Armor', fine: '$400.00', jailtime: '10', bail: '$800.00' },
    { number: '(4) I', description: 'Weapon Trafficking', fine: '$400.00', jailtime: '30', bail: '$2,400.00' },
    { number: '(4) J', description: 'Possessing Destructive Devices or Explosives', fine: '$350.00', jailtime: '35', bail: '$2,450.00' },
    { number: '(5) A', description: 'Intimidation', fine: '$50.00', jailtime: '10', bail: '$100.00' },
    { number: '(5) B', description: 'Assault', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(5) C', description: 'Assault with Deadly Weapons', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(5) D', description: 'Battery', fine: '$200.00', jailtime: '25', bail: '$1,000.00' },
    { number: '(5) E', description: 'Aggravated Battery', fine: '$250.00', jailtime: '30', bail: '$1,500.00' },
    { number: '(5) F', description: 'Attempted Murdering', fine: '$200.00', jailtime: '30', bail: '$1,200.00' },
    { number: '(5) G', description: 'Murdering', fine: '$400.00', jailtime: '50', bail: '$4,000.00' },
    { number: '(5) H', description: 'Committed a group criminal assault with or without weapons', fine: '$250.00', jailtime: '30', bail: '$1,500.00' },
    { number: '(5) I', description: 'Performing A Drive-By Using Light or Heavy Fire Arms', fine: '$300.00', jailtime: '35', bail: '$2,100.00' },
    { number: '(5) J', description: 'Melee Robbery', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(5) K', description: 'Armed Robbery', fine: '$150.00', jailtime: '30', bail: '$900.00' },
    { number: '(5) L', description: 'Piracy', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(5) M', description: 'Grand Theft', fine: '$250.00', jailtime: '25', bail: '$1,250.00' },
    { number: '(5) N', description: 'Grand Theft Auto', fine: '$250.00', jailtime: '15', bail: '$750.00' },
    { number: '(5) O', description: 'Grand Theft of Firearms', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(5) P', description: 'Abuse or Desecration of Dead Human Body', fine: '$200.00', jailtime: '15', bail: '$600.00' },
    { number: '(5) Q', description: 'Kidnapping', fine: '$350.00', jailtime: '30', bail: '$2,100.00' },
    { number: '(5) R', description: 'Hostage Taking', fine: '$250.00', jailtime: '60', bail: '$3,000.00' },
    { number: '(5) S', description: 'Torture', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(5) T', description: 'Blackmail', fine: '$100.00', jailtime: '10', bail: '$200.00' },
    { number: '(5) U', description: 'Human Trafficking', fine: '$550.00', jailtime: '65', bail: '$7,150.00' },
    { number: '(6) A', description: 'Sexual Harassment', fine: '$500.00', jailtime: '10', bail: '$1,000.00' },
    { number: '(6) B', description: 'Rape', fine: '$300.00', jailtime: '60', bail: '$3,600.00' },
    { number: '(6) C', description: 'Statutory Rape', fine: '$500.00', jailtime: '75', bail: '$7,500.00' },
    { number: '(6) D', description: 'Prostitution', fine: '$250.00', jailtime: '30', bail: '$1,500.00' },
    { number: '(6) E', description: 'Solicitation of Sexual Engagement', fine: '$250.00', jailtime: '30', bail: '$1,500.00' },
    { number: '(6) F', description: 'Being Naked In Public', fine: '$50.00', jailtime: '5', bail: '-' },
    { number: '(6) G', description: 'Performs Any Sexual Action in Public', fine: '$150.00', jailtime: '15', bail: '$450.00' },
    { number: '(7) A', description: 'Initiating A Riot', fine: '$200.00', jailtime: '15', bail: '$600.00' },
    { number: '(7) B', description: 'Failing to Disperse After Lawfully Ordered by The Officials', fine: '$250.00', jailtime: '20', bail: '$1,000.00' },
    { number: '(7) C', description: 'Participating in a Riot', fine: '$75.00', jailtime: '10', bail: '$150.00' },
    { number: '(7) D', description: 'Spitting in Public Space', fine: '$150.00', jailtime: '-', bail: '-' },
    { number: '(7) E', description: 'Pee in Public', fine: '$150.00', jailtime: '-', bail: '-' },
    { number: '(7) F', description: 'Drunk in Public Space', fine: '$200.00', jailtime: '-', bail: '-' },
    { number: '(7) G', description: 'Vilification', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(7) H', description: 'Hate Speech', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(7) I', description: 'Vigilantism', fine: '$300.00', jailtime: '30', bail: '$1,800.00' },
    { number: '(7) J', description: 'Disturbing Public Peace', fine: '$100.00', jailtime: '15', bail: '$300.00' },
    { number: '(7) K', description: 'Brawl in Public Space', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(7) L', description: 'Accessories Disturbance', fine: '$150.00', jailtime: '-', bail: '-' },
    { number: '(7) M', description: 'Jaywalk', fine: '$50.00', jailtime: '-', bail: '-' },
    { number: '(7) N', description: 'Littering the Public Facility / Space', fine: '$250.00', jailtime: '-', bail: '-' },
    { number: '(7) O', description: 'Unlawful Assembly', fine: '$100.00', jailtime: '20', bail: '$400.00' },
    { number: '(7) P', description: 'Stalking', fine: '$200.00', jailtime: '20', bail: '$800.00' },
    { number: '(7) Q', description: 'Public Intoxication', fine: '$250.00', jailtime: '10', bail: '$500.00' },
    { number: '(7) R', description: 'Animal Abuse', fine: '$500.00', jailtime: '20', bail: '$2,000.00' },
    { number: '(7) S', description: 'Animal Cruelty', fine: '$300.00', jailtime: '-', bail: '-' },
    { number: '(8) A', description: 'Obstruction of Justice', fine: '$30.00', jailtime: '15', bail: '$90.00' },
    { number: '(8) B', description: 'Abusing Government Hotline (Ex : 911, 555, Etc)', fine: '$100.00', jailtime: '10', bail: '$200.00' },
    { number: '(8) C', description: 'Governments Attribute', fine: '$100.00', jailtime: '60', bail: '$1,200.00' },
    { number: '(8) D', description: 'Impersonating Government Staff', fine: '$100.00', jailtime: '60', bail: '$1,200.00' },
    { number: '(8) E', description: 'Attempting to Bribe or Corrupt Any Public Officials', fine: '$200.00', jailtime: '15', bail: '$600.00' },
    { number: '(8) F', description: 'Attempting to Bribe, Corrupt or Prevent Any Crime\'s Witnesses to Step Out and Give Out Information to Law Enforcers', fine: '$60.00', jailtime: '10', bail: '$120.00' },
    { number: '(8) G', description: 'Making a False Report', fine: '$200.00', jailtime: '20', bail: '$800.00' },
    { number: '(8) H', description: 'Giving False Information to the Police Officials', fine: '$125.00', jailtime: '20', bail: '-' },
    { number: '(8) I', description: 'Perjury', fine: '$500.00', jailtime: '20', bail: '$2,000.00' },
    { number: '(8) J', description: 'Assaulting on LEO', fine: '$150.00', jailtime: '40', bail: '$1,200.00' },
    { number: '(8) K', description: 'Attempted Murdering A Public Officials', fine: '$500.00', jailtime: '60', bail: '$6,000.00' },
    { number: '(8) L', description: 'Murdering A Public Officials', fine: '$600.00', jailtime: '70', bail: '$8,400.00' },
    { number: '(8) M', description: 'Harbouring Criminals', fine: '$250.00', jailtime: '30', bail: '$1,500.00' },
    { number: '(8) N', description: 'Fraud / Scam', fine: '$250.00', jailtime: '20', bail: '$1,000.00' },
    { number: '(8) O', description: 'Forgery', fine: '$500.00', jailtime: '30', bail: '$3,000.00' },
    { number: '(8) P', description: 'Corruption', fine: '$5,000.00', jailtime: '300', bail: '$10,000.00' },
    { number: '(9) A', description: 'Trespassing', fine: '$300.00', jailtime: '5', bail: '-' },
    { number: '(9) B', description: 'Trespassing Government Property', fine: '$100.00', jailtime: '20', bail: '$400.00' },
    { number: '(9) C', description: 'Vandalism', fine: '$250.00', jailtime: '15', bail: '$450.00' },
    { number: '(9) D', description: 'Arson', fine: '$250.00', jailtime: '30', bail: '$1,500.00' },
    { number: '(9) E', description: 'Extortion', fine: '$150.00', jailtime: '20', bail: '$600.00' },
    { number: '(9) F', description: 'Using Property As Illegal Distribution', fine: '$300.00', jailtime: '60', bail: '$3,600.00' },
    { number: 'STANDARD', description: 'STANDART ARREST WARRANT', fine: '-', jailtime: '-', bail: '-' },
    { number: 'SPECIAL', description: 'SPECIAL ARREST WARRANT', fine: '-', jailtime: '-', bail: '-' },
    { number: 'DB', description: 'DB TARGET', fine: '-', jailtime: '-', bail: '-' },
];

const searchInput = document.getElementById('searchCharge');
const playerIdInput = document.getElementById('playerId');
const vehicleIdInput = document.getElementById('vehicleId');
const chargesTableBody = document.getElementById('chargesTable').querySelector('tbody');
const addedChargesTableBody = document.getElementById('addedChargesTable').querySelector('tbody');

// Function to get display number
function getDisplayNumber(number) {
    return number;
}

// Function to get charge type
function getChargeType(number) {
    const ticketCharges = [
        '(1) A', '(1) A. 1', '(1) A. 2', '(1) A. 3', '(1) A. 4', '(1) A. 5', '(1) A. 6', '(1) A. 7', '(1) A. 8', '(1) A. 9',
        '(1) H', '(1) I', '(1) J', '(1) K', '(1) Q', '(1) S', '(1) T', '(1) U', '(1) V',
        '(7) D', '(7) E', '(7) F', '(7) L', '(7) M', '(7) N', '(7) S'
    ];
    const tagCharges = [
        '(2) A', '(2) B', '(2) C', '(2) E', '(4) E', '(4) E. 2', 'STANDARD', 'SPECIAL', 'DB'
    ];

    if (ticketCharges.includes(number)) {
        return 'Ticket';
    } else if (tagCharges.includes(number)) {
        return 'Tag';
    } else {
        return 'Crime';
    }
}

// Function to check if a charge is already added
function isChargeAdded(number) {
    const rows = addedChargesTableBody.querySelectorAll('tr');
    const displayNumber = getDisplayNumber(number);
    for (let row of rows) {
        if (row.cells[0].textContent === displayNumber) {
            return true;
        }
    }
    return false;
}

// Function to populate the charges table
function populateChargesTable(filteredCharges = charges) {
    chargesTableBody.innerHTML = '';
    filteredCharges.forEach(charge => {
        const isAdded = isChargeAdded(charge.number);
        const buttonClass = isAdded ? 'added-btn' : '';
        const displayNumber = getDisplayNumber(charge.number);
        const type = getChargeType(charge.number);
        const typeClass = `type-${type.toLowerCase()}`;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${displayNumber}</td>
            <td>${charge.description}</td>
            <td class="${typeClass}">${type}</td>
            <td>${charge.jailtime}</td>
            <td>${charge.fine}</td>
            <td>${charge.bail}</td>
            <td>
                <button class="${buttonClass}" onclick="addCharge('${charge.number}', '${charge.description}', '${charge.fine}', '${charge.jailtime}', '${charge.bail}')">Add</button>
                <button onclick="copyNumber('${displayNumber}')">Copy #</button>
                <button onclick="copyDescription('${charge.description}')">Copy Description</button>
            </td>
        `;
        chargesTableBody.appendChild(row);
    });
}

// Function to get code number for display
function getCodeNumber(number) {
    return number.replace(/[\(\)\s\.]/g, '');
}

// Function to add charge to the added charges table
function addCharge(number, description, fine, jailtime, bail) {
    if (isChargeAdded(number)) {
        return; // Do nothing if already added
    }
    const displayNumber = getDisplayNumber(number);
    const type = getChargeType(number);
    const typeClass = `type-${type.toLowerCase()}`;
    const row = document.createElement('tr');
    row.className = typeClass;
    row.innerHTML = `
        <td>${displayNumber}</td>
        <td>${description}</td>
        <td>${type}</td>
        <td>${jailtime}</td>
        <td>${fine}</td>
        <td>${bail}</td>
        <td>
            <button class="copy-btn" onclick="copyCharge('${number}', '${description}', '${type}', '${fine}')">Copy</button>
            <button class="copy-imp-btn" onclick="copyImpoundCommand('${number}', '${description}')">Copy Impound</button>
            <button class="remove-btn" onclick="removeCharge(this)">Remove</button>
        </td>
    `;
    addedChargesTableBody.appendChild(row);
    sortAddedChargesTable();
    updateCodeAndCommand();
    filterCharges(); // Update the search table to reflect the added charge
}

// Function to filter charges based on search input
function filterCharges() {
    const searchTerm = searchInput.value.trim();
    let filteredCharges = [];

    if (searchTerm === '') {
        // If search box is empty, show all charges
        filteredCharges = charges;
    } else {
        // Split search terms by comma and trim
        const searchTerms = searchTerm.split(',').map(term => term.trim().toLowerCase());

        // Filter charges that match any of the search terms exactly
        filteredCharges = charges.filter(charge => {
            const codeNumber = getCodeNumber(charge.number).toLowerCase();
            return searchTerms.includes(codeNumber);
        });
    }

    populateChargesTable(filteredCharges);

    // Show "Add All" button if multiple charges are searched
    const addAllContainer = document.getElementById('addAllContainer');
    if (searchTerm !== '' && searchTerm.includes(',')) {
        addAllContainer.style.display = 'block';
    } else {
        addAllContainer.style.display = 'none';
    }
}

// Function to add all visible charges
function addAllCharges() {
    const rows = chargesTableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const number = cells[0].textContent;
        const description = cells[1].textContent;
        const fine = cells[4].textContent;
        const jailtime = cells[3].textContent;
        const bail = cells[5].textContent;
        addCharge(number, description, fine, jailtime, bail);
    });
}

// Function to copy charge command
function copyCharge(number, description, type, fine) {
    const playerId = document.getElementById('playerId').value || '0';
    let command;
    if (type === 'Ticket') {
        // Parse the fine as a number to remove currency symbols and decimals
        const ticketFine = parseFloat(fine.replace(/[$,]/g, '')).toString();
        command = `/ticket ${playerId} ${ticketFine} ${number}. ${description}`;
    } else {
        if(number === 'STANDARD' || number === 'SPECIAL' || number === 'DB') {
            command = `/su ${playerId} ${description}`;
        }
        else
        {
            command = `/su ${playerId} ${number}. ${description}`;
        }
    }
    navigator.clipboard.writeText(command);
}

// Function to sort the added charges table by the first column
function sortAddedChargesTable() {
    const rows = Array.from(addedChargesTableBody.querySelectorAll('tr'));
    rows.sort((a, b) => {
        const aText = a.cells[0].textContent;
        const bText = b.cells[0].textContent;
        return aText.localeCompare(bText);
    });
    // Re-append rows in sorted order
    rows.forEach(row => addedChargesTableBody.appendChild(row));
}

// Function to remove charge from the added charges table
function removeCharge(button) {
    const row = button.closest('tr');
    row.remove();
    sortAddedChargesTable();
    updateCodeAndCommand();
    filterCharges(); // Update the search table to reflect the removed charge
}

// Function to update Code and Command arrest
function updateCodeAndCommand() {
    const rows = addedChargesTableBody.querySelectorAll('tr');
    const chargeNumbers = [];
    const codeNumbers = [];
    let totalFine = 0;
    let totalJailtime = 0;
    let totalBail = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        chargeNumbers.push(cells[0].textContent);
        // Remove parentheses, spaces, and dots for code display (1AX format)
        codeNumbers.push(cells[0].textContent.replace(/[\(\)\s\.]/g, ''));
        // Only include Crime type charges in arrest command totals
        if (row.className.includes('type-crime')) {
            const jailtimeValue = cells[3].textContent.replace(' days', '');
            totalJailtime += jailtimeValue === '-' ? 0 : parseInt(jailtimeValue) || 0;
            totalFine += parseInt(cells[4].textContent.replace(/[$,]/g, '')) || 0;
            const bailValue = cells[5].textContent.replace(/[$,]/g, '');
            totalBail += bailValue === '-' ? 0 : parseInt(bailValue) || 0;
        }
    });

    const codeElement = document.getElementById('code');
    const commandElement = document.getElementById('command');
    const impoundCommandElement = document.getElementById('impoundCommand');
    const playerId = document.getElementById('playerId').value || '0';
    const vehicleId = document.getElementById('vehicleId').value || '0';

    codeElement.textContent = codeNumbers.join(', ');
    commandElement.textContent = `/arrest ${playerId} ${totalJailtime} ${totalFine} ${totalBail}`;
    impoundCommandElement.textContent = `/impound ${vehicleId} (...)`;
}

// Function to copy the code
function copyCode() {
    const codeElement = document.getElementById('code');
    const code = codeElement.textContent;
    navigator.clipboard.writeText(code);
}

// Function to copy the command arrest
function copyCommand() {
    const commandElement = document.getElementById('command');
    const command = commandElement.textContent;
    navigator.clipboard.writeText(command);
}

// Function to copy the number
function copyNumber(number) {
    navigator.clipboard.writeText(number);
}

// Function to copy the description
function copyDescription(description) {
    navigator.clipboard.writeText(description);
}

// Function to copy the impound command
function copyImpoundCommand(number,description) {
    const vehicleId = document.getElementById('vehicleId').value || '0';
    navigator.clipboard.writeText(`/impound ${vehicleId} ${number}. ${description}`);
}

// Event listener for search input
searchInput.addEventListener('input', filterCharges);

// Event listener for player ID input to update command
playerIdInput.addEventListener('input', updateCodeAndCommand);
vehicleIdInput.addEventListener('input', updateCodeAndCommand);

// Initial population of the charges table
populateChargesTable();

// Initial update of Code and Command arrest
updateCodeAndCommand();
