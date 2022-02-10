let server = "http://192.168.1.110/planZajec";

function base_login(login, password){
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/login.php?login=${login}&password=${password}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "-1":
				userLoginAsync("Błąd w połączeniu z bazą",null);
				break;
			case "-2":
				userLoginAsync("Dane zostały źle przekazane",null);
				break;
			default:
				let temp = false;
				try{
					temp = JSON.parse(ajax.responseText);
				} catch (e){
					console.log(e);
				}
				userLoginAsync("Poprawne pobranie",temp);
			}
		}	
	};
		
	ajax.send();
}

function base_signup(login, password) {
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/signup.php?login=${login}& password=${password}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "1":
				createAccountAsync("Poprawne wykonanie");
				break;
			case "0":
				createAccountAsync("Błędne zapytanie");
				break;
			case "-1":
				createAccountAsync("Błąd w połączeniu z bazą");
				break;
			case "-2":
				createAccountAsync("Dane zostały źle przekazane");
				break;
			default:
				createAccountAsync("Konto o takim loginie już istnieje");
			}
		}	
	};
	ajax.send();
}

function base_deleteUser(login) {
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/deleteUser.php?login=${login}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "1":
				alert("Wykonane");
				break;
			case "0":
				alert("Błąd w zapytaniu");
				break;
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				alert("Nieznany błąd");
			}
		}	
	};
		
	ajax.send();
}

function base_editUserTheme(login, theme) {
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/editUserTheme.php?login=${login}&theme=${theme}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "1":
				console.log("Zmieniono motyw");
				break;
			case "0":
				alert("Błąd w zapytaniu");
				break;
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				alert("Nieznany błąd");
			}
		}	
	};
		
	ajax.send();
}

function base_getSubjectById(login, id){
	let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/subject.php?login=${login}&id=${id}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				console.log("Poprawne pobranie");
				editBlockAsync(JSON.parse(ajax.responseText));
			}
		}	
	};
		
	ajax.send();
}

function base_getSubjectsByUser(login) {
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/userSubjects.php?login=${login}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				console.log("Poprawne pobranie");
				let temp = false;
				try{
					temp = JSON.parse(ajax.responseText);
					console.log(temp);
				} catch (e){
					console.log(e);
				}
				loadSubjectsAsync(temp);
			}
		}	
	};
		
	ajax.send();
}

function base_getJsonOfSubjects(login) {
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/userSubjects.php?login=${login}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				console.log("Poprawne pobranie");
				let temp = false;
				try{
					temp = ajax.responseText;
				} catch (e){
					console.log(e);
				}
				planExportAsync(temp);
			}
		}	
	};
		
	ajax.send();
}


function base_addSubject(id, name, day, start_time, end_time, note, login, color) {
	let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/addSubject.php?id=${id}&name=${name}&day=${day}&start_time=${start_time}&end_time=${end_time}&note=${note}&login=${login}&color=${color}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "1":
				console.log("Dodano przedmiot");
				break;
			case "0":
				alert("Błąd w zapytaniu");
				break;
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				alert("Nieznany błąd");
			}
		}	
	};
		
	ajax.send();
}

function base_editSubject(name, day, start_time, end_time, note, login, color) {
    
	let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/editSubject.php?id=${id}& name=${name} &day=${day} &start_time=${start_time} &end_time=${end_time} &note=${note} &login=${login} &color=${color}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "1":
				alert("Edytowano przedmiot");
				break;
			case "0":
				alert("Błąd w zapytaniu");
				break;
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				alert("Nieznany błąd");
			}
		}	
	};
		
	ajax.send();
}

function base_deleteSubject(id) {
    let ajax=new XMLHttpRequest();
	
	ajax.open("POST",`${server}/deleteSubject.php?id=${id}`,true);
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && ajax.status==200)
		{
			switch(ajax.responseText) {
			case "1":
				alert("Usunieto przedmiot");
				break;
			case "0":
				alert("Błąd w zapytaniu");
				break;
			case "-1":
				alert("Błąd w połączeniu z bazą");
				break;
			case "-2":
				alert("Dane zostały źle przekazane");
				break;
			default:
				alert("Nieznany błąd");
			}
		}	
	};
		
	ajax.send();
}