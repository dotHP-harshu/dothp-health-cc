# **Project Report: DotHP Health Companion \- Disease Prediction and Recommendation System**

## **1\. Introduction**

In today's fast-paced world, access to timely and relevant health information is crucial. The "DotHP Health Companion" is a web-based application designed to assist individuals in understanding potential health conditions based on their symptoms and to provide actionable recommendations for managing those conditions. This system leverages machine learning to predict diseases and integrates comprehensive datasets to offer descriptions, precautions, medication suggestions, dietary advice, and workout routines. The aim is to empower users with preliminary health insights and guidance, promoting proactive health management.

## **2\. Problem Statement**

Many individuals experience symptoms but lack immediate access to medical professionals or reliable information to understand their potential health issues. Self-diagnosis without proper guidance can lead to misinformation or anxiety. There is a need for an accessible, user-friendly system that can provide preliminary disease predictions and holistic recommendations (medication, diet, exercise, precautions) based on reported symptoms, thereby bridging the information gap and encouraging informed health decisions.

## **3\. Objectives**

The primary objectives of the DotHP Health Companion project are:

- To develop a web application that allows users to input symptoms and receive a probable disease prediction.
- To integrate a pre-trained machine learning model for accurate disease prediction based on symptom input.
- To provide comprehensive information related to the predicted disease, including its description, necessary precautions, and recommended medications.
- To offer lifestyle guidance such as dietary suggestions and workout routines tailored to the predicted condition.
- To create an intuitive and responsive user interface for seamless interaction.

## **4\. Methodology**

The project follows a standard software development methodology, incorporating data processing, machine learning, and web development principles.

### **4.1 Data Collection and Preparation**

The system relies on several CSV datasets, which serve as the knowledge base for recommendations. These datasets include:

- description.csv: Contains detailed descriptions of various diseases.
- precautions_df.csv: Lists precautions to be taken for specific diseases.
- medications.csv: Provides medication recommendations.
- diets.csv: Offers diet plans.
- workout_df.csv: Suggests workout routines.
- Symptom-severity.csv, symtoms_df.csv, Training.csv: Used for training and mapping symptoms for the machine learning model.

Data preparation involved cleaning, structuring, and mapping symptoms to numerical representations suitable for machine learning input.

### **4.2 Machine Learning Model**

A Support Vector Classifier (SVC) model was trained on a dataset of symptoms and corresponding diseases. This pre-trained model, svc.pkl, is loaded into the application. The model takes a vector representing the presence or absence of various symptoms and outputs a predicted disease.

### **4.3 Web Application Development**

The web application is developed using the Flask framework in Python.

- **Frontend:** Built with HTML, CSS (using Tailwind CSS for styling), and JavaScript for user interaction. The index.html serves as the main interface for symptom input and result display.
- **Backend:** main.py handles all server-side logic, including:
  - Loading datasets and the pre-trained SVC model.
  - Processing user symptom input.
  - Invoking the prediction model.
  - Retrieving and formatting relevant information (description, precautions, medications, diet, workout) based on the predicted disease.
  - Rendering HTML templates to display results to the user.

## **5\. System Architecture**

The architecture of the DotHP Health Companion is a typical client-server model:

```
+-------------------+       +-----------------------+       +-------------------+
|     User (Client) |       |     Web Browser       |       |     Flask Server  |
|                   |       | (HTML, CSS, JS)       |       |   (Python)        |
+-------------------+       +-----------------------+       +-------------------+
        |                             |                               |
        |  1. Enter Symptoms          |                               |
        V                             V                               |
+---------------------------------------------------------------------+
|                               HTTP Request                          |
|                               (POST /predict)                       |
+---------------------------------------------------------------------+
        |                                                               |
        |                                                               V
        |                                                       +-------------------+
        |                                                       |   main.py         |
        |                                                       | - Load Data       |
        |                                                       | - Load svc.pkl    |
        |                                                       | - Process Symptoms|
        |                                                       | - Predict Disease |
        |                                                       | - Fetch Details   |
        |                                                       +---------+---------+
        |                                                                 |
        |                                                                 | 2. Query Datasets
        |                                                                 V
        |                                                       +-------------------+
        |                                                       |   Datasets/       |
        |                                                       | - description.csv |
        |                                                       | - medications.csv |
        |                                                       | - diets.csv       |
        |                                                       | - workout_df.csv  |
        |                                                       | - precautions.csv |
        |                                                       +-------------------+
        |                                                                 |
        |                                                                 | 3. Render Template
        V                                                                 V
+---------------------------------------------------------------------+
|                               HTTP Response                         |
|                               (Rendered index.html with results)    |
+---------------------------------------------------------------------+
        |                             ^
        |                             | 4. Display Results
        V                             |
+-------------------+       +-----------------------+
|     User (Client) |       |     Web Browser       |
+-------------------+       +-----------------------+
```

**Components:**

- **Frontend (Static files & Templates):** HTML files (index.html, about.html, etc.), CSS (output.css), and JavaScript (script.js) handled by the user's web browser.
- **Backend (Flask Application):** main.py acts as the core logic. It initializes the Flask app, loads necessary data and the ML model, and defines routes for handling user requests.
- **Datasets:** Stored locally in the datasets/ directory, providing the knowledge base for recommendations.
- **Machine Learning Model:** The svc.pkl file in models/ is the pre-trained SVC model used for disease prediction.

## **6\. Features**

The DotHP Health Companion offers the following key features:

- **Symptom-Based Disease Prediction:** Users can input a list of symptoms, and the system will predict the most probable disease.
- **Disease Description:** Provides a concise description of the predicted disease.
- **Precautions:** Offers a list of precautions to be taken for the predicted illness.
- **Medication Recommendations:** Suggests relevant medications.
- **Dietary Advice:** Recommends suitable diet plans.
- **Workout Routines:** Provides exercise suggestions.
- **User-Friendly Interface:** A clean and intuitive web interface built with HTML and Tailwind CSS.
- **Informational Pages:** Includes "About Us," "Contact Us," "Developer," and "Blog" pages for additional information and engagement.

## **7\. Implementation Details**

### **7.1 Frontend (templates/index.html)**

The index.html file is the central user interface. It contains a form for symptom input. Upon submission, it displays the predicted disease along with detailed information fetched from the backend. The styling is handled by output.css, likely generated by Tailwind CSS, ensuring a modern and responsive design.

### **7.2 Backend (main.py)**

The main.py script orchestrates the entire application flow:

- **Initialization:** Sets up the Flask application and loads all necessary datasets and the svc.pkl model.
- **helper(disease) function:** This utility function is crucial for retrieving all associated information (description, precautions, medications, diet, workout) for a given predicted disease from the loaded DataFrames.
- **get_predicted_value(patient_symptoms) function:** This function takes the raw symptom input from the user, processes it into a numerical vector, and feeds it to the SVC model for prediction. It then maps the numerical prediction back to a human-readable disease name.
- **Routes:**
  - The root route (/) renders the initial index.html page.
  - The /predict route handles the POST request from the symptom submission form. It calls get_predicted_value to get the disease and then helper to gather all related recommendations. Finally, it re-renders index.html with the results passed as context.

## **8\. Conclusion**

The DotHP Health Companion successfully delivers a functional prototype of a disease prediction and recommendation system. It effectively combines machine learning capabilities with a comprehensive knowledge base to provide users with valuable preliminary health insights and actionable advice. The modular design, clear separation of concerns (frontend, backend, data, model), and use of established technologies like Flask and Pandas make it a robust and extensible application.

## **9\. Future Scope**

Several enhancements can be considered for future development:

- **Improved Symptom Input:** Implement an auto-suggestion or dropdown feature for symptom input to reduce errors and improve user experience.
- **Confidence Score:** Display a confidence score for the predicted disease to give users an idea of the model's certainty.
- **User Accounts and History:** Allow users to create accounts, save their symptom history, and track their health over time.
- **Integration with APIs:** Potentially integrate with external medical APIs for more dynamic and up-to-date information.
- **Doctor Consultation Integration:** Offer a feature to find nearby doctors or schedule online consultations.
- **Advanced ML Models:** Explore more advanced machine learning models or ensemble techniques for potentially higher prediction accuracy.
- **Personalized Recommendations:** Refine recommendations based on user demographics (age, gender, existing conditions).
- **Multilingual Support:** Extend the application to support multiple languages.
- **Mobile Application:** Develop native mobile applications for Android and iOS for broader accessibility.
