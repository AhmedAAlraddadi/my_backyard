
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (registration) {
    console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
    );
  });
}


$(document).ready(function(){
  $("img").click(function(){
    $(this).hide();
  });
});

