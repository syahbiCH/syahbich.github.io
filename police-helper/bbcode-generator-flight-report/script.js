function toggleDropdown()
{
    document.getElementById("dropdownContent").classList.toggle("show");
}

function toggleDropdownUniform()
{
    document.getElementById("dropdownContent-uniform").classList.toggle("show");
}

function toggleDropdownGender()
{
    var content = document.getElementById("dropdownContent-gender");
    content.classList.toggle("show");
}

function toggleDropdownClothes()
{
    var content = document.getElementById("dropdownContent-clothes");
    content.classList.toggle("show");
}

function toggleDetectiveField()
{
    const detectiveFields = document.getElementById('detective-target-fields');
    const warrantType = document.getElementById('warrant-type').textContent;
    if(warrantType === 'Detective Target')
    {
        detectiveFields.style.display = 'block';
    }
    else
    {
        detectiveFields.style.display = 'none';
    }
}

function selectOption(option, id) {
    document.getElementById(id).textContent = option;
    UpdateResultsOutputCode();
    if (id === 'gender') {
        document.getElementById('suspect-clothes').textContent = 'Pilih Opsi';
        const selectedImageDiv = document.getElementById('selected-clothes-image');
        selectedImageDiv.innerHTML = '';
        document.getElementById('dropdownContent-clothes').innerHTML = '';
    }
    if(id === 'clothes') {
        const selectedImageDiv = document.getElementById('selected-clothes-image');
        selectedImageDiv.innerHTML = `<img src="skin/${option}" alt="${option}" style="width:100px; height:100px; border:1px solid #ccc;">`;
        document.getElementById('dropdownContent-clothes').innerHTML = '';
    }
}

window.onclick = function(event)
{
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for(var i = 0; i < dropdowns.length; i++) {
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

function getDynamicList(containerId, placeholder = 'Unknown') {
    const container = document.getElementById(containerId);
    const inputs = container.querySelectorAll('input');
    const values = Array.from(inputs).map(input => input.value.trim()).filter(val => val !== '');
    return values.length > 0 ? values.map(val => `[img]${val}[/img]`).join('\n') : `${placeholder}`;
}

function formatDate(warrantDate)
{
    if (!warrantDate) return 'None';
    const [year, month, day] = warrantDate.split('-');
    return `${day}/${month}/${year}`;
}

function getSkinLinkByVariable(skinDir)
{
    if(skinDir === 'IC6')
    {
        return 'https://i.imgur.com/zYtvNBt.jpg';
    }
    const [sFolder, sName] = skinDir.split('/');
    let skinsArray, linksArray;
    if(gender.textContent === 'Male')
    {
        skinsArray = maleSkins;
        linksArray = maleSkinsLink;
    }
    else
    {
        skinsArray = femaleSkins;
        linksArray = femaleSkinsLink;
    }
    const index = skinsArray.findIndex(skin => skin.replace('.jpg', '') === sName);
    return index !== -1 ? linksArray[index] : null;
}

function UpdateResultsOutputCode() {
    const officerName = document.getElementById('officer-name');
    const Date = document.getElementById('date');
    const reportNumber = document.getElementById('report-number');
    const Duration = document.getElementById('duration');
    const Callsign = document.getElementById('callsign');
    const patrolPartner = document.getElementById('patrol-partner');
    const EvidenceOne = getDynamicList('evidence-air-one', 'N/A');
    const EvidenceTwo = getDynamicList('evidence-air-two', 'N/A');
    const EvidenceThree = getDynamicList('evidence-air-three', 'N/A');
    function formatDate(dateValue) {
        if (!dateValue) return 'None';
        const [year, month, day] = dateValue.split('-');
        return `${day}/${month}/${year}`;
    }
    document.getElementById('output-code').textContent = `[divbox=transparent]\n[img]https://i.postimg.cc/sxqYTzTd/1nJzmTG.png[/img]\n[hr][/hr]\n[divbox=black][center][color=#FFFFFF][b]OFFICER INFORMATION[/b][/color][/center][/divbox]\n[table]\n[tr]\n[cell][size=90][b]OFFICER NAME: [/b]\n${officerName.value === '' ? 'N/A' : `${officerName.value}`}\n[/size]\n\n[cell][size=90][b]DATE: [/b]\n${formatDate(Date.value)}\n[/size]\n\n[cell][size=90][b]REPORT NUMBER: [/b]\n${reportNumber.value === '' ? 'N/A' : `${reportNumber.value}`}\n[/size]\n\n[tr]\n[cell][size=90][b]DURATION: [/b]\n${Duration.value === '' ? 'N/A' : `${Duration.value}`}\n[/size]\n\n[cell][size=90][b]UNIT CALLSIGN: [/b]\n${Callsign.value === '' ? 'N/A' : `${Callsign.value}`}\n[/size]\n\n[cell][size=90][b]PATROL PARTNER: [/b]\n${patrolPartner.value === '' ? 'N/A' : `${patrolPartner.value}`}\n[/size]\n\n[/table][space]\n[divbox=black][center][color=#FFFFFF][b]OFFICER ACTIVITY [/b][/color][/center][/divbox]\n[table]\n[tr]\n[cell][size=90][b]TAKE OFF AND PROOF UNIT ON FIELD ((/TEAM ON))[/b]\n[spoiler]${EvidenceOne}[/spoiler]\n\n[b]NOTABLE SITUATION (OPTIONAL)[/b]\n[spoiler]${EvidenceTwo}[/spoiler]\n\n[b]LANDING[/b]\n[spoiler]${EvidenceThree}[/spoiler]\n[/table]\n\n[/divbox]`;
}

function addEvidenceOneInput() {
    const container = document.getElementById('evidence-air-one');
    const newGroup = document.createElement('div');
    newGroup.className = 'input-group-box';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Paste your image link, don\'t use [img][/img]">';
    container.appendChild(newGroup);
    updateEvidenceOneButtons();
    UpdateResultsOutputCode();
}

function removeEvidenceOneInput()
{
    const container = document.getElementById('evidence-air-one');
    const inputGroups = container.querySelectorAll('.input-group-box');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateEvidenceOneButtons();
    }
    UpdateResultsOutputCode();
}

function addEvidenceTwoInput() {
    const container = document.getElementById('evidence-air-two');
    const newGroup = document.createElement('div');
    newGroup.className = 'input-group-box';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Paste your image link, don\'t use [img][/img]">';
    container.appendChild(newGroup);
    updateEvidenceTwoButtons();
    UpdateResultsOutputCode();
}

function removeEvidenceTwoInput()
{
    const container = document.getElementById('evidence-air-two');
    const inputGroups = container.querySelectorAll('.input-group-box');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateEvidenceTwoButtons();
    }
    UpdateResultsOutputCode();
}

function addEvidenceThreeInput() {
    const container = document.getElementById('evidence-air-three');
    const newGroup = document.createElement('div');
    newGroup.className = 'input-group-box';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Paste your image link, don\'t use [img][/img]">';
    container.appendChild(newGroup);
    updateEvidenceThreeButtons();
    UpdateResultsOutputCode();
}

function removeEvidenceThreeInput()
{
    const container = document.getElementById('evidence-air-three');
    const inputGroups = container.querySelectorAll('.input-group-box');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateEvidenceThreeButtons();
    }
    UpdateResultsOutputCode();
}

function updateEvidenceOneButtons() {
    const container = document.getElementById('evidence-air-one');
    const inputGroups = container.querySelectorAll('.input-group-box');
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addEvidenceOneInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeEvidenceOneInput()">-</button>');
            }
        }
    });
}

function updateEvidenceTwoButtons() {
    const container = document.getElementById('evidence-air-two');
    const inputGroups = container.querySelectorAll('.input-group-box');
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addEvidenceTwoInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeEvidenceTwoInput()">-</button>');
            }
        }
    });
}

function updateEvidenceThreeButtons() {
    const container = document.getElementById('evidence-air-three');
    const inputGroups = container.querySelectorAll('.input-group-box');
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addEvidenceThreeInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeEvidenceThreeInput()">-</button>');
            }
        }
    });
}

function toggleDropdownClothes()
{
    const dropdown = document.getElementById("dropdownContent-clothes");
    const gender = document.getElementById('gender').textContent;
    if(gender !== 'Male' && gender !== 'Female')
    {
        alert('Please select gender first.');
        return;
    }
    populateClothes(gender);
    dropdown.classList.toggle("show");
}

function closeDropdownClothes()
{
    document.getElementById("dropdownContent-clothes").classList.remove("show");
}

function populateClothes(gender)
{
    const dropdown = document.getElementById('dropdownContent-clothes');
    let html = '<a onclick="selectOption(\'IC6\',\'clothes\')"><img src="skin/(1) IC6.jpg" width="75" height="75"> IC6</a>';
    if(gender === 'Male')
    {
        html += maleSkins.map(skin => {
            const skinName = skin.replace('.jpg', '');
            return `<a onclick="selectOption('skin/${skinName}','clothes')"><img src="skin/${skin}" width="75" height="75"> ${skinName}</a>`;
        }).join('');
    }
    else
    {
        html += femaleSkins.map(skin => {
            const skinName = skin.replace('.jpg', '');
            return `<a onclick="selectOption('skin/${skinName}','clothes')"><img src="skin/${skin}" width="75" height="75"> ${skinName}</a>`;
        }).join('');
    }
    dropdown.innerHTML = html;
}

function changeEvidenceInput(type)
{
    const container = document.getElementById('evidence-container');
    container.innerHTML = '';
    if(type === 'Chatlog')
    {
        container.innerHTML = '<textarea class="input-box" id="evidence" placeholder="Enter chatlog" rows="8"></textarea>';
    }
    else
    {
        container.innerHTML = '<input class="input-box" type="text" id="evidence" placeholder="Enter URL">';
    }
    evidence = document.getElementById('evidence');
}

function redirectTo(url)
{
    window.location.href = url;
}

// Tambahkan event listener untuk semua input yang relevan
document.getElementById('officer-name').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('date').addEventListener('change', UpdateResultsOutputCode);
document.getElementById('report-number').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('duration').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('callsign').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('patrol-partner').addEventListener('input', UpdateResultsOutputCode);

// Event delegation untuk container dinamis (agar update saat input di dalamnya berubah)
document.getElementById('evidence-air-one').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('evidence-air-two').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('evidence-air-three').addEventListener('input', UpdateResultsOutputCode);

// Panggil update awal
updateEvidenceOneButtons();
updateEvidenceTwoButtons();
updateEvidenceThreeButtons();
UpdateResultsOutputCode();
