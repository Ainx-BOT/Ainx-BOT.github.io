function home(){
   $("#api").css("display","none");
   $("#tools").css("display","none");
   $("#doc").css("display","none")
   $("#home").css("display","block");
}
function api(){
   $("#home").css("display","none");
   $("#tools").css("display","none");
   $("#doc").css("display","none")
   $("#api").css("display","block");
}
function tools(){
   $("#home").css("display","none");
   $("#api").css("display","none");
   $("#doc").css("display","none")
   $("#tools").css("display","block");
}
function docs(){
   $("#home").css("display","none");
   $("#api").css("display","none");
   $("#tools").css("display","none");
   $("#doc").css("display","block");
}
function mp4(){
   var valid=document.getElementById("url_mp4").value;
   if (valid == ""){
      Swal.fire({title:'<strong class="text-light">Message</strong>',background:"#002a36",html:'<p class="text-light" style="font-family: courier new; font-size: 15px;">Url tidak boleh kosong!</p>',icon:"error"});
      return false;
   }
   $.ajax({
      type: "POST",
      url:"https://ainxbot-api.herokuapp.com/api/ytdl",
      data: "url="+document.getElementById("url_mp4").value,
      beforeSend: function() {
          $("#load2").html('<span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>');
      },
      success:function(result){
          $("#load2").html('<i class="bi bi-search"></i>');
          var js=JSON.stringify(result.Result);
          var js2=JSON.parse(js);
          Swal.fire({
             title: '<strong class="text-light">Result</strong>',
             icon: 'success',
             background: "#002a36",
             html : '<iframe src="'+js2.Url_download_vidio+'"></iframe><br><span class="text-light">Klik titik tiga untuk download</span>'
          });
      }
   });
}
function mp3(){
   var valid=document.getElementById("url_mp3").value;
   if (valid == ""){
      Swal.fire({title:'<strong class="text-light">Message</strong>',background:"#002a36",html:'<p class="text-light" style="font-family: courier new; font-size: 15px;">Url tidak boleh kosong!</p>',icon:"error"});
      return false;
   }
   $.ajax({
      type: "POST",
      url:"https://ainxbot-api.herokuapp.com/api/ytdl",
      data: "url="+document.getElementById("url_mp3").value,
      beforeSend: function() {
          $("#load3").html('<span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>');
      },
      success:function(result){
          $("#load3").html('<i class="bi bi-search"></i>');
          var js=JSON.stringify(result.Result);
          var js2=JSON.parse(js);
          Swal.fire({
             title: '<strong class="text-light">Result</strong>',
             icon: 'success',
             background: "#002a36",
             html : '<audio controls autoplay><source src="'+js2.Url_download_music+'"></audio><br><span class="text-light">Klik titik tiga untuk download</span>'
          });
      }
   });
}
function play (){
         var valid=document.getElementById("text").value;
         if (valid == ""){
             Swal.fire({title:'<strong class="text-light">Message</strong>',background:"#002a36",html:'<p class="text-light" style="font-family: courier new; font-size: 13px;">Text tidak boleh kosong!</p>',icon:"error"});
             return false;
         }
         responsiveVoice.speak(document.getElementById("text").value,
           document.getElementById("lg").value,
           {
            pitch: 1,
            rate: 1,
            volume: 1
           }
         );
}
function stop (){
        responsiveVoice.cancel();
}

function dvf(){
    var valid=document.getElementById("url_fb").value;
    if (valid == ""){
        Swal.fire({title:'<strong class="text-light">Message</strong>',background:"#002a36",html:'<p class="text-light" style="font-family: courier new; font-size: 15px;">Url tidak boleh kosong!</p>',icon:"error"});
        return false;
    }
    $.ajax({
      type: "POST",
      url:"https://ainxbot-api.herokuapp.com/api/fbdownloader",
      data: "url="+document.getElementById("url_fb").value,
      beforeSend: function() {
          $("#load1").html('<span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>');
      },
      success:function(result){
          $("#load1").html('<i class="bi bi-search"></i>');
          Swal.fire({
             title: '<strong class="text-light">Result</strong>',
             icon: 'success',
             background:"#002a36",
             html : '<iframe src="'+result.Result+'"></iframe><br><span class="text-light">Klik titik tiga untuk download</span>'
          });
      }
   });
}
function spam(){
    var valid=document.getElementById("nomor").value;
    if (valid == ""){
        Swal.fire({title:'<strong class="text-light">Message</strong>',background:"#002a36",html:'<p class="text-light" style="font-family: courier new; font-size: 15px;">Nomor tidak boleh kosong!</p>',icon:"error"});
        return false;
    }
    $.ajax({
      type: "POST",
      url:"https://ainxbot-api.herokuapp.com/api/spammer",
      data: "no="+document.getElementById("nomor").value,
      beforeSend: function() {
          $("#load4").html('<span class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></span>');
      },
      success:function(result){
          $("#load4").html('<i class="bi bi-send"></i>');
          Swal.fire({
             title: '<strong class="text-light>Result</strong>',
             icon: 'success',
             background:"#002a36",
             html : '<span class="text-light">'+result.Message+'</span>'
          });
      }
   });
}
