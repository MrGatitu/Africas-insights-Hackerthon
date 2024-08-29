document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way (reloading the page)

    // Capture form data
    // const formData = {
    const username= document.getElementById('username').value
    const phoneNumbers =  document.getElementById('phone').value
    // };

    // Send POST request to the backend
    fetch('http://localhost:3000/api/v1/check-sim-swap', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'sandbox',
            phoneNumbers : [phoneNumbers],
        }) // Send form data as JSON
    })
    .then(response => response.json())
    // .catch(error => {
    //     console.error('Error:', error);
    // });
});
