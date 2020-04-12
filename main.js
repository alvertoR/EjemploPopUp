window.addEventListener("load", function(e){
    document.querySelector("#button").addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    document.querySelector('#close').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'none';
    });

});