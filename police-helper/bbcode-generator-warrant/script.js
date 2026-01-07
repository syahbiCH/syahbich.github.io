const caseid = document.getElementById('caseid');
const warrantDate = document.getElementById('warrant-date');
const chronology = document.getElementById('chronology');
const suspect = document.getElementById('suspect');
const gender = document.getElementById('gender');
const suspectClothes = document.getElementById('suspect-clothes');
const descriptionSuspect = document.getElementById('description-suspect');
const phoneNumber = document.getElementById('phone-number');
const infoSuspect = document.getElementById('info-suspect');
const evidenceType = document.getElementById('evidence-type');
const evidence = document.getElementById('evidence');

function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

function toggleDropdownUniform() {
    document.getElementById("dropdownContent-uniform").classList.toggle("show");
}

function toggleDropdownGender() {
    var content = document.getElementById("dropdownContent-gender");
    content.classList.toggle("show");
}

function toggleDropdownClothes() {
    var content = document.getElementById("dropdownContent-clothes");
    content.classList.toggle("show");
}

function selectOption(option, id) {
    document.getElementById(id).textContent = option;
    document.getElementById("dropdownContent").classList.remove("show");
    document.getElementById("dropdownContent-uniform").classList.remove("show");
    document.getElementById("dropdownContent-clothes").classList.remove("show");
    document.getElementById("dropdownContent-evidence").classList.remove("show");
    document.getElementById("dropdownContent-gender").classList.remove("show");
    if (id === 'gender') {
        // Reset suspect clothes when gender changes
        document.getElementById('suspect-clothes').textContent = 'Pilih Opsi';
        const selectedImageDiv = document.getElementById('selected-clothes-image');
        selectedImageDiv.innerHTML = '';
        document.getElementById('dropdownContent-clothes').innerHTML = '';
    }
    if (id === 'clothes') {
        const selectedImageDiv = document.getElementById('selected-clothes-image');
        selectedImageDiv.innerHTML = `<img src="skin/${option}" alt="${option}" style="width:100px; height:100px; border:1px solid #ccc;">`;
        document.getElementById('dropdownContent-clothes').innerHTML = '';
    }
    if (id === 'warrant-type') {
        const detectiveFields = document.getElementById('detective-target-fields');
        if (option === 'Detective Target') {
            detectiveFields.style.display = 'block';
        } else {
            detectiveFields.style.display = 'none';
        }
    }
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

function UpdateResultsOutputCode()
{
    const warrantType = document.getElementById('warrant-type').textContent;
    document.getElementById('output-subject').textContent = `${warrantType === '' ? '[None]' : `[${warrantType}]`}`;
}

function addOfficerInput() {
    const container = document.getElementById('officer-involved-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Officer Name">';
    container.appendChild(newGroup);
    updateOfficerButtons();
}

function removeOfficerInput()
{
    const container = document.getElementById('officer-involved-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateOfficerButtons();
    }
}

function updateOfficerButtons() {
    const container = document.getElementById('officer-involved-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    inputGroups.forEach((group, index) => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
        if(index === inputGroups.length - 1)
        {
            group.innerHTML += '<button class="add-btn" onclick="addOfficerInput()">+</button>';
            if(inputGroups.length > 1)
            {
                group.innerHTML += '<button class="remove-btn" onclick="removeOfficerInput()">-</button>';
            }
        }
    });
}

function addVehicleInput() {
    const container = document.getElementById('suspect-vehicles-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Vehicle description">';
    container.appendChild(newGroup);
    updateVehicleButtons();
}

function removeVehicleInput() {
    const container = document.getElementById('suspect-vehicles-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    if (inputGroups.length > 1) {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateVehicleButtons();
    }
}

function updateVehicleButtons() {
    const container = document.getElementById('suspect-vehicles-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    inputGroups.forEach((group, index) => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
        if (index === inputGroups.length - 1) {
            group.innerHTML += '<button class="add-btn" onclick="addVehicleInput()">+</button>';
            if (inputGroups.length > 1) {
                group.innerHTML += '<button class="remove-btn" onclick="removeVehicleInput()">-</button>';
            }
        }
    });
}

function addAddressInput() {
    const container = document.getElementById('suspect-home-address-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Home address">';
    container.appendChild(newGroup);
    updateAddressButtons();
}

function removeAddressInput() {
    const container = document.getElementById('suspect-home-address-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    if (inputGroups.length > 1) {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateAddressButtons();
    }
}

function updateAddressButtons() {
    const container = document.getElementById('suspect-home-address-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    inputGroups.forEach((group, index) => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
        if (index === inputGroups.length - 1) {
            group.innerHTML += '<button class="add-btn" onclick="addAddressInput()">+</button>';
            if (inputGroups.length > 1) {
                group.innerHTML += '<button class="remove-btn" onclick="removeAddressInput()">-</button>';
            }
        }
    });
}

function toggleDropdownClothes() {
    const dropdown = document.getElementById("dropdownContent-clothes");
    const gender = document.getElementById('gender').textContent;
    if (gender !== 'Male' && gender !== 'Female') {
        alert('Please select gender first.');
        return;
    }
    populateClothes(gender);
    dropdown.classList.toggle("show");
}

function toggleDropdownEvidence() {
    document.getElementById("dropdownContent-evidence").classList.toggle("show");
}

function closeDropdownClothes() {
    document.getElementById("dropdownContent-clothes").classList.remove("show");
}

function populateClothes(gender) {
    const dropdown = document.getElementById('dropdownContent-clothes');
    let html = '<a href="#" onclick="selectOption(\'IC6\',\'clothes\')"><img src="skin/(1) IC6.jpg" width="75" height="75"> IC6</a>';
    if (gender === 'Male') {
        html += maleSkins.map(skin => {
            const skinName = skin.replace('.jpg', '');
            return `<a href="#" onclick="selectOption('skin/${skinName}','clothes')"><img src="skin/${skin}" width="75" height="75"> ${skinName}</a>`;
        }).join('');
    } else {
        html += femaleSkins.map(skin => {
            const skinName = skin.replace('.jpg', '');
            return `<a href="#" onclick="selectOption('skin/${skinName}','clothes')"><img src="skin/${skin}" width="75" height="75"> ${skinName}</a>`;
        }).join('');
    }
    dropdown.innerHTML = html;
}

function changeEvidenceInput(type) {
    const container = document.getElementById('evidence-container');
    container.innerHTML = '';
    if (type === 'Chatlog') {
        container.innerHTML = '<textarea class="input-box" id="evidence" placeholder="Enter chatlog" rows="8"></textarea>';
    } else {
        container.innerHTML = '<input class="input-box" type="text" id="evidence" placeholder="Enter URL">';
    }
    // Reassign evidence variable
    evidence = document.getElementById('evidence');
}

function redirectTo(url)
{
    window.location.href = url;
}

// Define skin arrays
const maleSkins = [
    'male_1.jpg', 'male_2.jpg', 'male_3.jpg', 'male_10.jpg', 'male_11.jpg', 'male_12.jpg', 'male_13.jpg', 'male_14.jpg', 'male_15.jpg', 'male_16.jpg', 'male_17.jpg', 'male_18.jpg', 'male_19.jpg', 'male_20.jpg', 'male_21.jpg', 'male_22.jpg', 'male_23.jpg', 'male_24.jpg', 'male_25.jpg', 'male_26.jpg', 'male_27.jpg', 'male_28.jpg', 'male_29.jpg', 'male_30.jpg', 'male_31.jpg', 'male_100.jpg', 'male_101.jpg', 'male_102.jpg', 'male_103.jpg', 'male_104.jpg', 'male_105.jpg', 'male_106.jpg', 'male_107.jpg', 'male_108.jpg', 'male_109.jpg', 'male_110.jpg', 'male_111.jpg', 'male_112.jpg', 'male_113.jpg', 'male_114.jpg', 'male_115.jpg', 'male_116.jpg', 'male_117.jpg', 'male_118.jpg', 'male_119.jpg', 'male_120.jpg', 'male_121.jpg', 'male_122.jpg', 'male_123.jpg', 'male_124.jpg', 'male_125.jpg', 'male_126.jpg', 'male_127.jpg', 'male_128.jpg', 'male_129.jpg', 'male_130.jpg', 'male_131.jpg', 'male_132.jpg', 'male_133.jpg', 'male_134.jpg', 'male_135.jpg', 'male_136.jpg', 'male_137.jpg', 'male_138.jpg', 'male_139.jpg', 'male_140.jpg', 'male_141.jpg', 'male_142.jpg', 'male_143.jpg', 'male_144.jpg', 'male_145.jpg', 'male_146.jpg', 'male_147.jpg', 'male_148.jpg', 'male_149.jpg', 'male_150.jpg', 'male_151.jpg', 'male_152.jpg', 'male_153.jpg', 'male_154.jpg', 'male_155.jpg', 'male_156.jpg', 'male_157.jpg', 'male_158.jpg', 'male_159.jpg', 'male_160.jpg', 'male_161.jpg', 'male_162.jpg', 'male_163.jpg', 'male_164.jpg', 'male_165.jpg', 'male_166.jpg', 'male_167.jpg', 'male_168.jpg', 'male_169.jpg', 'male_170.jpg', 'male_171.jpg', 'male_172.jpg', 'male_173.jpg', 'male_174.jpg', 'male_175.jpg', 'male_176.jpg', 'male_177.jpg', 'male_178.jpg', 'male_179.jpg', 'male_180.jpg', 'male_181.jpg', 'male_182.jpg', 'male_183.jpg', 'male_184.jpg', 'male_185.jpg', 'male_186.jpg', 'male_187.jpg', 'male_188.jpg', 'male_189.jpg', 'male_190.jpg', 'male_191.jpg', 'male_192.jpg'
];
const femaleSkins = [
    'female_1.jpg', 'female_2.jpg', 'female_3.jpg', 'female_4.jpg', 'female_5.jpg', 'female_6.jpg', 'female_7.jpg', 'female_8.jpg', 'female_9.jpg', 'female_10.jpg', 'female_11.jpg', 'female_12.jpg', 'female_13.jpg', 'female_14.jpg', 'female_15.jpg', 'female_16.jpg', 'female_17.jpg', 'female_18.jpg', 'female_19.jpg', 'female_20.jpg', 'female_21.jpg', 'female_22.jpg', 'female_23.jpg', 'female_24.jpg', 'female_25.jpg', 'female_26.jpg', 'female_27.jpg', 'female_28.jpg', 'female_29.jpg', 'female_30.jpg', 'female_31.jpg', 'female_32.jpg', 'female_33.jpg', 'female_34.jpg', 'female_35.jpg', 'female_36.jpg', 'female_37.jpg', 'female_38.jpg', 'female_39.jpg', 'female_40.jpg', 'female_41.jpg', 'female_42.jpg', 'female_43.jpg', 'female_44.jpg', 'female_45.jpg', 'female_46.jpg', 'female_47.jpg', 'female_48.jpg', 'female_49.jpg', 'female_50.jpg', 'female_51.jpg', 'female_52.jpg', 'female_53.jpg', 'female_54.jpg', 'female_55.jpg', 'female_56.jpg', 'female_57.jpg', 'female_58.jpg', 'female_59.jpg', 'female_60.jpg', 'female_61.jpg', 'female_62.jpg', 'female_63.jpg', 'female_64.jpg', 'female_65.jpg', 'female_66.jpg', 'female_67.jpg', 'female_68.jpg', 'female_69.jpg', 'female_70.jpg', 'female_71.jpg', 'female_72.jpg', 'female_73.jpg', 'female_74.jpg', 'female_75.jpg', 'female_76.jpg', 'female_77.jpg', 'female_78.jpg', 'female_79.jpg', 'female_80.jpg', 'female_81.jpg'
];

// Event listeners
gender.addEventListener('input', () => {
    if (gender.value.toLowerCase() === 'male' || gender.value.toLowerCase() === 'female') {
        populateClothes(gender.value);
    }
});

evidenceType.addEventListener('change', () => {
    changeEvidenceInput(evidenceType.textContent);
});

updateOfficerButtons();
updateVehicleButtons();
updateAddressButtons();
document.getElementById('warrant-type').addEventListener('input',UpdateResultsOutputCode());
UpdateResultsOutputCode();
