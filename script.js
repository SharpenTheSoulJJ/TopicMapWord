let lastButton = null;
let imageNumber = 0;
let currentTab = 1; // Default to the first tab
const lastImage = {};  
let currentButtonClickName = '';
let lastButtonElement = null; 

// Function to set the current tab and refresh the table content
function setTab(tabNumber) {
    currentTab = tabNumber;
    // Find the table section and other related elements
    const tableSection = document.querySelector('table');
    const imageFrame = document.getElementById('imageFrame');
    const alertLabel = document.getElementById('alertlabel');
    const buttonContainer = document.getElementById('buttonContainer');

    // Check if the current tab is Tab 1
    if (currentTab === 1) {
        // Make elements visible for Tab 1
        tableSection.style.display = '';
        imageFrame.style.display = '';
        alertLabel.style.display = '';
        buttonContainer.style.display = '';
    } else {
        // Hide elements for Tabs 2 and 3
        tableSection.style.display = 'none';
        imageFrame.style.display = 'none';
        alertLabel.style.display = 'none';
        buttonContainer.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    try {
        const table = document.getElementById("myTable");
        for (let i = 0; i < 9; i++) {
            const row = table.insertRow();
            for (let j = 0; j < 7; j++) {
                const cell = row.insertCell();
                // Add buttons to corner, middle, and center cells
                if (((i === 0)  && (j === 0))  ||
				    ((i === 0)  && (j === 1))  ||
				    ((i === 1)  && (j === 0))  ||
                    ((i === 1)  && (j === 1))  ||
					((i === 5)  && (j === 0))  ||
					((i === 8)  && (j === 0))  ||
					((i === 0)  && (j === 3))  ||
				    ((i === 8)  && (j === 3))  ||
					((i === 5)  && (j === 3))  ||
				    ((i === 5)  && (j === 0))  ||
					((i === 6)  && (j === 0))  ||
                    ((i === 6)  && (j === 3))  ||
					((i === 1)  && (j === 3))  ||
					((i === 3)  && (j === 0))  ||
                    ((i === 3)  && (j === 3))  ||
					((i === 5)  && (j === 6))  ||
					((i === 0)  && (j === 6))  ||
					((i === 1)  && (j === 6))  || 
					((i === 2)  && (j === 6))  || 
					((i === 8)  && (j === 6))) {
                    const button = document.createElement("button");
                    let buttonColor = '';

                    
					
					if ((i === 0) && (j === 0)) {
                        button.innerHTML = "New Life <br> &#127793;&#127795;&#127799;"; // Emoji represented using HTML entities   //https://www.cyberdefinitions.com/emojis.html
                        buttonColor = 'rgb(165, 42, 20)'; // brown
                        lastImage["NewLife"] = 11;
                    }
					
                    if ((i === 0) && (j === 1)) {
                        button.innerHTML = "New Family <br> &#127968;"; // Emoji represented using HTML entities   //https://www.cyberdefinitions.com/emojis.html
                        buttonColor = 'rgb(165, 42, 20)'; // brown
                        lastImage["NewFamily"] = 8;
                    }					
					
                    if ((i === 1) && (j === 0)) {
                        button.innerHTML = "New Covenant <br> &#128220;&#128220;&#128220;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(165, 42, 42)'; // brown
                        lastImage["NewCovenant"] = 4;
                    }

                    if ((i === 1) && (j === 1)) {
                        button.innerHTML = "New Heart <br> &#10084;&#65039;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(165, 42, 42)'; // brown
                        lastImage["NewHeart"] = 8;
                    }
					
					
                    if ((i === 0) && (j === 3)) {
                        button.innerHTML = "Bear much Fruits <br> &#127818;&#127815;&#127825;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(104, 249, 249)'; // light blue
                        lastImage["BearmuchFruits"] = 5;
                    }
                    if ((i === 1) && (j === 3)) {
                        button.innerHTML = "Joy <br> &#129336;&#128516;&#128514;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(104, 249, 290)'; // light blue
                        lastImage["Joy"] = 4;
                    }
					
					
                    if ((i === 8) && (j === 0)) {
                        button.innerHTML = "Relationship <br> &#128066;&#128265;&#128266;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(0, 128, 0)'; // green
                        lastImage["Relationship"] = 13;
                    }
					
					if ((i === 3) && (j === 0)) {
                        button.innerHTML = "Live by Faith <br> &#129495;&#127940;&#128170;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(104, 209, 209)'; // blue
                        lastImage["LivebyFaith"] = 28;
                    }
					
                    if ((i === 5) && (j === 0)) {
                        button.innerHTML = "Wait on the Spirit <br> &#128330;&#128330;&#128330;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(144, 238, 100)'; // light green
                        lastImage["WaitontheSpirit"] = 20;
                    }
					
                    if ((i === 6) && (j === 0)) {
                        button.innerHTML = "Live by Spirit <br> &#128168;&#129413;&#128168;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(144, 238, 144)'; // light green
                        lastImage["LivebySpirit"] = 20;
                    }
					
					if ((i === 8) && (j === 3)) {
                        button.innerHTML = "Body of Christ <br> &#128107;&#128107;&#128107;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(255, 165, 0)'; // orange
                        lastImage["BodyofChrist"] = 25;
                    }
					

                    if ((i === 3) && (j === 3)) {
                        button.innerHTML = "Grace <br> &#128524;&#128517;&#129303;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(104, 209, 209)'; // brown
                        lastImage["Grace"] = 13;
                    }

                    if ((i === 5) && (j === 3)) {
                        button.innerHTML = "Love <br> &#128150;&#128150;&#128150;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(255, 0, 0)'; // red
                        lastImage["Love"] = 19;
                    }

                    if ((i === 6) && (j === 3)) {
                        button.innerHTML = "Salvation <br> &#10013;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(255, 0, 0)'; // red
                        lastImage["Salvation"] = 8;
                    }


                    if ((i === 0) && (j === 6)) {
                        button.innerHTML = "Gaurd and Pray <br> &#128591;&#128481;&#128591;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(255, 255, 0)'; // yellow
                        lastImage["GaurdandPray"] = 14;
                    }
                    if ((i === 1) && (j === 6)) {
                        button.innerHTML = "Kingdom of God Inside <br> &#128161;&#128161;&#128161;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(255, 255, 50)'; // yellow
                        lastImage["KingdomofGodInside"] = 17;
                    }
                    if ((i === 2) && (j === 6)) {
                        button.innerHTML = "Holiness and Glory <br> &#128293;&#128293;&#128293;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(255, 255, 80)'; // yellow
                        lastImage["HolinessandGlory"] = 39;
                    }
                    if ((i === 5) && (j === 6)) {
                        button.innerHTML = "He is in Control <br> &#9889;&#128694;&#9889;"; // Emoji represented using HTML entities
                        buttonColor = 'rgb(237, 116, 237)'; // dark green
                        lastImage["HeisinControl"] = 10;
                    }
					
					
					if ((i === 8) && (j === 6)) {
                        button.innerHTML = "Worship <br> &#128588;&#128588;&#128588;"; // Emoji represented using HTML entities
                        buttonColor = 'pink'; // yellow
                        lastImage["Worship"] = 3;
                    }
                    

                    button.style.backgroundColor = buttonColor;
                    button.onclick = function () { handleButtonClick(this, i, j); };
                    cell.appendChild(button);
                }
            }
        }
    } catch (error) {
        alert("Error occurred while setting up the table: " + error.message);
    }

    const backButton = document.getElementById("backbtn");
    backButton.textContent = 'Back'; // Set the text for the back button
    backButton.onclick = function () {
        

                if (imageNumber > 1) { // Ensure imageNumber doesn't go below 1
                    imageNumber--;
                    if (lastButton) {
                        const parts = lastButton.split('_'); // Assuming lastButton format is 'row_col'
                        const row = parseInt(parts[0], 10);
                        const col = parseInt(parts[1], 10);
                        showImage(row, col, imageNumber, lastButtonElement); // Display the previous image
                    }
                }
    
    };
	
	showDefaultImage();
	
});


function handleButtonClick(buttonElement, row, col) {
    try
    {
        //alert("handleButtonClick");
        lastButtonElement = buttonElement;
        
        const currentButtonClickName_ = buttonElement.innerHTML.replace(/<br>.*/g, "").replace(/\s+/g, "");
        if (currentButtonClickName != currentButtonClickName_)
        {
                imageNumber = 0
        }
        currentButtonClickName = currentButtonClickName_;
        const lastNumberOfImage = lastImage[currentButtonClickName]; 

        //alert("imageNumber: " + imageNumber + " lastNumberOfImage: " + lastNumberOfImage + " lastButton:" + lastButton);


        if (imageNumber <= lastNumberOfImage)
        {
            const currentButton = `${row}_${col}`;
            if (imageNumber < lastNumberOfImage)
            {
                imageNumber++;
                lastButton = currentButton;
            }
            showImage(row, col, imageNumber, buttonElement);
        }
    }
    catch (exception) {
        alert('handleButtonClick Error:', exception);
    }  
}


const isTestingMode = false; // Set to false when not testing


function showImage(row, col, imgNumber, buttonElement) {
    try {
        const folderPath = `images_${currentTab}/folder_${row}_${col}/`;
        const imageName = `${imgNumber}.png`;
        const imageFrame = document.getElementById("imageFrame");

        // Clear previous image and show loading spinner along with loading text
        imageFrame.innerHTML = '<div class="loading" style="color: white;"><div class="spinner"></div><div>Loading scripture image...</div></div>';

        // Create new img element
        const img = new Image();
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';

        const loadImage = () => {
            const imageUrl = `${folderPath}${imageName}`;
            img.src = imageUrl;
            img.onload = () => {
                imageFrame.innerHTML = ''; // Clear loading indicator once the image has loaded
                imageFrame.appendChild(img);
                // Create and append the share icon
                const shareIcon = document.createElement("a");
                shareIcon.id = "shareIcon";
                shareIcon.innerHTML = '<img src="shareicon.svg" alt="Share" style="border: 2px solid white; border-radius: 50%;" />'; // Add border styling here
                shareIcon.style.position = "absolute";
                shareIcon.style.top = "10px";
                shareIcon.style.right = "10px";
                shareIcon.style.display = "block";
                shareIcon.style.cursor = "pointer";
                imageFrame.appendChild(shareIcon);

                shareIcon.addEventListener('click', function(event) {
                    try{
                    event.preventDefault();

                    downloadImage(imageUrl);

                    // Example: Share text via WhatsApp
                    const text = "Check out this image!";
                    const whatsappUrl = `https://wa.me/?image=${(imageUrl)}`;
                    window.open(whatsappUrl, '_blank');

                   
                 } catch (exception) {
                        alert('Error during sharing:', exception);
                    }   

                });
            };
            img.onerror = () => {
                imageFrame.innerHTML = '<div class="error">Error loading image</div>'; // Provide error handling
            };
        };

        if (isTestingMode) {
            // If in testing mode, delay loading
            setTimeout(loadImage, 2000); // Adjust delay as needed
        } else {
            // If not in testing mode, load immediately
            loadImage();
        }

        img.addEventListener('click', function () { handleButtonClick(buttonElement, row, col); });
    } catch (error) {
        alert("Error occurred while displaying the image: " + error.message);
    }
}


function downloadImage(imageUrl) {
    const imageDisplayUrl = 'image-display.html?image=' + encodeURIComponent(imageUrl);
    window.open(imageDisplayUrl, '_blank');
  }


function showDefaultImage()
{
    try {
    const imageName = `welcome.png`;

    const imageFrame = document.getElementById("imageFrame");

        // Clear previous image
        imageFrame.innerHTML = '';

        // Create new img element
        const img = new Image();
        img.src = `${imageName}`;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';

        imageFrame.appendChild(img);

    } catch (error) {
        alert("Error occurred while displaying the DefaultImage: " + error.message);
    }
}

document.getElementById('goToPaymentPage').addEventListener('click', function() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data.country_code === "ZA") { // If the user is in South Africa
                window.location.href = 'payment.html'; // Redirect to Yoco payment
            } else { // If the user is not in South Africa
                window.location.href = 'payment_paypal.html'; // Redirect to PayPal payment
            }
        })
        .catch(error => {
            console.error('Error determining location:', error);
            // Fallback or default redirection in case the fetch fails
            window.location.href = 'payment_paypal.html';
        });
});

//document.getElementById('goToPaymentPage').addEventListener('click', function() {
//    window.location.href = 'payment.html' or window.location.href = 'payment_paypale.html'; // Assuming 'payment.html' is the payment form page
//});
document.getElementById('homebtn').addEventListener('click', function() {
window.location.href = 'index.html'; // Assuming 'payment.html' is the payment form page
});



