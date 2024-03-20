document.getElementById('generateFile').addEventListener('click', function() {
    // Get all input elements
    const inputFields = document.querySelectorAll('input[type="text"]');
  
    // Create an array to store input values
    const inputValues = [];
  
    // Loop through each input field
    inputFields.forEach(function(inputField) {
      // Get the value of the input field
      const value = inputField.value.trim() || 'N/a';
      // Add the value to the array
      inputValues.push(value);
    });
  
    // Create a text string with the input values separated by newline characters
    const textContent = inputValues.join('\n');
  
    // Create a Blob object containing the text content
    const blob = new Blob([textContent], { type: 'text/plain' });
  
    // Create a link element to download the text file
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'inputs.txt';
  
    // Append the link to the document body and click it programmatically
    document.body.appendChild(link);
    link.click();
  
    // Clean up
    document.body.removeChild(link);
  });
  