const elem = document.createElement('h1');
const elem2 = document.createElement('h2');
const elem3 = document.createElement('p');
const elem4 = document.createElement('p');
const updates = document.createElement('p');
const elem5 = document.createElement('p');
const elem6 = document.createElement('p');
const elem7 = document.createElement('p');
elem.textContent = 'PRIVACY LABEL';
elem2.textContent = 'VISUAL';
updates.textContent = 'Updates:';
document.body.appendChild(elem);
document.body.appendChild(elem2);
const submitButton = document.getElementById('submit');
const purposeInput = document.getElementById('purpose');
const typeInput = document.getElementById('type');
const updatesOneInput = document.getElementById('updatesOne');
const updatesTwoInput = document.getElementById('updatesTwo');
const updatesThreeInput = document.getElementById('updatesThree');
submitButton.onclick = function (event) {
    const purpose = purposeInput.value;
    const type = typeInput.value;
    const updates1 = updatesOneInput.value;
    const updates2 = updatesTwoInput.value;
    const updates3 = updatesThreeInput.value;
    const message = document.createElement('p');
    const messageType = document.createElement('p');
    message.textContent = 'Purpose: '
    elem3.textContent = purpose;
    messageType.textContent = 'Type: '
    elem4.textContent = type;
    elem5.textContent = updates1;
    elem6.textContent = updates2;
    elem7.textContent = updates3;
    document.body.appendChild(message);
    document.body.appendChild(elem3);
    document.body.appendChild(messageType);
    document.body.appendChild(elem4);
    document.body.appendChild(updates);
    document.body.appendChild(elem5);
    document.body.appendChild(elem6);
    document.body.appendChild(elem7);
};
var elements = document.querySelectorAll('p, h2');
var wrapper = document.createElement('div');
for (var el of elements) {
  el.parentNode.insertBefore(wrapper, el);
}
wrapper.classList.add('visual');