function initialBackgroundColor() {
    document.body.style.backgroundColor = "rgb(61, 61, 61)";
}

var clickedID = "";
var id = 1;
var totalSubjects = 1;
var initialTop = 47;
var initialLeft = 68;
var blockWidth = 257;

var currentUser = "";


// Otwarcie okienka do dodawania bloku do planu
function addClassesOpen() {
    if (document.location.href.includes("#addClassesPopup")) {
        document.location.href = "#";
    }
    else {
        document.location.href = "#addClassesPopup";
    }
}

// Zamknięcie okienka do dodawania bloku do planu
function addClassesClose() {            
    document.location.href = "#";

    document.getElementById("classesName").value = "";
    document.getElementById("error").innerHTML = "&nbsp";
    document.getElementById("day").selectedIndex = 0;
    document.getElementById("start").selectedIndex = 0;
    document.getElementById("end").selectedIndex = 0;
    document.getElementById("classesNoteText").value = "";
    document.getElementById("classesColor").value = "#000000";  
}

// Otwarcie okienka wyświetlenia / edycji bloku
function editClassesOpen(id) {
    clickedID = id;
    console.log(clickedID);
    let name = document.getElementById("name" + id).innerHTML;
    let note = document.getElementById("note" + id).innerHTML;

    document.getElementById("editClassesName").innerHTML = name;
    document.getElementById("editClassesNote").innerHTML = note;

    document.location.href = "#editClassesPopup";
}

// Dodanie bloku do widoku planu
function addNewClasses(mode) {
    let name = "";
    let selectedDay = "";
    let selectedStart = "";
    let selectedEnd = "";
    let note = "";
    let color = "";
    let checkColor = "";

    if (mode == "new") {
        name = document.getElementById("classesName").value;
        selectedDay = document.getElementById("day");
        selectedStart = document.getElementById("start");
        selectedEnd = document.getElementById("end");
        note = document.getElementById("classesNoteText").value;
        color = document.getElementById("classesColor").value;
        checkColor = hexToRGB(color);
        id = totalSubjects;
    }
    else if (mode == "edit") {                
        name = document.getElementById("editExistingClassesName").value;
        selectedDay = document.getElementById("editDay");
        selectedStart = document.getElementById("editStart");
        selectedEnd = document.getElementById("editEnd");
        note = document.getElementById("editExistingClassesNoteText").value;
        color = document.getElementById("editClassesColor").value;
        checkColor = hexToRGB(color);
    }                       
    
    let day = selectedDay.options[selectedDay.selectedIndex].innerHTML;
    let start = selectedStart.options[selectedStart.selectedIndex].innerHTML;
    let end = selectedEnd.options[selectedEnd.selectedIndex].innerHTML;
 
    if (start < end) {                
        let marginTop = topMargin(selectedStart);
        let marginLeft = leftMargin(selectedDay);
        let height = blockHeight(selectedStart, selectedEnd);

        newClasses = document.createElement("div");
        newClasses.id = id;
        newClasses.style.backgroundColor = color;
        newClasses.style.zIndex = "10";
        newClasses.style.position = "absolute";
        newClasses.style.top = marginTop + "px";
        newClasses.style.left = marginLeft + "px";
        newClasses.style.width = blockWidth + "px";
        newClasses.style.height = height + "px";
        newClasses.style.textAlign = "center";
        newClasses.style.fontSize = "11px";
        newClasses.style.overflow = "auto";
        
        if (checkColor[0] > 220 || checkColor[1] > 180 || 
        (checkColor[0] > 150 && checkColor[1] > 150) ||
        (checkColor[1] > 150 && checkColor[2] > 150) ||
        (checkColor[0] > 150 && checkColor[2] > 150)) {
            newClasses.style.color = "rgb(0, 0, 0)";
        }
        else {
            newClasses.style.color = "rgb(219, 206, 206)"
        }


        newClasses.onmousedown = function() {
            editClassesOpen(this.id);
        }

        newClassesContainer = document.createElement("div");
        newClassesTopRow = document.createElement("div");
        newClassesRowDay = document.createElement("div");
        newClassesRowStart = document.createElement("div");
        newClassesRowEnd = document.createElement("div");
        newClassesBottomRow = document.createElement("div");

        newClassesTopRow.id = "name" + newClasses.id;
        newClassesTopRow.innerHTML = name;
        newClassesBottomRow.id = "note" + newClasses.id;
        newClassesBottomRow.innerHTML = note.replaceAll("\n", "<br>");

        newClassesContainer.appendChild(newClassesTopRow);
        newClassesContainer.appendChild(newClassesBottomRow);

        newClasses.appendChild(newClassesContainer);

        parent = document.getElementById("classes");
        parent.appendChild(newClasses);

        if(mode == "new") {
            console.log(totalSubjects,name,selectedDay.value,selectedStart.value,selectedEnd.value,note,currentUser,color);
            base_addSubject(totalSubjects,name,selectedDay.value,selectedStart.value,selectedEnd.value,note,currentUser,color);
            totalSubjects++;
        } else if (mode == "edit"){
            base_editSubject(parseInt(clickedID),name,selectedDay.value,selectedStart.value,selectedEnd.value,note,currentUser,color);
        }
        
        document.getElementById("classesName").value = "";
        document.getElementById("error").innerHTML = "&nbsp";
        document.getElementById("day").selectedIndex = 0;
        document.getElementById("start").selectedIndex = 0;
        document.getElementById("end").selectedIndex = 0;
        document.getElementById("classesNoteText").value = "";
        document.getElementById("classesColor").value = "#000000";

        document.location.href = "#";
        
    }
    else {
        if (mode == 'new') {
            document.getElementById("error").innerHTML = "Nieprawidłowo wprowadzony przedział godzinowy.";
        }
        else {
            document.getElementById("errorEdit").innerHTML = "Nieprawidłowo wprowadzony przedział godzinowy.";
        }
        
    }            
}
        
function topMargin(start) {
    return start.selectedIndex * 11 + ((Math.floor(start.selectedIndex / 4)) * 2) + initialTop;
}

function leftMargin(day) {
    return initialLeft + ((day.selectedIndex) * (blockWidth + 2));
}

function blockHeight(start, end) {
    let difference = (end.selectedIndex + 1) - start.selectedIndex;
    let height = (Math.floor(difference / 4) * 2) + (difference * 11) - 1;

    let startValue = start.options[start.selectedIndex].innerHTML;
    let endValue = end.options[end.selectedIndex].innerHTML;

    if (startValue.slice(-2) == "00" && endValue.slice(-2) == "00") return height - 1;
    if (startValue.slice(-2) != "00" && endValue.slice(-2) == "00") return height + 1;
    if (Math.floor(difference / 4) < (parseInt(endValue.slice(0, 2)) - parseInt(startValue.slice(0, 2)))) return height + 2;


    return height;
}
        
// generowanie pustej tabelki z planem
function tableGenerate() {
    let oClock = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
                    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    let firstRowElements = ["&nbsp;", "Poniedziałek", "Wtorek",
        "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
    
    let table = document.createElement("table");
    table.id = "plan";
    table.className = "planTableTable";
    
    let firstRow = document.createElement("tr");

    for (i = 0; i < firstRowElements.length; i++) {
        let cell = document.createElement("td");
        cell.innerHTML = firstRowElements[i];

        firstRow.appendChild(cell);
    }

    table.appendChild(firstRow);

    for (i = 0; i < oClock.length; i++) {
        let newRow = document.createElement("tr");
        let newFirstCell = document.createElement("td");
        newFirstCell.innerHTML = oClock[i];

        newRow.appendChild(newFirstCell);

        for (j = 0; j < 7; j++) {
            let newCell = document.createElement("td");
            let newContainer = document.createElement("div");
            let newInner00 = document.createElement("div");
            let newInner15 = document.createElement("div");
            let newInner30 = document.createElement("div");
            let newInner45 = document.createElement("div");

            newContainer.className = "newHour";
            newInner00.className = "hourInside";
            newInner15.className = "hourInside";
            newInner30.className = "hourInside";
            newInner45.className = "hourOutside";

            newContainer.appendChild(newInner00);
            newContainer.appendChild(newInner15);
            newContainer.appendChild(newInner30);
            newContainer.appendChild(newInner45);

            newCell.appendChild(newContainer);
            newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
    }           

    document.getElementById("classes").innerHTML = "";
    document.getElementById("classes").appendChild(table);
}

// przejście do wyboru motywu aplikacji
function showThemes() {
    document.location.href = "#themesPopup";
}

// login --> tabelka
function userLogin() {
    /* dodać sprawdzenie użytkownika w bazie */
    let login = document.getElementById("userLogin").value;
    let password = document.getElementById("userPassword").value;

    if (login != "" && password != "") {
        base_login(login, password);
    }
    else {
        document.getElementById("errorLogIn").innerHTML = "Login i hasło nie mogą być puste.";
    }
}
function userLoginAsync(phpResponse, loginObject) {
    if(phpResponse == "Poprawne pobranie"){
        if(loginObject != false){
            currentUser = loginObject[0].login;
            document.getElementById("login").style.display = "none";
            document.getElementById("classes").style.display = "block";
            document.getElementById("addClasses").style.display = "block";
            document.getElementById("settings").style.display = "block";
            document.getElementById("logOut").style.display = "block";

            document.getElementById("errorLogIn").innerHTML = "&nbsp";
            document.getElementById("userLogin").value = "";
            document.getElementById("userPassword").value = "";

            tableGenerate(); 
            chooseTheme(loginObject[0].theme);
            base_getSubjectsByUser(currentUser);

        } else {
            document.getElementById("errorLogIn").innerHTML = "Nie ma takiego użytkownika w bazie.";
        }
    } else {
        document.getElementById("errorLogIn").innerHTML = phpResponse;
    }
}

function loadSubjectsAsync(subjectsToLoad){
    if(subjectsToLoad != false){
        totalSubjects = parseInt(subjectsToLoad[subjectsToLoad.length -1 ].id) + 1;
        for(let s of subjectsToLoad){
            
            let dayIndex = getDayIndex(s.day);
            let startTimeIndex = getTimeIndex(s.start_time);
            let endTimeIndex = getTimeIndex(s.end_time);
            
            let marginTop = startTimeIndex * 11 + ((Math.floor(startTimeIndex / 4)) * 2) + initialTop;
            let marginLeft = initialLeft + ((dayIndex) * (blockWidth + 2));
            let difference = (endTimeIndex + 1) - startTimeIndex;
            let height = (Math.floor(difference / 4) * 2) + (difference * 11) - 1;
            
            let name = s.name;
            let note = s.note;
            let checkColor = hexToRGB(s.color);
    
            newClasses = document.createElement("div");
            newClasses.id = s.id;
            newClasses.style.backgroundColor = s.color;
            newClasses.style.zIndex = "10";
            newClasses.style.position = "absolute";
            newClasses.style.top = marginTop + "px";
            newClasses.style.left = marginLeft + "px";
            newClasses.style.width = blockWidth + "px";
            newClasses.style.height = height + "px";
            newClasses.style.textAlign = "center";
            newClasses.style.fontSize = "11px";
            newClasses.style.overflow = "auto";
            
            if (checkColor[0] > 220 || checkColor[1] > 180 || 
            (checkColor[0] > 150 && checkColor[1] > 150) ||
            (checkColor[1] > 150 && checkColor[2] > 150) ||
            (checkColor[0] > 150 && checkColor[2] > 150)) {
                newClasses.style.color = "rgb(0, 0, 0)";
            }
            else {
                newClasses.style.color = "rgb(219, 206, 206)"
            }
    
            newClasses.onmousedown = function() {
                editClassesOpen(this.id);
            }
    
            newClassesContainer = document.createElement("div");
            newClassesTopRow = document.createElement("div");
            newClassesRowDay = document.createElement("div");
            newClassesRowStart = document.createElement("div");
            newClassesRowEnd = document.createElement("div");
            newClassesBottomRow = document.createElement("div");
    
            newClassesTopRow.id = "name" + newClasses.id;
            newClassesTopRow.innerHTML = name;
            newClassesBottomRow.id = "note" + newClasses.id;
            newClassesBottomRow.innerHTML = note.replaceAll("\n", "<br>");
    
            newClassesContainer.appendChild(newClassesTopRow);
            newClassesContainer.appendChild(newClassesBottomRow);
    
            newClasses.appendChild(newClassesContainer);
    
            parent = document.getElementById("classes");
            parent.appendChild(newClasses);
        }
    }
}

function chooseTheme(theme) {
    switch(theme){
        case "highContrast":
            highContrast();
            break;
        case "blue":
            blue();
            break;
        case "red":
            red();
        break;
        case "green":
            green();
        break;
        case "orange":
            orange();
        break;
        case "blackNgold":
            blackNgold();
        break;
        case "gray":
            gray();
        break;
        default:
            gray();
            alert("Invalid theme")

    }
}

// przejście do formularza logowania z formularza rejestracji
function toLogIn() {
    document.getElementById("errorSignUp").innerHTML = "&nbsp";
    document.getElementById("login").style.display = "flex";
    document.getElementById("signup").style.display = "none";

    document.getElementById("newLogin").value = "";
    document.getElementById("newPassword").value = "";
}

// przejście do formularza rejestracji z formularza logowania
function toSignUp() {            
    document.getElementById("errorLogIn").innerHTML = "&nbsp";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "flex";   

    document.getElementById("userLogin").value = "";
    document.getElementById("userPassword").value = "";         
}

// stworzenie konta
function createAccount() {
    /* dodać wpisanie użytkownika do bazy */
    let login = document.getElementById("newLogin").value;
    let password = document.getElementById("newPassword").value;

    if (login != "" && password != "") {
        base_signup(login, password);
    }
    else {
        document.getElementById("errorSignUp").innerHTML = "Login i hasło nie mogą być puste.";
    }
    
}
function createAccountAsync(phpResponse) {
    if(phpResponse == "Poprawne wykonanie"){
            
        document.getElementById("errorSignUp").innerHTML = "&nbsp";
        document.getElementById("newLogin").value = "";
        document.getElementById("newPassword").value = "";

        toLogIn();
    } else {
        document.getElementById("errorSignUp").innerHTML = phpResponse;
    }
}


// wyloguj (tabelka --> loguj)
function logOut() {
    currentUser = ""
    document.getElementById("login").style.display = "flex";
    document.getElementById("classes").style.display = "none";
    document.getElementById("addClasses").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("logOut").style.display = "none";

    document.getElementById("errorLogIn").innerHTML = "&nbsp";
    document.getElementById("userLogin").value = "";
    document.getElementById("userPassword").value = "";

    gray();
}

// okienko ustawień
function settingsOpen() {
    document.location.href = "#settingsPopup";
}

// okienko potwierdzenia
function pleaseConfirm() {
    document.location.href = "#confirmPopup";
}

// nie usunięcie konta
function confirmNegative() {
    document.location.href = "#settingsPopup";
}

// usunięcie konta
function confirmPositive() {
    /* tu kod do usunięcia użytkownika z bazy */
    base_deleteUser(currentUser);
    document.location.href = "";
}

// eksport planu
function planExport() {
    base_getJsonOfSubjects(currentUser);
}
function planExportAsync(jsonExport) {
    const filename = 'data.json';
    const jsonStr = JSON.stringify(jsonExport);

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// import planu
function planImport() {
    const selectedFile = document.getElementById('importFile').files[0];
    if (selectedFile) {
        var reader = new FileReader();
        reader.readAsText(selectedFile, "UTF-8");
        reader.onload = function (evt) {
            console.log(JSON.parse(JSON.parse(evt.target.result)));
            document.getElementById("classes").style.display = "none";
            document.getElementById("classes").style.display = "block";
            tableGenerate();
            loadSubjectsAsync(JSON.parse(JSON.parse(evt.target.result)));
        }
        reader.onerror = function (evt) {
            console.log("error reading file");
        }
    }
}

// przejście do potwierdzenia usunięcia bloku zajęć
function editConfirm() {
    document.location.href = "#confirmPopup2";
}

// nie usunięcie bloku zajęć
function confirmNegativeBlock() {
    document.location.href = "#editClassesPopup";
}

// usunięcie bloku zajęć
function confirmPositiveBlock() {
    /* tu kod do usunięcia bloku zajęć z bazy */
    base_deleteSubject(clickedID);
    document.getElementById("classes").removeChild(document.getElementById(clickedID));

    document.location.href = "#";
}

// otwarcie okna edycji istniejącego bloku
function editBlock() {
    /* 
        pobranie wartości z bazy dla istniejącego bloku zajęć
    */
    base_getSubjectById(currentUser,clickedID);
}
function editBlockAsync(s){
    document.getElementById("editExistingClassesName").value = s[0].name;
    document.getElementById("editDay").selectedIndex = getDayIndex(s[0].day);
    document.getElementById("editStart").selectedIndex = getTimeIndex(s[0].start_time);
    document.getElementById("editEnd").selectedIndex = getTimeIndex(s[0].end_time);
    document.getElementById("editExistingClassesNoteText").value = s[0].note;
    document.getElementById("editClassesColor").value = s[0].color;

    document.getElementById("editExistingClassesName").value = document.getElementById("editClassesName").innerHTML;
    document.getElementById("editExistingClassesNoteText").value = document.getElementById("editClassesNote").innerHTML.replaceAll("<br>", "\n");

    document.location.href = "#editExistingClassesPopup";
}