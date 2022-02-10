// zmiana motywu aplikacji na kontrastujący
function highContrast() {
    base_editUserTheme(currentUser,"highContrast");
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.style.color = "rgb(255, 255, 0)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("settingsRow").style.color = "rgb(255, 255, 0)";
    document.getElementById("settingsRow").style.border = "2px solid rgb(255, 255, 0)";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(0, 0, 0)";
        settingsButtons[i].style.color = "rgb(255, 255, 0)";
        settingsButtons[i].style.border = "2px solid rgb(255, 255, 0)";

        settingsButtons[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 255, 0)"; 
            this.style.color = "rgb(0, 0, 0)"
        }
        settingsButtons[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(0, 0, 0)"; 
            this.style.color = "rgb(255, 255, 0)"
        }
        settingsButtons[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 255, 0)"; 
            this.style.color = "rgb(0, 0, 0)"
        }
        settingsButtons[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(0, 0, 0)"; 
            this.style.color = "rgb(255, 255, 0)"
        }                
    }

    document.getElementById("settingsLabel").style.color = "rgb(255, 255, 0)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("planTableRow").style.border = "2px solid rgb(255, 255, 0)";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(255, 255, 0)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(255, 255, 0)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(0, 0, 0)";
        popup[i].style.border = "2px solid rgb(255, 255, 0)";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(255, 255, 0)";

        close[i].onmouseover = function() { this.style.color = "rgb(255, 255, 150)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(255, 255, 0)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(255, 255, 150)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(255, 255, 0)"; }
    }

    let select = document.getElementsByTagName("select");

    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(0, 0, 0)";
        select[i].style.color = "rgb(255, 255, 0)";
        select[i].style.border = "1px solid rgb(255, 255, 0)";

        select[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 255, 0)"; 
            this.style.color = "rgb(0, 0, 0)"
        }
        select[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(0, 0, 0)"; 
            this.style.color = "rgb(255, 255, 0)"
        }             
        select[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 255, 0)"; 
            this.style.color = "rgb(0, 0, 0)"
        }               
        select[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(0, 0, 0)"; 
            this.style.color = "rgb(255, 255, 0)"
        }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(0, 0, 0)";
        popupInput[i].style.color = "rgb(255, 255, 0)";
        popupInput[i].style.border = "1px solid rgb(255, 255, 0)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(0, 0, 0)";
        textarea[i].style.color = "rgb(255, 255, 0)";
        textarea[i].style.border = "1px solid rgb(255, 255, 0)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(0, 0, 0)";
        formContainer[i].style.border = "2px solid rgb(255, 255, 0)";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("userLogin").style.color = "rgb(255, 255, 0)";
    document.getElementById("userLogin").style.border = "1px solid rgb(255, 255, 0)";
    document.getElementById("userPassword").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("userPassword").style.color = "rgb(255, 255, 0)";
    document.getElementById("userPassword").style.border = "1px solid rgb(255, 255, 0)";
    document.getElementById("newLogin").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("newLogin").style.color = "rgb(255, 255, 0)";
    document.getElementById("newLogin").style.border = "1px solid rgb(255, 255, 0)";
    document.getElementById("newPassword").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("newPassword").style.color = "rgb(255, 255, 0)";
    document.getElementById("newPassword").style.border = "1px solid rgb(255, 255, 0)";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        if (formButton[i].id != "setDefault") {
            formButton[i].style.backgroundColor = "rgb(0, 0, 0)";
            formButton[i].style.color = "rgb(255, 255, 0)";
            formButton[i].style.border = "1px solid rgb(255, 255, 0)";

            formButton[i].onmouseover = function() { 
                this.style.backgroundColor = "rgb(255, 255, 0)"; 
                this.style.color = "rgb(0, 0, 0)"
            }
            formButton[i].onmouseleave = function() { 
                this.style.backgroundColor = "rgb(0, 0, 0)"; 
                this.style.color = "rgb(255, 255, 0)"
            }              
            formButton[i].ontouchstart = function() { 
                this.style.backgroundColor = "rgb(255, 255, 0)"; 
                this.style.color = "rgb(0, 0, 0)"
            }               
            formButton[i].ontouchend = function() { 
                this.style.backgroundColor = "rgb(0, 0, 0)"; 
                this.style.color = "rgb(255, 255, 0)"
            }
        }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(0, 0, 0)";
        inputColor[i].style.border = "1px solid rgb(255, 255, 0)";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        if (redButton[i].id == "setRed") {
            redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
            redButton[i].style.color = "rgb(0, 0, 0)";
            redButton[i].style.border = "none";

            redButton[i].onmouseover = function() { 
                this.style.backgroundColor = "rgb(255, 150, 150)"; 
                this.style.color = "rgb(50, 50, 50)";
            }
            redButton[i].onmouseleave = function() { 
                this.style.backgroundColor = "rgb(255, 100, 100)"; 
                this.style.color = "rgb(0, 0, 0)";                     
            }                
            redButton[i].ontouchstart = function() { 
                this.style.backgroundColor = "rgb(255, 150, 150)"; 
                this.style.color = "rgb(50, 50, 50)"; 
            }                
            redButton[i].ontouchend = function() { 
                this.style.backgroundColor = "rgb(255, 100, 100)"; 
                this.style.color = "rgb(0, 0, 0)"; 
            }
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        if (greenButton[i].id == "setGreen") {
            greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
            greenButton[i].style.color = "rgb(0, 0, 0)";
            greenButton[i].style.border = "none";

            greenButton[i].onmouseover = function() { 
                this.style.backgroundColor = "rgb(150, 255, 150)"; 
                this.style.color = "rgb(50, 50, 50)";
            }
            greenButton[i].onmouseleave = function() { 
                this.style.backgroundColor = "rgb(100, 255, 100)"; 
                this.style.color = "rgb(0, 0, 0)";                     
            }                
            greenButton[i].ontouchstart = function() { 
                this.style.backgroundColor = "rgb(150, 255, 150)"; 
                this.style.color = "rgb(50, 50, 50)"; 
            }                
            greenButton[i].ontouchend = function() { 
                this.style.backgroundColor = "rgb(100, 255, 100)"; 
                this.style.color = "rgb(0, 0, 0)"; 
            }
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}

// zmiana motywu aplikacji na niebieski
function blue() {
    base_editUserTheme(currentUser,"blue");
    document.body.style.backgroundColor = "rgb(0, 63, 128)";
    document.body.style.color = "rgb(219, 206, 206)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(0, 95, 150)";
    document.getElementById("settingsRow").style.color = "rgb(219, 206, 206)";
    document.getElementById("settingsRow").style.border = "none";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(0, 63, 118)";
        settingsButtons[i].style.color = "rgb(219, 206, 206)";
        settingsButtons[i].style.border = "none";

        settingsButtons[i].onmouseover = function() { this.style.backgroundColor = "rgb(0, 84, 139)"; }
        settingsButtons[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 63, 118)"; }
        settingsButtons[i].ontouchstart = function() { this.style.backgroundColor = "rgb(0, 84, 139)"; }
        settingsButtons[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 63, 118)"; }                
    }

    document.getElementById("settingsLabel").style.color = "rgb(219, 206, 206)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(0, 95, 150)";
    document.getElementById("planTableRow").style.border = "none";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(0, 77, 132)";
        popup[i].style.border = "none";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(0, 53, 108)";

        close[i].onmouseover = function() { this.style.color = "rgb(0, 95, 150)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(0, 53, 108)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(0, 95, 150)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(0, 53, 108)"; }
    }

    let select = document.getElementsByTagName("select");

    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(0, 77, 132)";
        select[i].style.color = "rgb(219, 206, 206)";
        select[i].style.border = "none";

        select[i].onmouseover = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
        select[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 77, 132)"; }                
        select[i].ontouchstart = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        select[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 77, 132)"; }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(0, 77, 132)";
        popupInput[i].style.color = "rgb(219, 206, 206)";
        popupInput[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(0, 77, 132)";
        textarea[i].style.color = "rgb(219, 206, 206)";
        textarea[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(0, 87, 142)";
        formContainer[i].style.border = "none";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(0, 63, 118)";
    document.getElementById("userLogin").style.color = "rgb(219, 206, 206)";
    document.getElementById("userLogin").style.border = "none";
    document.getElementById("userPassword").style.backgroundColor = "rgb(0, 63, 118)";
    document.getElementById("userPassword").style.color = "rgb(219, 206, 206)";
    document.getElementById("userPassword").style.border = "none";
    document.getElementById("newLogin").style.backgroundColor = "rgb(0, 63, 118)";
    document.getElementById("newLogin").style.color = "rgb(219, 206, 206)";
    document.getElementById("newLogin").style.border = "none";
    document.getElementById("newPassword").style.backgroundColor = "rgb(0, 63, 118)";
    document.getElementById("newPassword").style.color = "rgb(219, 206, 206)";
    document.getElementById("newPassword").style.border = "none";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        if (formButton[i].id != "setDefault") {
            formButton[i].style.backgroundColor = "rgb(0, 63, 118)";
            formButton[i].style.color = "rgb(219, 206, 206)";
            formButton[i].style.border = "none";

            formButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(0, 84, 139)"; }
            formButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 63, 118)"; }                
            formButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(0, 84, 139)"; }                
            formButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 63, 118)"; }
        }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(0, 77, 132)";
        inputColor[i].style.border = "none";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
        redButton[i].style.color = "rgb(0, 0, 0)";
        redButton[i].style.border = "none";

        redButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        redButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        redButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        redButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
        greenButton[i].style.color = "rgb(0, 0, 0)";
        greenButton[i].style.border = "none";

        greenButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        greenButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        greenButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        greenButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}

// zmiana motywu aplikacji na czerwony
function red() {
    base_editUserTheme(currentUser,"red");
    document.body.style.backgroundColor = "rgb(255, 50, 50)";
    document.body.style.color = "rgb(0, 0, 0)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(255, 82, 82)";
    document.getElementById("settingsRow").style.color = "rgb(0, 0, 0)";
    document.getElementById("settingsRow").style.border = "none";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(255, 100, 100)";
        settingsButtons[i].style.color = "rgb(0, 0, 0)";
        settingsButtons[i].style.border = "none";

        settingsButtons[i].onmouseover = function() { this.style.backgroundColor = "rgb(255, 121, 121)"; }
        settingsButtons[i].onmouseleave = function() { this.style.backgroundColor = "rgb(255, 100, 100)"; }                
        settingsButtons[i].ontouchstart = function() { this.style.backgroundColor = "rgb(255, 121, 121)"; }
        settingsButtons[i].ontouchend = function() { this.style.backgroundColor = "rgb(255, 100, 100)"; }  
    }

    document.getElementById("settingsLabel").style.color = "rgb(0, 0, 0)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(255, 82, 82)";
    document.getElementById("planTableRow").style.border = "none";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(255, 114, 114)";
        popup[i].style.border = "none";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(0, 0, 0)";

        close[i].onmouseover = function() { this.style.color = "rgb(80, 80, 80)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(0, 0, 0)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(80, 80, 80)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(0, 0, 0)"; }
    }

    let select = document.getElementsByTagName("select");
    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(255, 114, 114)";
        select[i].style.color = "rgb(0, 0, 0)";
        select[i].style.border = "none";

        select[i].onmouseover = function() { this.style.backgroundColor = "rgb(255, 132, 132)"; }
        select[i].onmouseleave = function() { this.style.backgroundColor = "rgb(255, 114, 114)"; }                
        select[i].ontouchstart = function() { this.style.backgroundColor = "rgb(255, 132, 132)"; }                
        select[i].ontouchend = function() { this.style.backgroundColor = "rgb(255, 114, 114)"; }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(255, 114, 114)";
        popupInput[i].style.color = "rgb(0, 0, 0)";
        popupInput[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(255, 114, 114)";
        textarea[i].style.color = "rgb(0, 0, 0)";
        textarea[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(255, 124, 124)";
        formContainer[i].style.border = "none";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(255, 100, 100)";
    document.getElementById("userLogin").style.color = "rgb(0, 0, 0)";
    document.getElementById("userLogin").style.border = "none";
    document.getElementById("userPassword").style.backgroundColor = "rgb(255, 100, 100)";
    document.getElementById("userPassword").style.color = "rgb(0, 0, 0)";
    document.getElementById("userPassword").style.border = "none";
    document.getElementById("newLogin").style.backgroundColor = "rgb(255, 100, 100)";
    document.getElementById("newLogin").style.color = "rgb(0, 0, 0)";
    document.getElementById("newLogin").style.border = "none";
    document.getElementById("newPassword").style.backgroundColor = "rgb(255, 100, 100)";
    document.getElementById("newPassword").style.color = "rgb(0, 0, 0)";
    document.getElementById("newPassword").style.border = "none";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        if (formButton[i].id != "setDefault") {
            formButton[i].style.backgroundColor = "rgb(255, 100, 100)";
            formButton[i].style.color = "rgb(0, 0, 0)";
            formButton[i].style.border = "none";

            formButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(255, 121, 121)"; }
            formButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(255, 100, 100)"; }                
            formButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(255, 121, 121)"; }                
            formButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(255, 100, 100)"; }
        }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(255, 114, 114)";
        inputColor[i].style.border = "none";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
        redButton[i].style.color = "rgb(0, 0, 0)";
        redButton[i].style.border = "none";

        redButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        redButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        redButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        redButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
        greenButton[i].style.color = "rgb(0, 0, 0)";
        greenButton[i].style.border = "none";

        greenButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        greenButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        greenButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        greenButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}

// zmiana motywu aplikacji na zielony
function green() {
    base_editUserTheme(currentUser,"green");
    document.body.style.backgroundColor = "rgb(30, 225, 30)";
    document.body.style.color = "rgb(0, 0, 0)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(62, 225, 62)";
    document.getElementById("settingsRow").style.color = "rgb(0, 0, 0)";
    document.getElementById("settingsRow").style.border = "none";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(100, 225, 100)";
        settingsButtons[i].style.color = "rgb(0, 0, 0)";
        settingsButtons[i].style.border = "none";

        settingsButtons[i].onmouseover = function() { this.style.backgroundColor = "rgb(121, 225, 121)"; }
        settingsButtons[i].onmouseleave = function() { this.style.backgroundColor = "rgb(100, 225, 100)"; }                
        settingsButtons[i].ontouchstart = function() { this.style.backgroundColor = "rgb(121, 225, 121)"; }
        settingsButtons[i].ontouchend = function() { this.style.backgroundColor = "rgb(100, 225, 100)"; }  
    }

    document.getElementById("settingsLabel").style.color = "rgb(0, 0, 0)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(62, 225, 62)";
    document.getElementById("planTableRow").style.border = "none";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(90, 225, 90)";
        popup[i].style.border = "none";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(0, 0, 0)";

        close[i].onmouseover = function() { this.style.color = "rgb(80, 80, 80)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(0, 0, 0)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(80, 80, 80)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(0, 0, 0)"; }
    }

    let select = document.getElementsByTagName("select");
    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(90, 225, 90)";
        select[i].style.color = "rgb(0, 0, 0)";
        select[i].style.border = "none";

        select[i].onmouseover = function() { this.style.backgroundColor = "rgb(110, 225, 110)"; }
        select[i].onmouseleave = function() { this.style.backgroundColor = "rgb(90, 225, 90)"; }                
        select[i].ontouchstart = function() { this.style.backgroundColor = "rgb(110, 225, 110)"; }                
        select[i].ontouchend = function() { this.style.backgroundColor = "rgb(90, 225, 90)"; }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(90, 225, 90)";
        popupInput[i].style.color = "rgb(0, 0, 0)";
        popupInput[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(90, 225, 90)";
        textarea[i].style.color = "rgb(0, 0, 0)";
        textarea[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(90, 225, 90)";
        formContainer[i].style.border = "none";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(100, 255, 100)";
    document.getElementById("userLogin").style.color = "rgb(0, 0, 0)";
    document.getElementById("userLogin").style.border = "none";
    document.getElementById("userPassword").style.backgroundColor = "rgb(100, 255, 100)";
    document.getElementById("userPassword").style.color = "rgb(0, 0, 0)";
    document.getElementById("userPassword").style.border = "none";
    document.getElementById("newLogin").style.backgroundColor = "rgb(100, 255, 100)";
    document.getElementById("newLogin").style.color = "rgb(0, 0, 0)";
    document.getElementById("newLogin").style.border = "none";
    document.getElementById("newPassword").style.backgroundColor = "rgb(100, 255, 100)";
    document.getElementById("newPassword").style.color = "rgb(0, 0, 0)";
    document.getElementById("newPassword").style.border = "none";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        if (formButton[i].id != "setDefault") {
            formButton[i].style.backgroundColor = "rgb(100, 255, 100)";
            formButton[i].style.color = "rgb(0, 0, 0)";
            formButton[i].style.border = "none";

            formButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(121, 255, 121)"; }
            formButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(100, 255, 100)"; }                
            formButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(121, 255, 121)"; }                
            formButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(100, 255, 100)"; }
        }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(90, 225, 90)";
        inputColor[i].style.border = "none";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
        redButton[i].style.color = "rgb(0, 0, 0)";
        redButton[i].style.border = "none";

        redButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        redButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        redButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        redButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
        greenButton[i].style.color = "rgb(0, 0, 0)";
        greenButton[i].style.border = "none";

        greenButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        greenButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        greenButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        greenButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}

// zmiana motywu aplikacji na pomarańczowy
function orange() {
    base_editUserTheme(currentUser,"orange");
    document.body.style.backgroundColor = "rgb(217, 110, 0)";
    document.body.style.color = "rgb(0, 0, 0)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(249, 142, 29)";
    document.getElementById("settingsRow").style.color = "rgb(0, 0, 0)";
    document.getElementById("settingsRow").style.border = "none";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(217, 110, 0)";
        settingsButtons[i].style.color = "rgb(0, 0, 0)";
        settingsButtons[i].style.border = "none";

        settingsButtons[i].onmouseover = function() { this.style.backgroundColor = "rgb(238, 131, 18)"; }
        settingsButtons[i].onmouseleave = function() { this.style.backgroundColor = "rgb(217, 110, 0)"; }                
        settingsButtons[i].ontouchstart = function() { this.style.backgroundColor = "rgb(238, 131, 18)"; }
        settingsButtons[i].ontouchend = function() { this.style.backgroundColor = "rgb(217, 110, 0)"; }  
    }

    document.getElementById("settingsLabel").style.color = "rgb(0, 0, 0)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(249, 142, 29)";
    document.getElementById("planTableRow").style.border = "none";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(231, 124, 11)";
        popup[i].style.border = "none";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(0, 0, 0)";

        close[i].onmouseover = function() { this.style.color = "rgb(80, 80, 80)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(0, 0, 0)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(80, 80, 80)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(0, 0, 0)"; }
    }

    let select = document.getElementsByTagName("select");
    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(231, 124, 11)";
        select[i].style.color = "rgb(0, 0, 0)";
        select[i].style.border = "none";

        select[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
        select[i].onmouseleave = function() { this.style.backgroundColor = "rgb(231, 124, 11)"; }                
        select[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        select[i].ontouchend = function() { this.style.backgroundColor = "rgb(231, 124, 11)"; }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(231, 124, 11)";
        popupInput[i].style.color = "rgb(0, 0, 0)";
        popupInput[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(231, 124, 11)";
        textarea[i].style.color = "rgb(0, 0, 0)";
        textarea[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(241, 134, 21)";
        formContainer[i].style.border = "none";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(217, 110, 0)";
    document.getElementById("userLogin").style.color = "rgb(0, 0, 0)";
    document.getElementById("userLogin").style.border = "none";
    document.getElementById("userPassword").style.backgroundColor = "rgb(217, 110, 0)";
    document.getElementById("userPassword").style.color = "rgb(0, 0, 0)";
    document.getElementById("userPassword").style.border = "none";
    document.getElementById("newLogin").style.backgroundColor = "rgb(217, 110, 0)";
    document.getElementById("newLogin").style.color = "rgb(0, 0, 0)";
    document.getElementById("newLogin").style.border = "none";
    document.getElementById("newPassword").style.backgroundColor = "rgb(217, 110, 0)";
    document.getElementById("newPassword").style.color = "rgb(0, 0, 0)";
    document.getElementById("newPassword").style.border = "none";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        if (formButton[i].id != "setDefault") {
            formButton[i].style.backgroundColor = "rgb(217, 110, 0)";
            formButton[i].style.color = "rgb(0, 0, 0)";
            formButton[i].style.border = "none";

            formButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(238, 131, 18)"; }
            formButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(217, 110, 0)"; }                
            formButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(238, 131, 18)"; }                
            formButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(217, 110, 0)"; }
        }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(231, 124, 11)";
        inputColor[i].style.border = "none";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
        redButton[i].style.color = "rgb(0, 0, 0)";
        redButton[i].style.border = "none";

        redButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        redButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        redButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        redButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
        greenButton[i].style.color = "rgb(0, 0, 0)";
        greenButton[i].style.border = "none";

        greenButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        greenButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        greenButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        greenButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}

// zmiana motywu aplikacji na czarno - złoty
function blackNgold() {
    base_editUserTheme(currentUser,"blackNgold");
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.style.color = "rgb(152, 131, 50)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("settingsRow").style.color = "rgb(152, 131, 50)";
    document.getElementById("settingsRow").style.border = "1px solid rgb(152, 131, 50)";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(0, 0, 0)";
        settingsButtons[i].style.color = "rgb(152, 131, 50)";
        settingsButtons[i].style.border = "1px solid rgb(152, 131, 50)";

        settingsButtons[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        settingsButtons[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        settingsButtons[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        settingsButtons[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }  
    }

    document.getElementById("settingsLabel").style.color = "rgb(152, 131, 50)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("planTableRow").style.border = "1px solid rgb(152, 131, 50)";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(122, 91, 20)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(122, 91, 20)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(0, 0, 0)";
        popup[i].style.border = "1px solid rgb(152, 131, 50)";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(152, 131, 50)";

        close[i].onmouseover = function() { this.style.color = "rgb(122, 91, 20)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(152, 131, 50)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(122, 91, 20)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(152, 131, 50)"; }
    }

    let select = document.getElementsByTagName("select");
    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(0, 0, 0)";
        select[i].style.color = "rgb(152, 131, 50)";
        select[i].style.border = "1px solid rgb(152, 131, 50)";

        select[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        select[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        select[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        select[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(0, 0, 0)";
        popupInput[i].style.color = "rgb(152, 131, 50)";
        popupInput[i].style.border = "1px solid rgb(152, 131, 50)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(0, 0, 0)";
        textarea[i].style.color = "rgb(152, 131, 50)";
        textarea[i].style.border = "1px solid rgb(152, 131, 50)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(0, 0, 0)";
        formContainer[i].style.border = "1px solid rgb(152, 131, 50)";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("userLogin").style.color = "rgb(152, 131, 50)";
    document.getElementById("userLogin").style.border = "1px solid rgb(152, 131, 50)";
    document.getElementById("userPassword").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("userPassword").style.color = "rgb(152, 131, 50)";
    document.getElementById("userPassword").style.border = "1px solid rgb(152, 131, 50)";
    document.getElementById("newLogin").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("newLogin").style.color = "rgb(152, 131, 50)";
    document.getElementById("newLogin").style.border = "1px solid rgb(152, 131, 50)";
    document.getElementById("newPassword").style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById("newPassword").style.color = "rgb(152, 131, 50)";
    document.getElementById("newPassword").style.border = "1px solid rgb(152, 131, 50)";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        if (formButton[i].id != "setDefault") {
            formButton[i].style.backgroundColor = "rgb(0, 0, 0)";
            formButton[i].style.color = "rgb(152, 131, 50)";
            formButton[i].style.border = "1px solid rgb(152, 131, 50)";

            formButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
            formButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
            formButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
            formButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
        }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(0, 0, 0)";
        inputColor[i].style.border = "1px solid rgb(152, 131, 50)";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
        redButton[i].style.color = "rgb(0, 0, 0)";
        redButton[i].style.border = "none";

        redButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        redButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        redButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        redButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
        greenButton[i].style.color = "rgb(0, 0, 0)";
        greenButton[i].style.border = "none";

        greenButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        greenButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        greenButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        greenButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}

// zmiana motywu aplikacji na domyślny
function gray() {
    base_editUserTheme(currentUser,"gray");
    document.body.style.backgroundColor = "rgb(61, 61, 61)";
    document.body.style.color = "rgb(219, 206, 206)";

    document.getElementById("settingsRow").style.backgroundColor = "rgb(93, 93, 93)";
    document.getElementById("settingsRow").style.color = "rgb(219, 206, 206)";
    document.getElementById("settingsRow").style.border = "none";
  
    let settingsButtons = document.getElementsByClassName("settingsButton");
    for (i = 0; i < settingsButtons.length; i++) {
        settingsButtons[i].style.backgroundColor = "rgb(61, 61, 61)";
        settingsButtons[i].style.color = "rgb(219, 206, 206)";
        settingsButtons[i].style.border = "none";

        settingsButtons[i].onmouseover = function() { this.style.backgroundColor = "rgb(82, 82, 82)"; }
        settingsButtons[i].onmouseleave = function() { this.style.backgroundColor = "rgb(61, 61, 61)"; }                
        settingsButtons[i].ontouchstart = function() { this.style.backgroundColor = "rgb(82, 82, 82)"; }
        settingsButtons[i].ontouchend = function() { this.style.backgroundColor = "rgb(61, 61, 61)"; }  
    }

    document.getElementById("settingsLabel").style.color = "rgb(219, 206, 206)";

    document.getElementById("planTableRow").style.backgroundColor = "rgb(93, 93, 93)";
    document.getElementById("planTableRow").style.border = "none";

    let newHour = document.getElementsByClassName("newHour");
    for (i = 0; i < newHour.length; i++) {
        newHour[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let hoursInside = document.getElementsByClassName("hourInside");
    for (i = 0; i < hoursInside.length; i++) {
        hoursInside[i].style.borderColor = "rgb(125, 125, 125)";
    }

    let popup = document.getElementsByClassName("popup");
    for (i = 0; i < popup.length; i++) {
        popup[i].style.backgroundColor = "rgb(75, 75, 75)";
        popup[i].style.border = "none";
    }

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].style.color = "rgb(51, 51, 51)";

        close[i].onmouseover = function() { this.style.color = "rgb(93, 93, 93)"; }
        close[i].onmouseleave = function() { this.style.color = "rgb(51, 51, 51)"; }                
        close[i].ontouchstart = function() { this.style.color = "rgb(93, 93, 93)"; }                
        close[i].ontouchend = function() { this.style.color = "rgb(51, 51, 51)"; }
    }

    let select = document.getElementsByTagName("select");
    for (i = 0; i < select.length; i++) {
        select[i].style.backgroundColor = "rgb(75, 75, 75)";
        select[i].style.color = "rgb(219, 206, 206)";
        select[i].style.border = "none";

        select[i].onmouseover = function() { this.style.backgroundColor = "rgb(93, 93, 93)"; }
        select[i].onmouseleave = function() { this.style.backgroundColor = "rgb(75, 75, 75)"; }                
        select[i].ontouchstart = function() { this.style.backgroundColor = "rgb(93, 93, 93)"; }                
        select[i].ontouchend = function() { this.style.backgroundColor = "rgb(75, 75, 75)"; }
    }

    let popupInput = document.getElementsByClassName("popupInput");
    for (i = 0; i < popupInput.length; i++) {
        popupInput[i].style.backgroundColor = "rgb(75, 75, 75)";
        popupInput[i].style.color = "rgb(219, 206, 206)";
        popupInput[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let textarea = document.getElementsByTagName("textarea");
    for (i = 0; i < textarea.length; i++) {
        textarea[i].style.backgroundColor = "rgb(75, 75, 75)";
        textarea[i].style.color = "rgb(219, 206, 206)";
        textarea[i].style.border = "1px solid rgb(118, 118, 118)";
    }

    let formContainer = document.getElementsByClassName("formContainer");
    for (i = 0; i < formContainer.length; i++) {
        formContainer[i].style.backgroundColor = "rgb(85, 85, 85)";
        formContainer[i].style.border = "none";
    }

    document.getElementById("userLogin").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("userLogin").style.color = "rgb(219, 206, 206)";
    document.getElementById("userLogin").style.border = "none";
    document.getElementById("userPassword").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("userPassword").style.color = "rgb(219, 206, 206)";
    document.getElementById("userPassword").style.border = "none";
    document.getElementById("newLogin").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("newLogin").style.color = "rgb(219, 206, 206)";
    document.getElementById("newLogin").style.border = "none";
    document.getElementById("newPassword").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("newPassword").style.color = "rgb(219, 206, 206)";
    document.getElementById("newPassword").style.border = "none";

    let formButton = document.getElementsByClassName("formButton");
    for (i = 0; i < formButton.length; i++) {
        formButton[i].style.backgroundColor = "rgb(61, 61, 61)";
        formButton[i].style.color = "rgb(219, 206, 206)";
        formButton[i].style.border = "none";

        formButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(82, 82, 82)"; }
        formButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(61, 61, 61)"; }                
        formButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(82, 82, 82)"; }                
        formButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(61, 61, 61)"; }
    }

    let inputColor = document.getElementsByClassName("inputColor");
    for (i = 0; i < inputColor.length; i++) {
        inputColor[i].style.backgroundColor = "rgb(75, 75, 75)";
        inputColor[i].style.border = "none";
    }

    let redButton = document.getElementsByClassName("redButton");
    for (i = 0; i < redButton.length; i++) {
        redButton[i].style.backgroundColor = "rgb(255, 100, 100)";
        redButton[i].style.color = "rgb(0, 0, 0)";
        redButton[i].style.border = "none";

        redButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        redButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        redButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(255, 150, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        redButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(255, 100, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let greenButton = document.getElementsByClassName("greenButton");
    for (i = 0; i < greenButton.length; i++) {
        greenButton[i].style.backgroundColor = "rgb(100, 255, 100)";
        greenButton[i].style.color = "rgb(0, 0, 0)";
        greenButton[i].style.border = "none";

        greenButton[i].onmouseover = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)";
        }
        greenButton[i].onmouseleave = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)";                     
        }                
        greenButton[i].ontouchstart = function() { 
            this.style.backgroundColor = "rgb(150, 255, 150)"; 
            this.style.color = "rgb(50, 50, 50)"; 
        }                
        greenButton[i].ontouchend = function() { 
            this.style.backgroundColor = "rgb(100, 255, 100)"; 
            this.style.color = "rgb(0, 0, 0)"; 
        }
    }

    let highContrastButton = document.getElementsByClassName("highContrastButton");
    for (i = 0; i < highContrastButton.length; i++) {
        highContrastButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        highContrastButton[i].style.color = "rgb(255, 255, 0)";
        highContrastButton[i].style.border = "none";

        highContrastButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        highContrastButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        highContrastButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        highContrastButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    let blueButton = document.getElementsByClassName("blueButton");
    for (i = 0; i < blueButton.length; i++) {
        blueButton[i].style.backgroundColor = "rgb(0, 95, 150)";
        blueButton[i].style.color = "rgb(219, 206, 206)";
        blueButton[i].style.border = "none";

        blueButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }
        blueButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }                
        blueButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 115, 150)"; }                
        blueButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 95, 150)"; }
    }

    let orangeButton = document.getElementsByClassName("orangeButton");
    for (i = 0; i < orangeButton.length; i++) {
        orangeButton[i].style.backgroundColor = "rgb(249, 142, 29)";
        orangeButton[i].style.color = "rgb(0, 0, 0)";
        orangeButton[i].style.border = "none";

        orangeButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }
        orangeButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }                
        orangeButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(249, 175, 70)"; }                
        orangeButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(249, 142, 29)"; }
    }

    let blackNgoldButton = document.getElementsByClassName("blackNgoldButton");
    for (i = 0; i < blackNgoldButton.length; i++) {
        blackNgoldButton[i].style.backgroundColor = "rgb(0, 0, 0)";
        blackNgoldButton[i].style.color = "rgb(152, 131, 50)";
        blackNgoldButton[i].style.border = "none";

        blackNgoldButton[i].onmouseover = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }
        blackNgoldButton[i].onmouseleave = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }                
        blackNgoldButton[i].ontouchstart = function() { this.style.backgroundColor = "rgb(50, 50, 50)"; }                
        blackNgoldButton[i].ontouchend = function() { this.style.backgroundColor = "rgb(0, 0, 0)"; }
    }

    document.location.href = "#";  
}
