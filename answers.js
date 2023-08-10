// JavaScript Code
document.getElementById("question-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission


  
  // Retrieve form values
  var username = document.getElementById("username").value;
  var name = document.getElementById("name").value;
  var duration = document.getElementById("duration").value;
  var tissueType1 = document.getElementById("tissue_type_1").value;
  var tissueType2 = document.getElementById("tissue_type_2").value;
  var orthopedic = document.getElementById("orthopedic").value;
  
  var userInfo = document.getElementById("user-info");
  if (userInfo) {
    userInfo.innerHTML = "Username: " + username + "<br>Implant Name: " + name;
  }

  var conclusion = "";
  var conclusionTable = document.getElementById("conclusion-table");
  conclusionTable.innerHTML = ""; // Clear the table before updating it
  
  
  
  var chemicalTests = {
    'Tests for leachables and extractable materials': [
      'Gas Chromatography (GC)',
      'Liquid Chromatography (LC)',
      'Mass Spectrometry (MS)',
      'Inductively Coupled Plasma Spectroscopy (ICP)',
      'Fourier Transform Infrared Spectroscopy (FTIR)',
      'Infrared Spectroscopy (IR)',
      'Mass Spectrometry',
      'Residual Solvents',
      'Atomic Absorption Spectroscopy (AAS)',
      'Inductively Coupled Plasma Spectroscopy (ICP)'
    ],
    'Bulk Material Characterization': [
      'Atomic Absorption Spectroscopy (AAS)',
      'Inductively Coupled Plasma Spectroscopy (ICP)',
      'Thermal Analysis',
      'Infrared Spectroscopy Analysis for Identity and Estimation of Gross Composition (Reflectance Spectroscopy, Transmission Spectroscopy)'
    ],
    'Surface Characterization': [
      'IR Reflectance Spectroscopy',
      'Scanning Electron Microscopy (SEM)'
    ]
  };
  var mechanicalTests = {
    'Tensile Test': 'Measures the behavior of materials under tensile load to determine its strength, stiffness, and ductility (stress, strain, yield deformation).',
    'Compression Test': 'Measures the behavior of materials under compressive load to determine its compressive strength, stiffness, and deformation.',
    'Torsion Test': 'Measures the behavior of materials under torsional load (angular) to determine its torsional strength, stiffness, and ductility.',
    'Fatigue Test': 'Measures the behavior of materials under cyclic load applied at different angles to determine its fatigue strength and fatigue life.',
    'Fracture Test': 'Measures the required energy that will cause an already cracked material to fully break.',
    'Hardness Test': 'Measures the ability of materials to resist indentation, scratching, or deformation. There are different hardness tests, such as Brinell, Rockwell, and Vickers, which use different methods to measure hardness.',
    'Impact Test': 'Measures the behavior of materials under sudden impact or shock load to determine their impact strength and toughness.',
    'Creep Test': 'Also known as stress-relaxation test, it provides an idea of the behavior of the material under a constant stress.',
    'Nondestructive Testing': 'A set of testing that provides an assessment of the material\'s mechanical property without damaging the original material properties.',
};


  if (duration === "less_than_24_hours" && tissueType1 === "no" && tissueType2 === "no" && orthopedic === "no") {
    // less than 24 hour implant with no direct contact to blood bone or tissue > something is wrong 

    conclusion = "There is an error based on your answers, please try again.";
   }
   else if (duration === "less_than_24_hours" && tissueType1 === "no" && tissueType2 === "yes" && orthopedic === "no") {
    // less than 24 hour implant , with direct contact to bone or tissue but it is not orthopedic or dental 

    
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";

    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
    };

    // format for creating  a table 
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
  } 
  else if (duration === "less_than_24_hours" && tissueType1 === "no" && tissueType2 === "yes" && orthopedic === "yes") {
    // less than 24 hour implant , with direct contact to bone or tissue and it is orthopedic or dental
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.'
    };
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Mechanical Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in mechanicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + mechanicalTests[test] + "</td></tr>";
    }
  } 
  else if (duration === "less_than_24_hours" && tissueType1 === "yes" && tissueType2 === "no" && orthopedic === "no") {
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    // this is the case of blood contact  and less than 24 hours 

    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'subchronic toxicity ': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity' :'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation' : 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Hemocompatibility' : 'Measures the potential of the material to cause an adverse reaction to blood.',

    };

    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }

  }

  
  else if (duration === "less_than_24_hours" && tissueType1 === "yes" && tissueType2 === "yes" && orthopedic === "yes") 
  // this is the case of blood contact AND bone or other tissue and less than 24 hours and orthopedic or dental > something is wrong 

  {
    conclusion = "For the implant named " +name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "no" && tissueType2 === "no" && orthopedic === "no")
  // this is the case of no direct contact to bone or tissue and 24 hours to 30 days and not orthopedic or dental > something is wrong
  {
    conclusion = "There is an error based on your answers, please try again.";

  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "no" && tissueType2 === "yes" && orthopedic === "no")
  // this is the case of  direct contact to bone or tissue and 24 hours to 30 days and not orthopedic or dental 
  {
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'Subchronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity': 'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
    }
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "no" && tissueType2 === "yes" && orthopedic === "yes")
  {
    // this is the case of  direct contact to bone or tissue and 24 hours to 30 days and an orthopedic or dental
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'Subchronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity': 'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
    }
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Mechanical Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in mechanicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + mechanicalTests[test] + "</td></tr>";
    }
  } 

  else if (duration === "24_hours_to_30_days" && tissueType1 === "yes" && tissueType2 === "yes" && orthopedic === "no")
  {
    // this is the case of  direct contact to bone or tissue and blood  and 24 hours to 30 days and  not an orthopedic or dental
    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "yes" && tissueType2 === "no" && orthopedic === "no")
  {
    // this is the case of blood direct contact  implant for 24_hours_to_30_days and not orthopedic or dental

    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'Subchronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity': 'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Hemocompatibility': 'Measures the potential of the material to cause an adverse reaction to blood.'
    }
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "yes" && tissueType2 === "no" && orthopedic === "yes")
  {
    // this is the case of blood direct contact  implant for 24_hours_to_30_days and orthopedic or dental
  conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "yes" && tissueType2 === "yes" && orthopedic === "no") {
    // this is the case of  blood direct contact  implant for more than 30 days and not orthopedic or dental and direct contact to bone or tissue
    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "24_hours_to_30_days" && tissueType1 === "yes" && tissueType2 === "yes" && orthopedic === "yes")
  {
    // this is the case of blood direct contact  implant for 24_hours_to_30_days and orthopedic or dental and direct contact to bone or tissue

    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "more_than_30_days" && tissueType1 === "no" && tissueType2 === "no" && orthopedic === "yes") {
    // this is the case of  no blood direct contact  implant for more than 30 days and orthopedic or dental and no direct contact to bone or tissue
    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "more_than_30_days" && tissueType1 === "no" && tissueType2 === "yes" && orthopedic === "yes")
  {
    // this is the case of  no blood direct contact  implant for more than 30 days and orthopedic or dental and direct contact to bone or tissue
  
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'Subchronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity': 'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Hemocompatibility': 'Measures the potential of the material to cause an adverse reaction to blood.',
      'Chronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a long period of time.',
      'Caricinogenicity': 'Measures the potential of the material to cause cancer.',
      
    }
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Mechanical Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in mechanicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + mechanicalTests[test] + "</td></tr>";
    }
  } 
  else if (duration === "more_than_30_days" && tissueType1 === "no" && tissueType2 === "yes" && orthopedic === "no")
  {
    // this is the case of  no blood direct contact  implant for more than 30 days and not orthopedic or dental and direct contact to bone or tissue
    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'Subchronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity': 'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Hemocompatibility': 'Measures the potential of the material to cause an adverse reaction to blood.',
      'Chronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a long period of time.',
      'Caricinogenicity': 'Measures the potential of the material to cause cancer.',
      
    }
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }

  }

  else if (duration === "more_than_30_days" && tissueType1 === "yes" && tissueType2 === "no" && orthopedic === "no") {
    // this is the case of  blood direct contact  implant for more than 30 days and not orthopedic or dental and no direct contact to bone or tissue

    conclusion += "<tr><td colspan='2'><strong>For the implant named " + name + ", the suggested biocompatibility tests are as follows:</strong></td></tr>";
    var biologicalTests = {
      'Cytotoxicity': 'Measures the toxicity of the material to cells.',
      'Sensitization': 'Measures the potential of the material to cause an allergic reaction.',
      'Irritation or Intracutaneous Reactivity': 'Measures the potential of the material to cause irritation or inflammation.',
      'Systemic Toxicity': 'Measures the potential of the material to cause toxicity to the body.',
      'Pyrogenicity': 'Measures the potential of the material to cause fever.',
      'Subchronic Toxicity':'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Genotoxicity': 'Measures the potential of the material to cause damage to the genetic information within a cell.',
      'Implantation': 'Measures the potential of the material to cause toxicity to the body over a period of time.',
      'Hemocompatibility': 'Measures the potential of the material to cause an adverse reaction to blood.',
      'Chronic Toxicity': 'Measures the potential of the material to cause toxicity to the body over a long period of time.',
      'Caricinogenicity': 'Measures the potential of the material to cause cancer.',

    }
    conclusion += "<tr><td><strong>Chemical Tests</strong></td><td><strong>Examples</strong></td></tr>";
    for (var category in chemicalTests) {
      conclusion += "<tr><td>" + category + "</td><td>" + chemicalTests[category].join("</td></tr><tr><td></td><td>") + "</td></tr>";
    }
    conclusion += "<tr><td><strong>Biological Tests</strong></td><td><strong>Description</strong></td></tr>";
    for (var test in biologicalTests) {
      conclusion += "<tr><td>" + test + "</td><td>" + biologicalTests[test] + "</td></tr>";
    }
  }
  else if (duration === "more_than_30_days" && tissueType1 === "yes" && tissueType2 === "no" && orthopedic === "yes") {
    // this is the case of  blood direct contact  implant for more than 30 days and orthopedic or dental and no direct contact to bone or tissue

    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "more_than_30_days" && tissueType1 === "yes" && tissueType2 === "yes" && orthopedic === "no") {
    // this is the case of  blood direct contact  implant for more than 30 days and not orthopedic or dental and direct contact to bone or tissue
    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }
  else if (duration === "more_than_30_days" && tissueType1 === "yes" && tissueType2 === "yes" && orthopedic === "yes") {
    // this is the case of  blood direct contact  implant for more than 30 days and orthopedic or dental and direct contact to bone or tissue
    conclusion = "For the implant named " + name + ", there is some limitation in the suggested biocompatibility tests. Please  revise or answer to the questionare again.";
  }

  else {
    conclusion = "Thank you for completing the questionnaire.";
  }

  // Update the table content with the generated conclusion
  conclusionTable.innerHTML = conclusion;

  // Display the conclusion section
  document.getElementById("question-form").style.display = "none";
  document.getElementById("conclusion").style.display = "block";
  
  // Scroll to the conclusion section
  // Sample code for answers.js
console.log('This is the answers file.');

});
