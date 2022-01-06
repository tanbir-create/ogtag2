const consultBtn = document.querySelector('#consult-button');
const form = document.querySelector('form');


const body= document.querySelector('body')
window.addEventListener('click', function(e){
    e.stopPropagation();
    if(e.target.parentElement.id == 'form' || e.target.id == 'form'){        
        return;
    }else if(e.target.id == 'consult-button' || e.target.id == 'ccc'){

        form.classList.add('show-form')
    }
    else{
        form.classList.remove('show-form')
    }
})        

$('a').click(function(e){e.preventDefault()})

$('#form').submit(function(e){
    e.preventDefault();
    
    
    
    $.ajax({
        type: 'POST',
        url: `https://1k0jeuiq3l.execute-api.us-east-2.amazonaws.com/production/api/create-call`,
        data: $(this).serialize(),
        success: function(data){
            if(data === 'Already used'){
                window.location.assign('https://www.guruji.life/')
              
            }
        },
        error: function(error){
            console.log(error)
        }
        
    })
    
    this.innerHTML = `<div id="form" style="display: flex; justify-content: center; align-items: center;">
    <p>Thank you for registering, you will soon recieve a call from the astrologer</p>
    </div>`
    this.reset();
    
})

