const requestURL = 'json/businesses.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Display the businesses data

        const businessData = jsonObject['businesses'];
        let i = 1

        businessData.forEach(business => {
            document.getElementById(`website${i}`).textContent = business.name;
            document.getElementById(`website${i}`).setAttribute('href', business.website);
            document.getElementById(`logo${i}`).setAttribute('src', business.logo);


            if (business.name == "Pirate Supply Store") {
                for (let j = 0; j < 3; j++) {
                    
                    // Create paragraph element
                    let p = document.createElement('p');
                    // Fill text content with phone number
                    p.textContent = business.phone[j];
                    // Add paragraph element to div.phone
                    document.getElementById('phone1').appendChild(p);
                    
                    // Create paragraph element
                    let p1 = document.createElement('p');
                    // Fill text content with phone number
                    p1.textContent = business.locations[j];
                    document.getElementById('location1').appendChild(p1);
                }
            } else if (business.name == "Mollusk Surf Shop") {
                for (let k = 0; k < 3; k++) {
                    
                    // Create paragraph element
                    let p = document.createElement('p');
                    // Fill text content with phone number
                    p.textContent = business.phone[k];
                    // Add paragraph element to div.phone
                    document.getElementById('phone7').appendChild(p);
                    
                    // Create paragraph element
                    let p1 = document.createElement('p');
                    // Fill text content with phone number
                    p1.textContent = business.locations[k];
                    document.getElementById('location7').appendChild(p1);
                }
            } else if (business.name == "Bacon Bacon"){
                // Create paragraph element
                let p = document.createElement('p');
                // Fill text content with phone number
                p.textContent = business.phone;
                // Add paragraph element to div.phone
                document.getElementById('phone2').appendChild(p);

                for (let l = 0; l < 2; l++) {
                    // Create paragraph element
                    let p1 = document.createElement('p');
                    // Fill text content with phone number
                    p1.textContent = business.locations[l];
                    document.getElementById('location2').appendChild(p1);
                }
            } else {
                // Create paragraph element
                let p = document.createElement('p');
                // Fill text content with phone number
                p.textContent = business.phone;
                // Add paragraph element to div.phone
                document.getElementById(`phone${i}`).appendChild(p);
                // Create a paragraph element
                let p1 = document.createElement('p');
                // Fill text content with location
                p1.textContent = business.location;
                // Add paragraph element to div
                document.getElementById(`location${i}`).appendChild(p1)


            }
            i++
        });
    })