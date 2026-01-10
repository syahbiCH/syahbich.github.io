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
    return values.length > 0 ? values.map(val => `[*] ${val}`).join('\n') : `[*] ${placeholder}`;
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

function addOfficerInput() {
    const container = document.getElementById('officer-involved-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Rank Firstname Lastname">';
    container.appendChild(newGroup);
    updateOfficerButtons();
    UpdateResultsOutputCode();
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
    UpdateResultsOutputCode();
}

function addChargeInput()
{
    const container = document.getElementById('suspect-charge-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Charge here">';
    container.appendChild(newGroup);
    updateChargeButtons();
    UpdateResultsOutputCode();
}

function addVehicleInput()
{
    const container = document.getElementById('suspect-vehicles-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Vehicle description">';
    container.appendChild(newGroup);
    updateVehicleButtons();
    UpdateResultsOutputCode();
}

function removeVehicleInput()
{
    const container = document.getElementById('suspect-vehicles-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateVehicleButtons();
    }
    UpdateResultsOutputCode();
}

function removeChargeInput()
{
    const container = document.getElementById('suspect-charge-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateChargeButtons();
    }
    UpdateResultsOutputCode();
}

function addAddressInput()
{
    const container = document.getElementById('suspect-home-address-container');
    const newGroup = document.createElement('div');
    newGroup.className = 'officer-input-group';
    newGroup.innerHTML = '<input class="input-box" type="text" placeholder="Home address">';
    container.appendChild(newGroup);
    updateAddressButtons();
    UpdateResultsOutputCode();
}

function removeAddressInput()
{
    const container = document.getElementById('suspect-home-address-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    if(inputGroups.length > 1)
    {
        container.removeChild(inputGroups[inputGroups.length - 1]);
        updateAddressButtons();
    }
    UpdateResultsOutputCode();
}

function UpdateResultsOutputCode() {
    toggleDetectiveField();
    const warrantType = document.getElementById('warrant-type').textContent;
    const suspectName = document.getElementById('suspect');
    const warrantDate = document.getElementById('warrant-date');
    const chronology = document.getElementById('chronology');
    const suspect = document.getElementById('suspect');
    const gender = document.getElementById('gender');
    const suspectClothes = document.getElementById('clothes');
    const descriptionSuspect = document.getElementById('description-suspect');
    const phoneNumber = document.getElementById('phone-number');
    const infoSuspect = document.getElementById('info-suspect');
    const evidence = document.getElementById('evidence');
    const officerList = getDynamicList('officer-involved-container', 'N/A');
    const chargeList = getDynamicList('suspect-charge-container','N/A');
    const vehicleList = warrantType === 'Detective Target' ? getDynamicList('suspect-vehicles-container', 'N/A') : '';
    const addressList = warrantType === 'Detective Target' ? getDynamicList('suspect-home-address-container', 'N/A') : '';
    document.getElementById('output-subject').textContent = `${warrantType === 'Pilih Opsi' ? '[None]' : `${warrantType === 'Standard Arrest Warrant' ? '[STANDARD ARREST WARRANT]' : `${warrantType === 'Special Arrest Warrant' ? '[SPECIAL ARREST WARRANT]' : `${warrantType === 'Detective Target' ? '[DB TARGET]' : '[None]'}`}`}`} ${suspectName.value === '' ? 'Firstname Lastname' : `${suspectName.value}`} [OPEN]`;
    if(warrantType === 'Detective Target')
    {
        document.getElementById('output-code').textContent = `[divbox=white][center][list][/list][img]https://i.imgur.com/ZjgyCyP.png[/img]\n[font=Times New Roman][size=150]ARREST WARRANT[/size][/font]\n[font=Times New Roman][size=150]San Andreas Police Department[/size][/font]\n[font=Times New Roman][size=100]CITY OF SAN ANDREAS * 219 CENTRAL HEADQUARTERS, PERSHING SQUARE * LOS SANTOS SA 97447[/size][/font]\n[hr][hr]\n[font=Times New Roman][size=120][b]OFFICIAL PUBLICATION OF ARREST WARRANT - CRIME ANALYSIS DETAILS[/b][/size][/font]\n[hr]\n[img]${getSkinLinkByVariable(suspectClothes.textContent)}[/img]\n[b]Description of suspect:[/b]\n[i]${descriptionSuspect.value === '' ? 'N/A' : `${descriptionSuspect.value}`}[/i]\n[/center]\n[hr]\n[list=1]\n[*][b]Type of Warrant[/b] ${warrantType === 'Pilih Opsi' ? 'N/A' : `${warrantType}`}\n[*][b]Full name of suspect[/b]: ${suspect.value === '' ? 'N/A' : `${suspect.value}`}\n[*][b]Number of phone[/b]: ${phoneNumber.value === '' ? 'N/A' : `${phoneNumber.value}`}\n[*][b]Gender[/b]: ${gender.textContent === 'Pilih Opsi' ? 'N/A' : `${gender.textContent}`}\n[*][b]All Suspect Vehicles[/b]:\n[list]\n${vehicleList}\n[/list]\n[*][b]Suspect's Home Address[/b]:\n[list]\n${addressList}\n[/list]\n[*][b]Information about suspect[/b]:\n[secspoiler=Mobile Data Center]\n[img]${infoSuspect.value}[/img][/secspoiler]\n[*][b]Evidences[/b]:\n[secspoiler=Video recording or conversation]\n${evidence.value}\n[/secspoiler]\n[*][b]Charges[/b]:\n[list]\n${chargeList}\n[/list]\n[*][b]Date and Time[/b]: ${formatDate(warrantDate.value)}\n[*][b]Chronology[/b]:\n[quote][justify]\n${chronology.value === '' ? 'N/A' : `${chronology.value}`}\n[/justify][/quote]\n[*][b]Officer involved[/b]:\n[list]\n${officerList}\n\n[/list][/list]\n[b]Status[/b]: [color=green]OPEN[/color]\n[hr]\n[/divbox]`;
    }
    else
    {
        document.getElementById('output-code').textContent = `[divbox=white][center][list][/list][img]https://i.imgur.com/ZjgyCyP.png[/img]\n[font=Times New Roman][size=150]ARREST WARRANT[/size][/font]\n[font=Times New Roman][size=150]San Andreas Police Department[/size][/font]\n[font=Times New Roman][size=100]CITY OF SAN ANDREAS * 219 CENTRAL HEADQUARTERS, PERSHING SQUARE * LOS SANTOS SA 97447[/size][/font]\n[hr][hr]\n[font=Times New Roman][size=120][b]OFFICIAL PUBLICATION OF ARREST WARRANT - CRIME ANALYSIS DETAILS[/b][/size][/font]\n[hr]\n[img]${getSkinLinkByVariable(suspectClothes.textContent)}[/img]\n[b]Description of suspect:[/b]\n[i]${descriptionSuspect.value === '' ? 'N/A' : `${descriptionSuspect.value}`}[/i]\n[/center]\n[hr]\n[list=1]\n[*][b]Type of Warrant[/b] ${warrantType === 'Pilih Opsi' ? 'N/A' : `${warrantType}`}\n[*][b]Full name of suspect[/b]: ${suspect.value === '' ? 'N/A' : `${suspect.value}`}\n[*][b]Number of phone[/b]: ${phoneNumber.value === '' ? 'N/A' : `${phoneNumber.value}`}\n[*][b]Gender[/b]: ${gender.textContent === 'Pilih Opsi' ? 'N/A' : `${gender.textContent}`}\n[*][b]Information about suspect[/b]:\n[secspoiler=Mobile Data Center]\n[img]${infoSuspect.value}[/img][/secspoiler]\n[*][b]Evidences[/b]:\n[secspoiler=Video recording or conversation]\n${evidence.value}\n[/secspoiler]\n[*][b]Charges[/b]:\n[list]\n${chargeList}\n[/list]\n[*][b]Date and Time[/b]: ${formatDate(warrantDate.value)}\n[*][b]Chronology[/b]:\n[quote][justify]\n${chronology.value === '' ? 'N/A' : `${chronology.value}`}\n[/justify][/quote]\n[*][b]Officer involved[/b]:\n[list]\n${officerList}\n[/list][/list]\n[b]Status[/b]: [color=green]OPEN[/color]\n[hr]\n[/divbox]`;
    }
}

function updateOfficerButtons() {
    const container = document.getElementById('officer-involved-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    
    // Hapus semua button terlebih dahulu
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    
    // Tambahkan button hanya pada group terakhir, tanpa mengubah innerHTML input
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addOfficerInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeOfficerInput()">-</button>');
            }
        }
    });
}

// Lakukan hal serupa untuk updateChargeButtons, updateVehicleButtons, updateAddressButtons
function updateChargeButtons() {
    const container = document.getElementById('suspect-charge-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addChargeInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeChargeInput()">-</button>');
            }
        }
    });
}

function updateVehicleButtons() {
    const container = document.getElementById('suspect-vehicles-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addVehicleInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeVehicleInput()">-</button>');
            }
        }
    });
}

function updateAddressButtons() {
    const container = document.getElementById('suspect-home-address-container');
    const inputGroups = container.querySelectorAll('.officer-input-group');
    
    inputGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());
    });
    
    inputGroups.forEach((group, index) => {
        if (index === inputGroups.length - 1) {
            group.insertAdjacentHTML('beforeend', '<button class="add-btn" onclick="addAddressInput()">+</button>');
            if (inputGroups.length > 1) {
                group.insertAdjacentHTML('beforeend', '<button class="remove-btn" onclick="removeAddressInput()">-</button>');
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

const maleSkins = [
    'male_1.jpg',
    'male_2.jpg',
    'male_3.jpg',
    'male_4.jpg',
    'male_5.jpg',
    'male_6.jpg',
    'male_7.jpg',
    'male_8.jpg',
    'male_9.jpg',
    'male_10.jpg',
    'male_11.jpg',
    'male_12.jpg',
    'male_13.jpg',
    'male_14.jpg',
    'male_15.jpg',
    'male_16.jpg',
    'male_17.jpg',
    'male_18.jpg',
    'male_19.jpg',
    'male_20.jpg',
    'male_21.jpg',
    'male_22.jpg',
    'male_23.jpg',
    'male_24.jpg',
    'male_25.jpg',
    'male_26.jpg',
    'male_27.jpg',
    'male_28.jpg',
    'male_29.jpg',
    'male_30.jpg',
    'male_31.jpg',
    'male_32.jpg',
    'male_33.jpg',
    'male_34.jpg',
    'male_35.jpg',
    'male_36.jpg',
    'male_37.jpg',
    'male_38.jpg',
    'male_39.jpg',
    'male_40.jpg',
    'male_41.jpg',
    'male_42.jpg',
    'male_43.jpg',
    'male_44.jpg',
    'male_45.jpg',
    'male_46.jpg',
    'male_47.jpg',
    'male_48.jpg',
    'male_49.jpg',
    'male_50.jpg',
    'male_51.jpg',
    'male_52.jpg',
    'male_53.jpg',
    'male_54.jpg',
    'male_55.jpg',
    'male_56.jpg',
    'male_57.jpg',
    'male_58.jpg',
    'male_59.jpg',
    'male_60.jpg',
    'male_61.jpg',
    'male_62.jpg',
    'male_63.jpg',
    'male_64.jpg',
    'male_65.jpg',
    'male_66.jpg',
    'male_67.jpg',
    'male_68.jpg',
    'male_69.jpg',
    'male_70.jpg',
    'male_71.jpg',
    'male_72.jpg',
    'male_73.jpg',
    'male_74.jpg',
    'male_75.jpg',
    'male_76.jpg',
    'male_77.jpg',
    'male_78.jpg',
    'male_79.jpg',
    'male_80.jpg',
    'male_81.jpg',
    'male_82.jpg',
    'male_83.jpg',
    'male_84.jpg',
    'male_85.jpg',
    'male_86.jpg',
    'male_87.jpg',
    'male_88.jpg',
    'male_89.jpg',
    'male_90.jpg',
    'male_91.jpg',
    'male_92.jpg',
    'male_93.jpg',
    'male_94.jpg',
    'male_95.jpg',
    'male_96.jpg',
    'male_97.jpg',
    'male_98.jpg',
    'male_99.jpg',
    'male_100.jpg',
    'male_101.jpg',
    'male_102.jpg',
    'male_103.jpg',
    'male_104.jpg',
    'male_105.jpg',
    'male_106.jpg',
    'male_107.jpg',
    'male_108.jpg',
    'male_109.jpg',
    'male_110.jpg',
    'male_111.jpg',
    'male_112.jpg',
    'male_113.jpg',
    'male_114.jpg',
    'male_115.jpg',
    'male_116.jpg',
    'male_117.jpg',
    'male_118.jpg',
    'male_119.jpg',
    'male_120.jpg',
    'male_121.jpg',
    'male_122.jpg',
    'male_123.jpg',
    'male_124.jpg',
    'male_125.jpg',
    'male_126.jpg',
    'male_127.jpg',
    'male_128.jpg',
    'male_129.jpg',
    'male_130.jpg',
    'male_131.jpg',
    'male_132.jpg',
    'male_133.jpg',
    'male_134.jpg',
    'male_135.jpg',
    'male_136.jpg',
    'male_137.jpg',
    'male_138.jpg',
    'male_139.jpg',
    'male_140.jpg',
    'male_141.jpg',
    'male_142.jpg',
    'male_143.jpg',
    'male_144.jpg',
    'male_145.jpg',
    'male_146.jpg',
    'male_147.jpg',
    'male_148.jpg',
    'male_149.jpg',
    'male_150.jpg',
    'male_151.jpg',
    'male_152.jpg',
    'male_153.jpg',
    'male_154.jpg',
    'male_155.jpg',
    'male_156.jpg',
    'male_157.jpg',
    'male_158.jpg',
    'male_159.jpg',
    'male_160.jpg',
    'male_161.jpg',
    'male_162.jpg',
    'male_163.jpg',
    'male_164.jpg',
    'male_165.jpg',
    'male_166.jpg',
    'male_167.jpg',
    'male_168.jpg',
    'male_169.jpg',
    'male_170.jpg',
    'male_171.jpg',
    'male_172.jpg',
    'male_173.jpg',
    'male_174.jpg',
    'male_175.jpg',
    'male_176.jpg',
    'male_177.jpg',
    'male_178.jpg',
    'male_179.jpg',
    'male_180.jpg',
    'male_181.jpg',
    'male_182.jpg',
    'male_183.jpg',
    'male_184.jpg',
    'male_185.jpg',
    'male_186.jpg',
    'male_187.jpg',
    'male_188.jpg',
    'male_189.jpg',
    'male_190.jpg',
    'male_191.jpg',
    'male_192.jpg'
];

const femaleSkins = [
    'female_1.jpg',
    'female_2.jpg',
    'female_3.jpg',
    'female_4.jpg',
    'female_5.jpg',
    'female_6.jpg',
    'female_7.jpg',
    'female_8.jpg',
    'female_9.jpg',
    'female_10.jpg',
    'female_11.jpg',
    'female_12.jpg',
    'female_13.jpg',
    'female_14.jpg',
    'female_15.jpg',
    'female_16.jpg',
    'female_17.jpg',
    'female_18.jpg',
    'female_19.jpg',
    'female_20.jpg',
    'female_21.jpg',
    'female_22.jpg',
    'female_23.jpg',
    'female_24.jpg',
    'female_25.jpg',
    'female_26.jpg',
    'female_27.jpg',
    'female_28.jpg',
    'female_29.jpg',
    'female_30.jpg',
    'female_31.jpg',
    'female_32.jpg',
    'female_33.jpg',
    'female_34.jpg',
    'female_35.jpg',
    'female_36.jpg',
    'female_37.jpg',
    'female_38.jpg',
    'female_39.jpg',
    'female_40.jpg',
    'female_41.jpg',
    'female_42.jpg',
    'female_43.jpg',
    'female_44.jpg',
    'female_45.jpg',
    'female_46.jpg',
    'female_47.jpg',
    'female_48.jpg',
    'female_49.jpg',
    'female_50.jpg',
    'female_51.jpg',
    'female_52.jpg',
    'female_53.jpg',
    'female_54.jpg',
    'female_55.jpg',
    'female_56.jpg',
    'female_57.jpg',
    'female_58.jpg',
    'female_59.jpg',
    'female_60.jpg',
    'female_61.jpg',
    'female_62.jpg',
    'female_63.jpg',
    'female_64.jpg',
    'female_65.jpg',
    'female_66.jpg',
    'female_67.jpg',
    'female_68.jpg',
    'female_69.jpg',
    'female_70.jpg',
    'female_71.jpg',
    'female_72.jpg',
    'female_73.jpg',
    'female_74.jpg',
    'female_75.jpg',
    'female_76.jpg',
    'female_77.jpg',
    'female_78.jpg',
    'female_79.jpg',
    'female_80.jpg',
    'female_81.jpg'
];

const femaleSkinsLink = [
    'https://i.imgur.com/U0jrWeH.jpg',
    'https://i.imgur.com/y4hZK6a.jpg',
    'https://i.imgur.com/T54Kvtf.jpg',
    'https://i.imgur.com/n0KfW92.jpg',
    'https://i.imgur.com/aoVEvfG.jpg',
    'https://i.imgur.com/6yvGWO9.jpg',
    'https://i.imgur.com/igOQlFN.jpg',
    'https://i.imgur.com/BlxUS5T.jpg',
    'https://i.imgur.com/6NAsw5S.jpg',
    'https://i.imgur.com/SjMWXON.jpg',
    'https://i.imgur.com/hpG6fVi.jpg',
    'https://i.imgur.com/OumN2HH.jpg',
    'https://i.imgur.com/eIO7ubV.jpg',
    'https://i.imgur.com/SJ46gDN.jpg',
    'https://i.imgur.com/3NFBPZa.jpg',
    'https://i.imgur.com/TCsOKru.jpg',
    'https://i.imgur.com/VE5siny.jpg',
    'https://i.imgur.com/h6gEr0m.jpg',
    'https://i.imgur.com/8JWzYaa.jpg',
    'https://i.imgur.com/MiwqM8c.jpg',
    'https://i.imgur.com/2SOBdX0.jpg',
    'https://i.imgur.com/ZejzX5o.jpg',
    'https://i.imgur.com/c9fiiEQ.jpg',
    'https://i.imgur.com/t7W1hVo.jpg',
    'https://i.imgur.com/VYTqR6L.jpg',
    'https://i.imgur.com/V8DOjy9.jpg',
    'https://i.imgur.com/JDlXHL3.jpg',
    'https://i.imgur.com/CBwCEYG.jpg',
    'https://i.imgur.com/Tt7JwB2.jpg',
    'https://i.imgur.com/TgJt4sg.jpg',
    'https://i.imgur.com/30nKWLZ.jpg',
    'https://i.imgur.com/EqzwrWW.jpg',
    'https://i.imgur.com/LOgup9n.jpg',
    'https://i.imgur.com/3kORhoZ.jpg',
    'https://i.imgur.com/2KNn8UT.jpg',
    'https://i.imgur.com/FnygMYG.jpg',
    'https://i.imgur.com/5Od8nlN.jpg',
    'https://i.imgur.com/qVwLqKF.jpg',
    'https://i.imgur.com/IbfbNpy.jpg',
    'https://i.imgur.com/or5zeZy.jpg',
    'https://i.imgur.com/116e3TJ.jpg',
    'https://i.imgur.com/2apwrnK.jpg',
    'https://i.imgur.com/AQJVz7U.jpg',
    'https://i.imgur.com/WsLBgqW.jpg',
    'https://i.imgur.com/YVXo4w0.jpg',
    'https://i.imgur.com/RshAe2e.jpg',
    'https://i.imgur.com/Ns73jD5.jpg',
    'https://i.imgur.com/6KcLdS1.jpg',
    'https://i.imgur.com/BogmcQ7.jpg',
    'https://i.imgur.com/jbfFVkr.jpg',
    'https://i.imgur.com/jKp4SAL.jpg',
    'https://i.imgur.com/1E6SvY3.jpg',
    'https://i.imgur.com/lU7TeM6.jpg',
    'https://i.imgur.com/4Zz2MzJ.jpg',
    'https://i.imgur.com/CE1lT4y.jpg',
    'https://i.imgur.com/OM7Ye8z.jpg',
    'https://i.imgur.com/hesNxUq.jpg',
    'https://i.imgur.com/S1RB5qo.jpg',
    'https://i.imgur.com/cVfhlH7.jpg',
    'https://i.imgur.com/H8Q4dRd.jpg',
    'https://i.imgur.com/7yyJz8Q.jpg',
    'https://i.imgur.com/JrzPMxf.jpg',
    'https://i.imgur.com/VPccigS.jpg',
    'https://i.imgur.com/KQGPkWV.jpg',
    'https://i.imgur.com/5gnSlbL.jpg',
    'https://i.imgur.com/LLEynGw.jpg',
    'https://i.imgur.com/gTBnLVJ.jpg',
    'https://i.imgur.com/owQiB8O.jpg',
    'https://i.imgur.com/dU0PTO0.jpg',
    'https://i.imgur.com/FUmasfh.jpg',
    'https://i.imgur.com/IObKdls.jpg',
    'https://i.imgur.com/1OQlx8o.jpg',
    'https://i.imgur.com/1LPmED1.jpg',
    'https://i.imgur.com/c0rkYES.jpg',
    'https://i.imgur.com/qTkzhXf.jpg',
    'https://i.imgur.com/Od13Zy8.jpg',
    'https://i.imgur.com/huH0OV0.jpg',
    'https://i.imgur.com/dYuI5z6.jpg',
    'https://i.imgur.com/5gaKHNj.jpg',
    'https://i.imgur.com/kuQEkpY.jpg',
    'https://i.imgur.com/qf0dCAH.jpg'
];

const maleSkinsLink = [
    'https://i.imgur.com/ROloEOY.jpg',
    'https://i.imgur.com/LtdcoCh.jpg',
    'https://i.imgur.com/LCP8fUk.jpg',
    'https://i.imgur.com/4nmPOKO.jpg',
    'https://i.imgur.com/YmWPSIg.jpg',
    'https://i.imgur.com/11bhLks.jpg',
    'https://i.imgur.com/4rvKWrH.jpg',
    'https://i.imgur.com/hGsUqR0.jpg',
    'https://i.imgur.com/IYkfaqo.jpg',
    'https://i.imgur.com/N3j07WQ.jpg',
    'https://i.imgur.com/CDZcRzc.jpg',
    'https://i.imgur.com/Mpyntmj.jpg',
    'https://i.imgur.com/nEjibxs.jpg',
    'https://i.imgur.com/HXovQpG.jpg',
    'https://i.imgur.com/7hhNnPC.jpg',
    'https://i.imgur.com/owsIvEr.jpg',
    'https://i.imgur.com/uP4gQtP.jpg',
    'https://i.imgur.com/qA1PyKX.jpg',
    'https://i.imgur.com/oMk0Wrp.jpg',
    'https://i.imgur.com/eRt7pYm.jpg',
    'https://i.imgur.com/eoz3A1q.jpg',
    'https://i.imgur.com/ZCfMJAH.jpg',
    'https://i.imgur.com/ccCiWIY.jpg',
    'https://i.imgur.com/IvhED81.jpg',
    'https://i.imgur.com/YgGmTiO.jpg',
    'https://i.imgur.com/6FkaDF2.jpg',
    'https://i.imgur.com/F1jtZR3.jpg',
    'https://i.imgur.com/gRrGREG.jpg',
    'https://i.imgur.com/92OgAGA.jpg',
    'https://i.imgur.com/OJ4ubhI.jpg',
    'https://i.imgur.com/d76TNhZ.jpg',
    'https://i.imgur.com/yYDGa41.jpg',
    'https://i.imgur.com/XsXNNuG.jpg',
    'https://i.imgur.com/wZ0bwlo.jpg',
    'https://i.imgur.com/83vXFjz.jpg',
    'https://i.imgur.com/Z0jjQpd.jpg',
    'https://i.imgur.com/OrZF8zY.jpg',
    'https://i.imgur.com/dNJn4Y3.jpg',
    'https://i.imgur.com/b0ATQZQ.jpg',
    'https://i.imgur.com/OIOmQZl.jpg',
    'https://i.imgur.com/tU9vFms.jpg',
    'https://i.imgur.com/cUcsGAj.jpg',
    'https://i.imgur.com/8F0yhJg.jpg',
    'https://i.imgur.com/BBiiqvG.jpg',
    'https://i.imgur.com/YD4zaa2.jpg',
    'https://i.imgur.com/gYeFugi.jpg',
    'https://i.imgur.com/G15QlaS.jpg',
    'https://i.imgur.com/wEeck7T.jpg',
    'https://i.imgur.com/E6sFMvl.jpg',
    'https://i.imgur.com/EzfZa1B.jpg',
    'https://i.imgur.com/c64K1KM.jpg',
    'https://i.imgur.com/5K7c5Wr.jpg',
    'https://i.imgur.com/VwVyFy3.jpg',
    'https://i.imgur.com/YX0bLPi.jpg',
    'https://i.imgur.com/Boo73u9.jpg',
    'https://i.imgur.com/k1pdUCy.jpg',
    'https://i.imgur.com/BGroRMY.jpg',
    'https://i.imgur.com/2ZfobgI.jpg',
    'https://i.imgur.com/cmRHVJE.jpg',
    'https://i.imgur.com/MbpTZvh.jpg',
    'https://i.imgur.com/V960pLx.jpg',
    'https://i.imgur.com/utlAfuJ.jpg',
    'https://i.imgur.com/hJqvZlC.jpg',
    'https://i.imgur.com/PHnG5qA.jpg',
    'https://i.imgur.com/sauuWaK.jpg',
    'https://i.imgur.com/JRJ6hn7.jpg',
    'https://i.imgur.com/NldsSHQ.jpg',
    'https://i.imgur.com/UWo4s1D.jpg',
    'https://i.imgur.com/eQIdFmA.jpg',
    'https://i.imgur.com/v4HlK3u.jpg',
    'https://i.imgur.com/J4Fkyxo.jpg',
    'https://i.imgur.com/YVW6N4X.jpg',
    'https://i.imgur.com/puNTSWY.jpg',
    'https://i.imgur.com/9eKeQuQ.jpg',
    'https://i.imgur.com/LknbmhD.jpg',
    'https://i.imgur.com/Z5BRznL.jpg',
    'https://i.imgur.com/pWZzUWd.jpg',
    'https://i.imgur.com/QzawaAi.jpg',
    'https://i.imgur.com/FFPBL2J.jpg',
    'https://i.imgur.com/CpeIh41.jpg',
    'https://i.imgur.com/YSpuCG7.jpg',
    'https://i.imgur.com/Es0mUQT.jpg',
    'https://i.imgur.com/cTvXhqO.jpg',
    'https://i.imgur.com/9CS6qem.jpg',
    'https://i.imgur.com/3oUbZPN.jpg',
    'https://i.imgur.com/XaqYSp4.jpg',
    'https://i.imgur.com/hoP7YTZ.jpg',
    'https://i.imgur.com/0mTlqQG.jpg',
    'https://i.imgur.com/O0i2BPj.jpg',
    'https://i.imgur.com/drX3AFl.jpg',
    'https://i.imgur.com/K3AgU4z.jpg',
    'https://i.imgur.com/b3S2BS6.jpg',
    'https://i.imgur.com/ONDmvq1.jpg',
    'https://i.imgur.com/FNVp5u3.jpg',
    'https://i.imgur.com/qaaozA5.jpg',
    'https://i.imgur.com/YYNHzMP.jpg',
    'https://i.imgur.com/7dZAOQm.jpg',
    'https://i.imgur.com/o3xFLBm.jpg',
    'https://i.imgur.com/YsIhg0s.jpg',
    'https://i.imgur.com/wMfFEfm.jpg',
    'https://i.imgur.com/iBnWTg1.jpg',
    'https://i.imgur.com/UFVNZVn.jpg',
    'https://i.imgur.com/gKbqW4O.jpg',
    'https://i.imgur.com/l5xhVB2.jpg',
    'https://i.imgur.com/P55DWto.jpg',
    'https://i.imgur.com/u9AVmOq.jpg',
    'https://i.imgur.com/XQSoyOY.jpg',
    'https://i.imgur.com/k1D9JzS.jpg',
    'https://i.imgur.com/cO4qjOs.jpg',
    'https://i.imgur.com/NdQ1M3p.jpg',
    'https://i.imgur.com/jarefy7.jpg',
    'https://i.imgur.com/aNAXigO.jpg',
    'https://i.imgur.com/XtGlFwZ.jpg',
    'https://i.imgur.com/Avsa7hq.jpg',
    'https://i.imgur.com/hdgGwtv.jpg',
    'https://i.imgur.com/IP61C8h.jpg',
    'https://i.imgur.com/0o5Ep7T.jpg',
    'https://i.imgur.com/53ufV8l.jpg',
    'https://i.imgur.com/xDKM8Vr.jpg',
    'https://i.imgur.com/PWZsCte.jpg',
    'https://i.imgur.com/TgF9J4W.jpg',
    'https://i.imgur.com/gjTQ9X8.jpg',
    'https://i.imgur.com/bM8sIMW.jpg',
    'https://i.imgur.com/uA6HIQ1.jpg',
    'https://i.imgur.com/4K5VWsr.jpg',
    'https://i.imgur.com/gcN1kdv.jpg',
    'https://i.imgur.com/pgH6DRw.jpg',
    'https://i.imgur.com/AAwmBFz.jpg',
    'https://i.imgur.com/Q23CaeT.jpg',
    'https://i.imgur.com/MOgBIO0.jpg',
    'https://i.imgur.com/fipQL5J.jpg',
    'https://i.imgur.com/EWHMHBG.jpg',
    'https://i.imgur.com/QbJPSyd.jpg',
    'https://i.imgur.com/j6uju6O.jpg',
    'https://i.imgur.com/lg2MeBv.jpg',
    'https://i.imgur.com/s5ptZpH.jpg',
    'https://i.imgur.com/xCFEUbd.jpg',
    'https://i.imgur.com/lWJMofO.jpg',
    'https://i.imgur.com/EzvgNhG.jpg',
    'https://i.imgur.com/ZWcgDAp.jpg',
    'https://i.imgur.com/p0nlZ7V.jpg',
    'https://i.imgur.com/WDZL4Fz.jpg',
    'https://i.imgur.com/bzF6bXp.jpg',
    'https://i.imgur.com/tvwGibN.jpg',
    'https://i.imgur.com/FSDalmk.jpg',
    'https://i.imgur.com/9ZNq5cM.jpg',
    'https://i.imgur.com/y106rEj.jpg',
    'https://i.imgur.com/7QrIJn6.jpg',
    'https://i.imgur.com/AMy262e.jpg',
    'https://i.imgur.com/OggxUdA.jpg',
    'https://i.imgur.com/LN3JRVH.jpg',
    'https://i.imgur.com/EHJpJB5.jpg',
    'https://i.imgur.com/i9XPSTl.jpg',
    'https://i.imgur.com/0NdFsTw.jpg',
    'https://i.imgur.com/YZwgU14.jpg',
    'https://i.imgur.com/xfvAiLw.jpg',
    'https://i.imgur.com/y8uDXiH.jpg',
    'https://i.imgur.com/77StHJp.jpg',
    'https://i.imgur.com/UNDoLmX.jpg',
    'https://i.imgur.com/2Pbmm3K.jpg',
    'https://i.imgur.com/RcYYF7a.jpg',
    'https://i.imgur.com/T6vFjl6.jpg',
    'https://i.imgur.com/04cJcxE.jpg',
    'https://i.imgur.com/H7SpUHO.jpg',
    'https://i.imgur.com/5qCB2K9.jpg',
    'https://i.imgur.com/1Bh35Rd.jpg',
    'https://i.imgur.com/E50Wx06.jpg',
    'https://i.imgur.com/UUYRJ8I.jpg',
    'https://i.imgur.com/8vUevY9.jpg',
    'https://i.imgur.com/4QDoye0.jpg',
    'https://i.imgur.com/0kHrQhw.jpg',
    'https://i.imgur.com/zQboAmn.jpg',
    'https://i.imgur.com/pUSL5sJ.jpg',
    'https://i.imgur.com/BhI9QFd.jpg',
    'https://i.imgur.com/W6GgbHg.jpg',
    'https://i.imgur.com/3iQgsfH.jpg',
    'https://i.imgur.com/JKOFw1l.jpg',
    'https://i.imgur.com/2FZKzfp.jpg',
    'https://i.imgur.com/ozcyoPf.jpg',
    'https://i.imgur.com/xKTWRii.jpg',
    'https://i.imgur.com/EDZXcyE.jpg',
    'https://i.imgur.com/RWEM325.jpg',
    'https://i.imgur.com/QfvTbmn.jpg',
    'https://i.imgur.com/3JmDJL7.jpg',
    'https://i.imgur.com/DkRouwR.jpg',
    'https://i.imgur.com/Q2I56kB.jpg',
    'https://i.imgur.com/Yw4yWNt.jpg',
    'https://i.imgur.com/PV2WbW4.jpg',
    'https://i.imgur.com/C9P6sok.jpg',
    'https://i.imgur.com/Ux2Betw.jpg',
    'https://i.imgur.com/ZmTnege.jpg',
    'https://i.imgur.com/HKGULnP.jpg'
];

document.getElementById('gender').addEventListener('input', () => {
    if(gender.value.toLowerCase() === 'male' || gender.value.toLowerCase() === 'female')
    {
        populateClothes(gender.value);
    }
    UpdateResultsOutputCode();
});

// Tambahkan event listener untuk semua input yang relevan
document.getElementById('warrant-type').addEventListener('change', UpdateResultsOutputCode);
document.getElementById('suspect').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('description-suspect').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('phone-number').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('info-suspect').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('evidence').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('warrant-date').addEventListener('change', UpdateResultsOutputCode); // Untuk date picker
document.getElementById('chronology').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('clothes').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('gender').addEventListener('input', UpdateResultsOutputCode);

// Event delegation untuk container dinamis (agar update saat input di dalamnya berubah)
document.getElementById('officer-involved-container').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('suspect-charge-container').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('suspect-vehicles-container').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('suspect-home-address-container').addEventListener('input', UpdateResultsOutputCode);

// Panggil update awal
updateOfficerButtons();
updateChargeButtons();
updateVehicleButtons();
updateAddressButtons();
UpdateResultsOutputCode();
