function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

function toggleDropdownUniform() {
    document.getElementById("dropdownContent-uniform").classList.toggle("show");
}

function selectOption(option, id) {
    document.getElementById(id).textContent = option;
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
    const officerName = document.getElementById('officer-name');
    const licenseHolder = document.getElementById('license-holder');
    const licenseType = document.getElementById('license-type');
    const revokedDate = document.getElementById('date');
    const revokedReason = document.getElementById('reason');
    const revokedEvidence = document.getElementById('evidence');
    function formatDate(dateValue) {
        if (!dateValue) return 'None';
        const [year, month, day] = dateValue.split('-');
        return `${day}/${month}/${year}`;
    }
    document.getElementById('output-subject').textContent = `[LICENSE REVOKE] ${licenseHolder.value === '' ? 'None' : `${licenseHolder.value}`} (${licenseType.textContent === 'Pilih Opsi' ? 'None' : `${licenseType.textContent}`})`;
    document.getElementById('output-code').textContent = `[divbox=white]\n[center][img]https://i.imgur.com/wYOtQmN.png[/img]\n\n[divbox=#012849][color=white][center]Revocation Report[/center][/color][/divbox][/center]\n\n[b]Officer Name:[/b] ${officerName.value === '' ? 'N/A' : `${officerName.value}`}\n[b]License Holder Name[/b] : ${licenseHolder.value === '' ? 'N/A' : `${licenseHolder.value}`}\n[b]License Type[/b] : ${licenseType.textContent === 'Pilih Opsi' ? 'N/A' : `${licenseType.textContent}`}\n[b]Date Revoked[/b] : ${formatDate(date.value)}\n[b]Reason[/b] : ${revokedReason.value === '' ? 'N/A' : `${revokedReason.value}`}\n[b]Evidence[/b] :\n[spoiler]${revokedEvidence.value === '' ? 'N/A' : `${revokedEvidence.value}`}[/spoiler]`;
}

function redirectTo(url)
{
    window.location.href = url;
}

document.getElementById('officer-name').addEventListener('input',UpdateResultsOutputCode);
document.getElementById('license-holder').addEventListener('input',UpdateResultsOutputCode);
document.getElementById('license-type').addEventListener('change',UpdateResultsOutputCode);
document.getElementById('date').addEventListener('change',UpdateResultsOutputCode);
document.getElementById('reason').addEventListener('input',UpdateResultsOutputCode);
document.getElementById('evidence').addEventListener('input',UpdateResultsOutputCode);
UpdateResultsOutputCode();