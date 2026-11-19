const caseid = document.getElementById('caseid');

function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

function toggleDropdownRank() {
    document.getElementById("dropdownContent-rank").classList.toggle("show");
}

function selectOption(option, id) {
    document.getElementById(id).textContent = option;
    document.getElementById("dropdownContent").classList.remove("show");
    document.getElementById("dropdownContent-rank").classList.remove("show");
    UpdateResultsOutputCode();
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function copyBBCode()
{
    navigator.clipboard.writeText(document.getElementById('output-code').textContent);
}

function copyTopicName()
{
    navigator.clipboard.writeText(document.getElementById('output-subject').textContent);
}

function addEvidenceType(type) {
    const container = document.getElementById(`${type}`);
    const newGroup = document.createElement('div');
    newGroup.className = 'input-group-box';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Paste your image link, don\'t use [img][/img]">';
    container.appendChild(newGroup);
    updateEvidenceType(type);
    UpdateResultsOutputCode();
}

function removeEvidenceType(type)
{
    const container = document.getElementById(`${type}`);
    const inputGroups = container.querySelectorAll('.input-group-box');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateEvidenceType(type);
    }
    UpdateResultsOutputCode();
}

function updateEvidenceType(type) {
    const container = document.getElementById(`${type}`);
    const inputGroups = container.querySelectorAll('.input-group-box');
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', `<button class="add-btn" onclick="addEvidenceType('${type}')">+</button>`);
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', `<button class="remove-btn" onclick="removeEvidenceType('${type}')">-</button>`);
            }
        }
    });
}

function getDynamicList(containerId, placeholder = 'Unknown') {
    const container = document.getElementById(containerId);
    const inputs = container.querySelectorAll('input');
    const values = Array.from(inputs).map(input => input.value.trim()).filter(val => val !== '');
    return values.length > 0 ? values.map(val => `[img]${val}[/img]`).join('\n') : `${placeholder}`;
}

function UpdateResultsOutputCode()
{
    const officerIssuer = document.getElementById('officer-issuer');
    const vehicleOwner = document.getElementById('vehicle-owner');
    const vehicleColor = document.getElementById('vehicle-color');
    const vehicleModel = document.getElementById('vehicle-model');
    const vehiclePlate = document.getElementById('vehicle-plate');
    const impoundDate = document.getElementById('impound-date');
    const chronology = document.getElementById('chronology');
    const vehicleCategory = document.getElementById('vehicle-category');
    const vehicleProof = document.getElementById('vehicle-proof');
    const informationNote = document.getElementById('information-note');
    const vehicleFine = document.getElementById('vehicle-fine');
    const Rank = document.getElementById('rank');
    function formatDate(dateValue) {
        if (!dateValue) return 'None';
        const [year, month, day] = dateValue.split('-');
        return `${day}/${month}/${year}`;
    }
    document.getElementById('output-subject').textContent = `[IMPOUND] ${vehicleColor.value === '' ? 'N/A' : `${vehicleColor.value}`} ${vehicleModel.value === '' ? 'N/A' : `${vehicleModel.value}`} - ${vehiclePlate.value === '' ? 'No Plate' : `${vehiclePlate.value}`} - ${vehicleOwner.value === '' ? 'N/A' : `${vehicleOwner.value}`}`;
    document.getElementById('output-code').textContent = `[divbox=white][hr][/hr]\n[center][size=200]Impounded Vehicle Form[/size][/center]\n[hr][/hr]\n[center][img]https://i.imgur.com/sgpXana.png[/img][/center]\n[hr][/hr]\n[center][b][i][u][size=130] SECTION I - IMPOUND INFORMATION[/size][/u][/i][/b][/center]\n[hr][/hr]\n[b] [color=#000000] Impound Officer:[/color][/b] ${officerIssuer.value === '' ? 'N/A' : `${officerIssuer.value}`}\n[b] [color=#000000] Vehicle's owner:[/color][/b] ${vehicleOwner.value === '' ? 'N/A' : `${vehicleOwner.value}`}\n[b] [color=#000000] Color:[/color][/b] ${vehicleColor.value === '' ? 'N/A' : `${vehicleColor.value}`}\n[b] [color=#000000] Model:[/color][/b] ${vehicleModel.value === '' ? 'N/A' : `${vehicleModel.value}`}\n[b] [color=#000000] Plate Number:[/color][/b] ${vehiclePlate.value === '' ? 'No Plate' : `${vehiclePlate.value}`}\n[b] [color=#000000] Date of impound:[/color][/b] ${formatDate(impoundDate.value)}\n[b] [color=#000000] Reason:[/b] ${chronology.value === '' ? 'N/A' : `${chronology.value}`}\n[b] [color=#000000] Category:[/b] ${vehicleCategory.textContent === 'Pilih Opsi' ? 'N/A' : `${vehicleCategory.textContent}`}\n[b] [color=#000000] Proof:[/color][/b] [spoiler]${vehicleProof.value === '' ? 'N/A' : `[img]${vehicleProof.value}[/img]`}[/spoiler]\n[size=85][b]Note:[/b] [i]${informationNote.value === '' ? 'N/A' : `${informationNote.value}`}\n[/i][/size][/divbox]\n\n[divbox=white]\n[hr][/hr]\n[center][b][i][u][size=130] SECTION II - BAILOUT FINES[/size][/u][/i][/b][/center]\n[hr][/hr]\n[b][size=130]A[/size].[/b] This form is to inform how much the vehicle owner will pay the bail for his vehicle, and this form is officially written and counted under the [b]Traffic Enforcement Unit[/b] vehicle penal codes written in section I.\n[b][size=130]B[/size].[/b] The written of total fines for the bailout has been counted properly, there's no mistake about the fines of bailing out.\n[b]Total must be paid :[/b] [color=green]$[/color]${vehicleFine.value === 'Pilih Opsi' ? '0' : `${vehicleFine.value}`}\n[right]Sign,\n[b]${Rank.textContent === 'Pilih Opsi' ? 'N/A' : `${Rank.textContent}`}[/b], [i]${officerIssuer.value === '' ? 'N/A' : `${officerIssuer.value}`}[/i][/right][/divbox]`;
}

function redirectTo(url)
{
    window.location.href = url;
}

document.getElementById('officer-issuer').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('vehicle-owner').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('vehicle-color').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('vehicle-model').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('vehicle-plate').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('impound-date').addEventListener('change', UpdateResultsOutputCode);
document.getElementById('chronology').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('vehicle-category').addEventListener('change', UpdateResultsOutputCode);
document.getElementById('vehicle-proof').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('information-note').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('vehicle-fine').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('rank').addEventListener('change', UpdateResultsOutputCode);
UpdateResultsOutputCode();
