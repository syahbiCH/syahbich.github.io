const caseid = document.getElementById('caseid');

function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

function toggleDropdownUniform() {
    document.getElementById("dropdownContent-uniform").classList.toggle("show");
}

function selectOption(option, id) {
    document.getElementById(id).textContent = option;
    document.getElementById("dropdownContent").classList.remove("show");
    document.getElementById("dropdownContent-uniform").classList.remove("show");
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
    const location = document.getElementById('location');
    const date = document.getElementById('date');
    const irtype = document.getElementById('ir-type');
    const suspectName = document.getElementById('suspect-name');
    const suspectReason = document.getElementById('suspect-reason');
    const officerName = document.getElementById('officer-name');
    const personInCharge = document.getElementById('person-in-charge-name');
    const idCard = document.getElementById('id-card-evidence');
    const evidenceRecord = document.getElementById('evidence-record');
    const arrestRecord = document.getElementById('arrest-or-inspect-evidence');
    const videoEvidence = document.getElementById('video-or-dashcam-evidence');
    const checkbox1_1 = document.getElementById('checkbox1_1');
    const checkbox1_2 = document.getElementById('checkbox1_2');
    const checkbox1_3 = document.getElementById('checkbox1_3');
    const checkbox1_4 = document.getElementById('checkbox1_4');
    const checkbox1_5 = document.getElementById('checkbox1_5');
    const checkbox1_6 = document.getElementById('checkbox1_6');
    const checkbox1_7 = document.getElementById('checkbox1_7');
    const checkbox1_8 = document.getElementById('checkbox1_8');
    const checkbox2_1 = document.getElementById('checkbox2_1');
    const checkbox2_2 = document.getElementById('checkbox2_2');
    const checkbox2_3 = document.getElementById('checkbox2_3');
    const checkbox2_4 = document.getElementById('checkbox2_4');
    const checkbox3_1 = document.getElementById('checkbox3_1');
    const checkbox3_2 = document.getElementById('checkbox3_2');
    const checkbox4_1 = document.getElementById('checkbox4_1');
    const checkbox4_2 = document.getElementById('checkbox4_2');
    const checkbox4_3 = document.getElementById('checkbox4_3');
    const checkbox4_4 = document.getElementById('checkbox4_4');
    const checkbox5_1 = document.getElementById('checkbox5_1');
    const checkbox5_2 = document.getElementById('checkbox5_2');
    const checkbox5_3 = document.getElementById('checkbox5_3');
    const checkbox5_4 = document.getElementById('checkbox5_4');
    const checkbox5_5 = document.getElementById('checkbox5_5');
    const checkbox5_6 = document.getElementById('checkbox5_6');
    const checkbox5_7 = document.getElementById('checkbox5_7');
    const uniformtype = document.getElementById('uniform-type');
    const weaponFireDesc = document.getElementById('weapon-firearm-desc');
    const weaponBluntDesc = document.getElementById('weapon-blunt-object-desc');
    const weaponOtherDesc = document.getElementById('weapon-other-desc');
    const suspectInjuredDesc = document.getElementById('suspect-injured-desc');
    function formatDate(dateValue) {
        if (!dateValue) return 'None';
        const [year, month, day] = dateValue.split('-');
        return `${day}/${month}/${year}`;
    }
    document.getElementById('output-subject').textContent = `Case #${caseid.value === '' ? 'None' : caseid.value} - ${irtype.textContent === '' ? 'None' : irtype.textContent} - ${officerName.value === '' ? 'None' : officerName.value} - ${formatDate(date.value)}`;
    document.getElementById('output-code').textContent = `[divbox=transparent]\n\n[size=95]\n[center][img]https://i.imgur.com/2Zt5baY.png[/img]\n\n[b]INCIDENT REPORT[/b][/center]\n[aligntable=left,250,15,0,0,0,transparent][b]CASE #:[/b] ${caseid.value}\n[b]Type:[/b] ${irtype.textContent}[/aligntable][aligntable=right,200,0,15,0,0,transparent][right][b]LOCATION:[/b] ${location.value}\n[b]DATE:\t[/b] ${date.value}\n[/aligntable]\n\n[hr][/hr]\n[center][b][size=80]SUSPECT INFORMATION[/b][/size][/center]\n[hr][/hr]\n\n[aligntable=middle,0,15,15,0,0,transparent]\nFullname: ${suspectName.value}\nPrecise activity prior to use of force: (i.e. assaulting, fleeing, passive resistances, etc.)\n${suspectReason.value}\nWeapon(s):\t[${checkbox1_1.checked ? 'X' : ''}] N/A\t[${checkbox1_2.checked ? 'X' : ''}] Knife\t[${checkbox1_3.checked ? 'X' : ''}] Vehicle\t[${checkbox1_4.checked ? 'X' : ''}] Bite\n[list=none]\t[${checkbox1_5.checked ? 'X' : ''}] Firearm (type): ${weaponFireDesc.value}\n\t[${checkbox1_6.checked ? 'X' : ''}] Blunt object (type): ${weaponBluntDesc.value}\n\t[${checkbox1_7.checked ? 'X' : ''}] Hands/feet (technique)  \n\t[${checkbox1_8.checked ? 'X' : ''}] Other: ${weaponOtherDesc.value}[/list] \nUnder Influence: [${checkbox2_2.checked ? 'X' : ''}] Alcohol\t[${checkbox2_3.checked ? 'X' : ''}] Drugs\t[${checkbox2_4.checked ? 'X' : ''}] Unknown\t[${checkbox2_1.checked ? 'X' : ''}] N/A\n\nInjured: [${checkbox3_2.checked ? 'X' : ''}] No\t[${checkbox3_1.checked ? 'X' : ''}] Yes ${checkbox3_1.checked ? `: ${suspectInjuredDesc.value}` : '(If yes, describe)'}\nTreated by: [${checkbox4_2.checked ? 'X' : ''}] Officer\t[${checkbox4_3.checked ? 'X' : ''}] Fire department\t[${checkbox4_4.checked ? 'X' : ''}] Emergency room\t[${checkbox4_1.checked ? 'X' : ''}] N/A\n[/aligntable]\n[hr][/hr]\n[center][b][size=80]OFFICER INFORMATION[/b][/size][/center]\n[hr][/hr]\n[aligntable=middle,0,15,15,0,0,transparent]\nFullname: ${officerName.value}\nPerson in-charge of use of force: ${personInCharge.value}\nUniform: [${uniformtype.textContent === 'Patrol uniform' ? 'X' : ''}] Patrol uniform\t[${uniformtype.textContent === 'Tactical' ? 'X' : ''}] Tactical\t[${uniformtype.textContent === 'Plain clothes' ? 'X' : ''}] Plain clothes\nWeapon used at time of incident: [${checkbox5_1.checked ? 'X' : ''}] Handgun\t[${checkbox5_2.checked ? 'X' : ''}] Rubber shotgun\t[${checkbox5_3.checked ? 'X' : ''}] Lethal shotgun [${checkbox5_4.checked ? 'X' : ''}] Submachine guns [${checkbox5_5.checked ? 'X' : ''}] Automatic rifle [${checkbox5_6.checked ? 'X' : ''}] Tazer [${checkbox5_7.checked ? 'X' : ''}] Spike Trip\n[/aligntable]\n\n[hr][/hr]\n[center][b][size=80]RESOURCE INFORMATION[/b][/size][/center]\n[hr][/hr]\n\n[aligntable=middle,0,15,15,0,0,transparent]\n[secspoiler=ID Card][img]${idCard.value}[/img][/secspoiler]\n[secspoiler=Evidence Record][img]${evidenceRecord.value}[/img][/secspoiler]\n[secspoiler=Arrest Record/ICD Record][img]${arrestRecord.value}[/img][/secspoiler]\n[secspoiler=Video/Dashcam Footage, if available]${videoEvidence.value}[/secspoiler]\n[/aligntable]\n\n\n[space][/space]\n[/divbox]`;
}

function redirectTo(url)
{
    window.location.href = url;
}

caseid.addEventListener('input', UpdateResultsOutputCode);
document.getElementById('location').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('date').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('suspect-name').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('suspect-reason').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('officer-name').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('person-in-charge-name').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('id-card-evidence').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('evidence-record').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('arrest-or-inspect-evidence').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('video-or-dashcam-evidence').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('suspect-injured-desc').addEventListener('input', UpdateResultsOutputCode);
document.querySelector('.copy').addEventListener('click', copyBBCode);
document.getElementById('checkbox1_1').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_2').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_3').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_4').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_5').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_6').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_7').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox1_8').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox2_1').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox2_2').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox2_3').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox2_4').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox3_1').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox3_2').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox4_1').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox4_2').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox4_3').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox4_4').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_1').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_2').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_3').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_4').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_5').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_6').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('checkbox5_7').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('uniform-type').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('weapon-firearm-desc').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('weapon-blunt-object-desc').addEventListener('input', UpdateResultsOutputCode);
document.getElementById('weapon-other-desc').addEventListener('input', UpdateResultsOutputCode);
UpdateResultsOutputCode();
