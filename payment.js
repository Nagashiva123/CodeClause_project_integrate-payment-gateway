// Handle form submission
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form inputs
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    
    // Validate form inputs
    if (cardNumber && expiryDate && cvv) {
      // Perform further processing (e.g., send data to server for transaction processing)
      alert("Payment processed successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  });
  