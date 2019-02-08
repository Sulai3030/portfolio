function handleSend(){
    console.log("buttonPressed")
}

window.onload = function(){
    console.log("initialized Contact Script")
    document.getElementById("sendButton").addEventListener('click', function(e){
        e.preventDefault()
        console.log('clicked!')
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var note = document.getElementById('note').value
        var subject = name + " sent you a message through your website."
        document.location = "mailto:sssulai@gmail.com" + "?subject="+subject+"&body="+note
    })
}