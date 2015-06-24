function gallery(){
        $('#psd1').click(function() { bootbox.alert('<img class="img-responsive" src="img/projectpsd.png"><h4 class="text-center">PSD to HTML</h4><div class="col-md-offset-3 col-md-9"><a href="https://github.com/mahendhar9/infusion" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://mahendhar9.github.io/infusion/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
        $('#calci1').click(function() { bootbox.alert('<img class="img-responsive" src="img/projectcalci.png"><h4 class="text-center">Calculator</h4><div class="col-md-offset-3 col-md-9"><a href="https://github.com/mahendhar9/calci" target="_blank"><button type="button" class="btn btn-success">Github URL</button></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://mahendhar9.github.io/calci/" target="_blank"><button type="button" class="btn btn-danger">Launch Demo</button></a></div>'); });
        
    }

$(document).ready(gallery);
