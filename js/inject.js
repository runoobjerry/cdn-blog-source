$(window).scroll(function(e){var scrollSeviye=$(this).scrollTop();if(scrollSeviye>500){scrollSeviye=500}var buyutme=(scrollSeviye/100)+1;$('#blur').css('backdrop-filter','blur('+scrollSeviye/100+'px)');$('#blur').css('-webkit-backdrop-filter','blur('+scrollSeviye/100+'px)')});function copyToClip(content,message){var aux=document.createElement("input");aux.setAttribute("value",content);document.body.appendChild(aux);aux.select();navigator.clipboard.writeText(content);document.body.removeChild(aux);if(message==null){alert("钱包地址已复制到剪贴板")}else{alert(message)}};