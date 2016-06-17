$(document).ready(function(){function validateForm(){var inputName=$(this).attr('name');var val=$(this).val();switch(inputName)
{case'name':if(val.length>2&&val!='')
{$(this).removeClass('error');$(this).addClass('not_error');}
else
{$(this).removeClass('not_error').addClass('error');}
break;case'email':var rv_email=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;if(val!=''&&rv_email.test(val))
{$(this).removeClass('error');$(this).addClass('not_error');}
else
{$(this).removeClass('not_error').addClass('error');}
break;case'phone1':if(val!=''&&val.length<=3)
{$(this).removeClass('error');$(this).addClass('not_error');}
else
{$(this).removeClass('not_error');$(this).addClass('error');}
break;case'phone2':if(val!=''&&val.length<=3)
{$(this).removeClass('error');$(this).addClass('not_error');}
else
{$(this).removeClass('not_error');$(this).addClass('error');}
break;case'phone3':if(val!=''&&val.length>=7)
{$(this).removeClass('error');$(this).addClass('not_error');}
else
{$(this).removeClass('not_error');$(this).addClass('error');}
break;}}
$('input.name, input.email, input.phone1, input.phone2, input.phone3').unbind().blur(validateForm);$('input.name, input.email, input.phone1, input.phone2, input.phone3').keypress(validateForm);});