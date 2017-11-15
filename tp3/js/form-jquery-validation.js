$( document ).ready(function() {

     console.log( "DOM ready!" );

     $("#submit").on("click",function(event){
         event.preventDefault();
         console.log("click");  

         if($("#Nom").val().length<5 || $("#Prenom").val().length<5 ||
            $("#Adresse").val().length<5 || $("#Mail").val().length<5 )
         {

            $(".modal-title").text("Désolé");
            $(".modal-body").html('Veuillez Vérifier que vous avez  remplis tout les champs');

         }
         else{

            $(".modal-title").text("Bienvenu   " + $("#Nom").val());

            $(".modal-body").html(' Votre date de naissance est : ' + $("#Date").val() + 
            '</br>'  + 'Et vous habitez : ' + '</br>'  + 
            '<img src="https://maps.googleapis.com/maps/api/staticmap?center=Noisy%20Le%Grand&markers=Noisy%20Le%Grand&size=800x400&zoom=12&key=AIzaSyBAIbFV9W1NopwHu8RFS06YugjVXqn6ewc"  height="260" width="420"/>' 
             + '</br>' + '<a href="http://maps.google.com/maps?q=Noisy-Le-Grand">' + $("#Adresse").val() +  '</a>' );

         }

         $("#myModal").modal("show");
     });

 });