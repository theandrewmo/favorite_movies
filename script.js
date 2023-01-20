$(function() {

    $('#addMovie').click(function(e){
        e.preventDefault();
        let $movie = $('#movie').val();
        let $rating = $('#rating').val();
        $('.data').append('<tr> <td id="title">' + $movie + '</td> <td>' + $rating + 
        '</td> <td><button class="deleter">Delete</button></td> </tr>')
        
    })
   
    $('table').on('click', '.deleter', function() {
        $(this).parents('tr').remove();
    })

    $('table').on('click','#titleSort', function() {
        let dataBase = $('table').find('tbody > tr')
        if(dataBase.length >1) {
        dataBase.sort(function(a,b) {
            let $value1=$(a).children()[0].innerText;
            let $value2=$(b).children()[0].innerText;

            return ($value1<$value2) ? -1 : ($value1>$value2? 1 : 0)
        })
        $.each(dataBase, function(index,row) {
            $('tbody').append(row);
        })
        }
    })

    $('table').on('click','#ratingSort', function() {
        let dataBase = $('table').find('tbody > tr')
        if(dataBase.length >1) {
        dataBase.sort(function(a,b) {
            let $value1=Number($(a).children()[1].innerText);
            let $value2=Number($(b).children()[1].innerText);

            return ($value1<$value2) ? -1 : ($value1>$value2? 1 : 0)
        })
        $.each(dataBase, function(index,row) {
            $('tbody').append(row);
        })
        }
    })

})

