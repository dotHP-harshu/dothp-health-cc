// Script for navbar -----------------------------------------------------------------
const hamburgerBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const icons = document.getElementById("icons");
const mobileMenu = document.getElementById("mobile-menu");
let isShowingMenu = false;

icons.addEventListener("click", () => {
  if (!isShowingMenu) {
    mobileMenu.classList.add("flex");
    mobileMenu.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    hamburgerBtn.classList.add("hidden");
    isShowingMenu = true;
  } else {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
    closeBtn.classList.add("hidden");
    hamburgerBtn.classList.remove("hidden");
    isShowingMenu = false;
  }
});
// Script for navbar -----------------------------------------------------------------

// Logic for home page -----------------------------------------------------------------
const inputBox = document.getElementById("input-box");
const symptomContainer = document.getElementById("symptom-container");
const realInput = document.getElementById("real-input");
const form = document.getElementById("form");

const inputedSymptoms = [];

const setValuesToRealInput = (arr) => {
  realInput.value = arr.join(",");
};

// make a tag element from symptom name
const makeSymptomTag = (symptom, arr) => {
  let symptomTag = document.createElement("div");
  symptomTag.classList.add(
    "symptom-tag",
    "w-fit",
    "flex",
    "justify-center",
    "items-center",
    "gap-1",
    "px-2",
    "py-1",
    "rounded-sm",
    "bg-top-surface-dark"
  );
  symptomTag.innerHTML = `${symptom} `;
  let crossBtn = document.createElement("span");
  crossBtn.innerHTML = `<img
                src="./static/images/close.svg"
                alt="cut"
                class="cursor-pointer w-6 h-auto"
            />`;
  crossBtn.addEventListener("click", () => {
    symptomTag.remove();
    inputedSymptoms.splice(inputedSymptoms.indexOf(symptom), 1);
    addSymptomTags(arr);
  });
  symptomTag.appendChild(crossBtn);
  return symptomTag;
};

// add all tags in the container
const addSymptomTags = (arr) => {
  if (arr.length === 0)
    return (symptomContainer.innerHTML = `<p class="text-sm text-text-muted-dark">Symptoms will be here.. </p>`);

  symptomContainer.innerHTML = "";
  const tagsArray = arr.map((symptom) => makeSymptomTag(symptom, arr));
  tagsArray.forEach((tag) => symptomContainer.appendChild(tag));
};

// check the real input validation of form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputedSymptoms.length === 0)
    return alert("Input atleat one symptom. 😔");
  form.submit();
});

// Logic for autosuggestions ---------------------------------------------------------------

const symptoms = [
  "itching",
  "skin_rash",
  "nodal_skin_eruptions",
  "continuous_sneezing",
  "shivering",
  "chills",
  "joint_pain",
  "stomach_pain",
  "acidity",
  "ulcers_on_tongue",
  "muscle_wasting",
  "vomiting",
  "burning_micturition",
  "spotting_urination",
  "fatigue",
  "weight_gain",
  "anxiety",
  "cold_hands_and_feets",
  "mood_swings",
  "weight_loss",
  "restlessness",
  "lethargy",
  "patches_in_throat",
  "irregular_sugar_level",
  "cough",
  "high_fever",
  "sunken_eyes",
  "breathlessness",
  "sweating",
  "dehydration",
  "indigestion",
  "headache",
  "yellowish_skin",
  "dark_urine",
  "nausea",
  "loss_of_appetite",
  "pain_behind_the_eyes",
  "back_pain",
  "constipation",
  "abdominal_pain",
  "diarrhoea",
  "mild_fever",
  "yellow_urine",
  "yellowing_of_eyes",
  "acute_liver_failure",
  "fluid_overload",
  "swelling_of_stomach",
  "swelled_lymph_nodes",
  "malaise",
  "blurred_and_distorted_vision",
  "phlegm",
  "throat_irritation",
  "redness_of_eyes",
  "sinus_pressure",
  "runny_nose",
  "congestion",
  "chest_pain",
  "weakness_in_limbs",
  "fast_heart_rate",
  "pain_during_bowel_movements",
  "pain_in_anal_region",
  "bloody_stool",
  "irritation_in_anus",
  "neck_pain",
  "dizziness",
  "cramps",
  "bruising",
  "obesity",
  "swollen_legs",
  "swollen_blood_vessels",
  "puffy_face_and_eyes",
  "enlarged_thyroid",
  "brittle_nails",
  "swollen_extremeties",
  "excessive_hunger",
  "extra_marital_contacts",
  "drying_and_tingling_lips",
  "slurred_speech",
  "knee_pain",
  "hip_joint_pain",
  "muscle_weakness",
  "stiff_neck",
  "swelling_joints",
  "movement_stiffness",
  "spinning_movements",
  "loss_of_balance",
  "unsteadiness",
  "pus_filled_pimples",
  "blackheads",
  "scurring",
  "bladder_discomfort",
  "foul_smell_of_urine",
  "continuous_feel_of_urine",
  "passage_of_gases",
  "internal_itching",
  "toxic_look_typhos",
  "depression",
  "irritability",
  "muscle_pain",
  "altered_sensorium",
  "red_spots_over_body",
  "belly_pain",
  "abnormal_menstruation",
  "dischromic_patches",
  "watering_from_eyes",
  "increased_appetite",
  "polyuria",
  "family_history",
  "mucoid_sputum",
  "rusty_sputum",
  "lack_of_concentration",
  "visual_disturbances",
  "receiving_blood_transfusion",
  "receiving_unsterile_injections",
  "coma",
  "stomach_bleeding",
  "distention_of_abdomen",
  "history_of_alcohol_consumption",
  "blood_in_sputum",
  "prominent_veins_on_calf",
  "palpitations",
  "painful_walking",
  "pus_filled_blisters",
  "red_sore_around_nose",
  "yellow_crust_ooze",
];

let symptomTagIndex = -1;

const suggestionContainer = document.getElementById("suggestion-container");

const makeSuggestionTag = (inputedValue, suggestion) => {
  const suggestionTag = document.createElement("div");
  suggestionTag.classList.add(
    "suggestion",
    "px-2",
    "py-1",
    "cursor-pointer",
    "w-full",
    "text-sm",
    "bg-gradient-to-b",
    "from-surface-dark",
    "to-top-surface-dark",
    "tracking-tight",
    "whitespace-nowrap",
    "overflow-hidden"
  );
  suggestionTag.innerHTML = `<strong>${suggestion.substr(
    0,
    inputedValue.length
  )}</strong>${suggestion.substr(inputedValue.length)}`;
  suggestionTag.addEventListener("click", () => {
    inputedSymptoms.push(suggestion);
    addSymptomTags(inputedSymptoms);
    setValuesToRealInput(inputedSymptoms);
    inputBox.value = "";
    symptomTagIndex = -1;
    suggestionContainer.classList.add("hidden");
  });
  return suggestionTag;
};

// funtion to highlight the selected cell
const highlightSuggestion = (index) => {
  const suggestions = document.querySelectorAll(".suggestion");
  suggestions.forEach((s) =>
    s.classList.remove(
      "text-text-muted-dark",
      "border-2",
      "border-border-dark"
    )
  );
  suggestions[index].classList.add(
    "text-text-muted-dark",
    "border-2",
    "border-border-dark"
  );
};

// handle auto suggestion
inputBox.addEventListener("input", (e) => {
  const inputedValue = e.target.value;
  if (inputedValue == "") return suggestionContainer.classList.add("hidden");
  suggestionContainer.classList.remove("hidden");
  const filterSuggestion = symptoms.filter((s) =>
    s
      .trim()
      .toLocaleLowerCase()
      .startsWith(inputedValue.trim().toLocaleLowerCase())
  );
  const tags = filterSuggestion.map((s) => makeSuggestionTag(inputedValue, s));
  suggestionContainer.innerHTML = "";
  tags.forEach((tag) => suggestionContainer.appendChild(tag));
});

// handle down arrows
inputBox.addEventListener("keydown", (e) => {
  let items = document.querySelectorAll(".suggestion");
  if (e.key === "ArrowDown") {
    if (symptomTagIndex >= items.length - 1) return symptomTagIndex = 0;
    symptomTagIndex++;
    highlightSuggestion(symptomTagIndex);
  }
  // handle up arrows
  if (e.key === "ArrowUp") {
    if (symptomTagIndex <= 0) return symptomTagIndex = items.length-1;
    symptomTagIndex--;
    highlightSuggestion(symptomTagIndex);
  }
  // handle enter
  if (e.key === "Enter") {
    if (items[symptomTagIndex]) items[symptomTagIndex].click();
  }
});

// remove suggestion container
document.addEventListener("click", (e) => {
  if (!suggestionContainer.contains(e.target)) {
    suggestionContainer.classList.add("hidden");
  }
});

// Logic for autosuggestions ---------------------------------------------------------------
