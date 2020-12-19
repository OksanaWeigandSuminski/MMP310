//VISUAL
const elem3 = document.createElement('p');
const elem4 = document.createElement('p');
const elem5 = document.createElement('p');
const elem6 = document.createElement('p');
const elem7 = document.createElement('p');
const updates = document.createElement('p');

updates.textContent = 'Updates:';
const submitButton = document.getElementById('submit');
const purposeInput = document.getElementById('visualPurpose');
const typeInput = document.getElementById('visualType');
const updatesOneInput = document.getElementById('updatesOne');
const updatesTwoInput = document.getElementById('updatesTwo');
const updatesThreeInput = document.getElementById('updatesThree');

//LOCATION
const locP = document.createElement('p');
const locUp1 = document.createElement('p');
const locUp2 = document.createElement('p');
const locUp3 = document.createElement('p');
const locUpdates = document.createElement('p');
locUpdates.textContent = 'Updates:';
const locPurposeInput = document.getElementById('locationPurpose');
const locUpdatesOneInput = document.getElementById('locationUpdatesOne');
const locUpdatesTwoInput = document.getElementById('locationUpdatesTwo');
const locUpdatesThreeInput = document.getElementById('locationUpdatesThree');

//SENSOR
const sensP = document.createElement('p');
const sensT = document.createElement('p');
const sensUp1 = document.createElement('p');
const sensUp2 = document.createElement('p');
const sensUp3 = document.createElement('p');
const sensUpdates = document.createElement('p');
sensUpdates.textContent = 'Updates:';
const sensPurposeInput = document.getElementById('sensorPurpose');
const sensTypeInput = document.getElementById('sensorType');
const sensUpdatesOneInput = document.getElementById('sensorUpdatesOne');
const sensUpdatesTwoInput = document.getElementById('sensorUpdatesTwo');
const sensUpdatesThreeInput = document.getElementById('sensorUpdatesThree');

//AUDIO
const audioP = document.createElement('p');
const audioT = document.createElement('p');
const audioUp1 = document.createElement('p');
const audioUp2 = document.createElement('p');
const audioUp3 = document.createElement('p');
const audioUpdates = document.createElement('p');
sensUpdates.textContent = 'Updates:';
const audioPurposeInput = document.getElementById('audioPurpose');
const audioTypeInput = document.getElementById('audioType');
const audioUpdatesOneInput = document.getElementById('audioUpdatesOne');
const audioUpdatesTwoInput = document.getElementById('audioUpdatesTwo');
const audioUpdatesThreeInput = document.getElementById('audioUpdatesThree');

submitButton.onclick = function (event) {

  //PRINTING VISUAL
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

  //PRINTING LOCATION
  const locPurpose = locPurposeInput.value;
  const locUpdates1 = locUpdatesOneInput.value;
  const locUpdates2 = locUpdatesTwoInput.value;
  const locUpdates3 = locUpdatesThreeInput.value;
  const message1 = document.createElement('p');
  message1.textContent = 'Purpose: '
  locP.textContent = locPurpose;
  locUp1.textContent = locUpdates1;
  locUp2.textContent = locUpdates2;
  locUp3.textContent = locUpdates3;
  document.body.appendChild(message1);
  document.body.appendChild(locP);
  document.body.appendChild(locUpdates);
  document.body.appendChild(locUp1);
  document.body.appendChild(locUp2);
  document.body.appendChild(locUp3);

  //PRINTING SENSOR
  const sensPurpose = sensPurposeInput.value;
  const sensType = sensTypeInput.value;
  const sensUpdates1 = sensUpdatesOneInput.value;
  const sensUpdates2 = sensUpdatesTwoInput.value;
  const sensUpdates3 = sensUpdatesThreeInput.value;
  const sensMessage = document.createElement('p');
  const sensMessageType = document.createElement('p');
  sensMessage.textContent = 'Purpose: '
  sensP.textContent = sensPurpose;
  sensMessageType.textContent = 'Type: '
  sensT.textContent = sensType;
  sensUp1.textContent = sensUpdates1;
  sensUp2.textContent = sensUpdates2;
  sensUp3.textContent = sensUpdates3;
  document.body.appendChild(sensMessage);
  document.body.appendChild(sensP);
  document.body.appendChild(sensMessageType);
  document.body.appendChild(sensT);
  document.body.appendChild(sensUpdates);
  document.body.appendChild(sensUp1);
  document.body.appendChild(sensUp2);
  document.body.appendChild(sensUp3);

  //PRINTING AUDIO
  const audioPurpose = audioPurposeInput.value;
  const audioType = audioTypeInput.value;
  const audioUpdates1 = audioUpdatesOneInput.value;
  const audioUpdates2 = audioUpdatesTwoInput.value;
  const audioUpdates3 = audioUpdatesThreeInput.value;
  const audioMessage = document.createElement('p');
  const audioMessageType = document.createElement('p');
  audioMessage.textContent = 'Purpose: '
  audioP.textContent = audioPurpose;
  audioMessageType.textContent = 'Type: '
  audioT.textContent = audioType;
  audioUp1.textContent = audioUpdates1;
  audioUp2.textContent = audioUpdates2;
  audioUp3.textContent = audioUpdates3;
  document.body.appendChild(audioMessage);
  document.body.appendChild(audioP);
  document.body.appendChild(audioMessageType);
  document.body.appendChild(audioT);
  document.body.appendChild(audioUpdates);
  document.body.appendChild(audioUp1);
  document.body.appendChild(audioUp2);
  document.body.appendChild(audioUp3);

};

//NEW FORM
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  // form.reset();
  // let index = 0;
  // const active = document.querySelector('form .step.active');
  // index = step.indexOf(active);
  // step[index].classList.remove('active');
  // steps[0].classList.add('active');
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
