$(document).ready(function(){
     $.ajax({
        url: "backend/index.php",
        type: "post",
        dataType: "json"
     }).done( r => {
        var th = "<tr>"
        var tb = ""
        $.each(r.thead, function(i, j){
            var campo = j
            th += "<th>"+campo+"</th>"
        })
        r.tbody.splice(0,1);
        $.each(r.tbody, function(i, j){
           tb += "<tr>"
            $.each(r.tbody[i], function(a, b){
                console.log(b)
                tb += "<td>"+b+"</td>"  
            }) 
            tb += "<tr>"     
        })
        th += "<tr>"
        var thead = $('.thead')
        thead.find('tr').remove()
        thead.append( th )

        var tbody = $('tbody')
        tbody.find( 'tr' ).remove()
        tbody.append( tb )
        

     })
})