fetch("https://archive.org/advancedsearch.php?q=India+AND+licenseurl:*&fl[]=year,description,language,creator,contributor,identifier,title,mediatype,collection&rows=1000&output=json").then(
    response => {
        response.json().then(
            data => {
                console.log(data.response.docs);
                    var temp = "";

                    data.response.docs.forEach((element) => {
                        temp += "<tr>";
                        temp += "<td>" + element._score + "</td>";
                        temp += "<td>" + element.collection + "</td>";
                        temp += "<td>" + element.creator + "</td>";
                        temp += "<td>" + element.description + "</td>";  
                        temp += "<td>" + element.identifier + "</td>";
                        temp += "<td>" + element.mediatype + "</td>";
                        temp += "<td>" + element.language + "</td>";
                        temp += "<td>" + element.title + "</td>";
                        temp += "<td>" + element.year + "</td></tr>";

                    })
                    document.getElementById("data").innerHTML = temp;
                }
        )
    }
)


 $(document).ready(function(){
        $("#input").keyup(function(){
            var value = $(this).val().toLowerCase();
            $("#data tr").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });


    /*
    const searchFilter = () => {
        let inputValue = document.getElementById("input").value.toLowerCase();

        var myTable = document.getElementById("data");

        var tr = myTable.getElementsByTagName("tr");

        for(var i=0; i<tr.length; i++){
            
                var td = tr[i].getElementsByTagName("td")[0]; 
                var textValue = td.textContent.toLowerCase();

                if(textValue.indexOf(inputValue) > -1){
                    tr[i].style.display = "";
                }else{
                    tr[i].style.display = "none";
                }
        }
    }
    */